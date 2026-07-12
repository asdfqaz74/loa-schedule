"use client";

import { useState, type DragEvent } from "react";
import { ChevronDown, UserPlus } from "lucide-react";
import Image from "next/image";

import { CLASS_ICONS, type ClassIconKey } from "@/constants/classIcon";
import type {
  ScheduleCalendarItem,
  ScheduleCalendarRaidItem,
} from "@/types/schedule.types";
import { getImageUrl } from "@/utils/getImageUrl";
import { useSetAtom } from "jotai";
import { editModalAtom, selectedScheduleAtom } from "@/atom/atom";
import type { CharacterListItem } from "@/types/character.types";

/* -------------------------------------------- */
/*                 Type Setting                 */
/* -------------------------------------------- */

type CardDayProps = {
  day: string;
  dayOfWeek: ScheduleCalendarItem["dayOfWeek"];
  weekStartDate: string;
  raids: ScheduleCalendarRaidItem[];
  roomCharacters: CharacterListItem[];
  draftAssignments: Record<number, number[]>;
  onAddCharacter: (raid: ScheduleCalendarRaidItem) => void;
  onDropCharacter: (scheduleEntryId: number, characterId: number) => void;
};

/* -------------------------------------------- */
/*                Helper Function               */
/* -------------------------------------------- */

function getClassIcon(className: string) {
  if (className in CLASS_ICONS) {
    return CLASS_ICONS[className as ClassIconKey];
  }

  return null;
}

/* -------------------------------------------- */
/*                   Component                  */
/* -------------------------------------------- */

export default function CardDay({
  day,
  dayOfWeek,
  weekStartDate,
  raids,
  roomCharacters,
  draftAssignments,
  onAddCharacter,
  onDropCharacter,
}: CardDayProps) {
  /* -------------------------------------------- */
  /*                  React Hook                  */
  /* -------------------------------------------- */
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [dragOverId, setDragOverId] = useState<number | null>(null);
  const setOpenEditModal = useSetAtom(editModalAtom);
  const setSelectedSchedule = useSetAtom(selectedScheduleAtom);

  /* -------------------------------------------- */
  /*                 Event Handler                */
  /* -------------------------------------------- */
  // 확장 버튼
  const handleExpandButton = (scheduleEntryId: number) => {
    setExpandedId((prev) =>
      prev === scheduleEntryId ? null : scheduleEntryId,
    );
  };

  // 수정 버튼
  const handleEditClick = (raid: ScheduleCalendarRaidItem) => {
    const editData = {
      scheduleEntryId: raid.scheduleEntryId,
      weekStartDate,
      dayOfWeek,
      title: raid.title,
      startTime: raid.startTime.slice(0, 5),
      raidItemId: raid.raid.raidItemId,
    };

    console.log(editData);

    setSelectedSchedule(editData);
    setOpenEditModal(true);
  };

  const handleDragOver = (
    event: DragEvent<HTMLDivElement>,
    scheduleEntryId: number,
  ) => {
    const hasCharacter = Array.from(event.dataTransfer.types).includes(
      "application/x-loa-character-id",
    );
    if (!hasCharacter) return;

    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setDragOverId(scheduleEntryId);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    setDragOverId(null);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>,
    raid: ScheduleCalendarRaidItem,
  ) => {
    event.preventDefault();
    setDragOverId(null);

    const characterId = Number(
      event.dataTransfer.getData("application/x-loa-character-id"),
    );

    if (!Number.isSafeInteger(characterId) || characterId <= 0) return;

    const isAlreadyAssigned = raid.characters.some(
      (character) => character.characterId === characterId,
    );
    if (isAlreadyAssigned) return;

    onDropCharacter(raid.scheduleEntryId, characterId);
    setExpandedId(raid.scheduleEntryId);
  };

  return (
    <div className="min-w-75 flex-1 flex flex-col gap-4 snap-start">
      <div className="flex items-center justify-between pb-2 border-b border-deep-border">
        <h3 className="heading-md text-on-surface">{day}</h3>
        <span className="label-sm text-on-surface-variant">
          {raids.length} 스케줄
        </span>
      </div>

      {raids.map((raid) => {
        const isExpanded = expandedId === raid.scheduleEntryId;
        const isDragOver = dragOverId === raid.scheduleEntryId;
        const draftCharacterIds =
          draftAssignments[raid.scheduleEntryId] ?? [];
        const draftCharacters = roomCharacters.filter((character) =>
          draftCharacterIds.includes(character.characterId),
        );
        const participantCount =
          raid.characters.length + draftCharacters.length;

        const raidImageUrl =
          raid.raid.hasImage && raid.raid.imageUrl
            ? getImageUrl(raid.raid.imageUrl)
            : undefined;

        return (
          <div
            key={raid.scheduleEntryId}
            data-schedule-entry-id={raid.scheduleEntryId}
            data-drop-active={isDragOver}
            className={`surface-card relative flex flex-col overflow-hidden ${
              isDragOver ? "border-primary shadow-gold-glow" : ""
            }`}
            onDragOver={(event) =>
              handleDragOver(event, raid.scheduleEntryId)
            }
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(event, raid)}
          >
            {isDragOver ? (
              <div className="pointer-events-none absolute inset-2 z-30 grid place-items-center rounded-sm border border-dashed border-primary bg-surface-base/95 text-primary">
                <span className="label-md inline-flex items-center gap-2 font-bold">
                  <UserPlus className="size-5" aria-hidden="true" />
                  여기에 캐릭터 놓기
                </span>
              </div>
            ) : null}
            <div className="relative overflow-hidden p-5 flex flex-col gap-3">
              {raidImageUrl && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10"
                  style={{ backgroundImage: `url(${raidImageUrl})` }}
                />
              )}
              <div className="relative flex justify-between items-start">
                <div>
                  <h4 className="body-lg text-primary font-bold">
                    {raid.title}
                  </h4>

                  <div className="flex items-center gap-2 label-md text-on-surface-variant mt-1">
                    <span className="material-symbols-outlined text-[16px]">
                      schedule
                    </span>
                    {raid.startTime}
                  </div>
                </div>

                <span className="status-badge" data-status="scheduled">
                  예정
                </span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-1 label-sm text-on-surface-variant">
                  <span>{participantCount}명 참여</span>
                </div>

                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleExpandButton(raid.scheduleEntryId)}
                  aria-expanded={isExpanded}
                  aria-label={`${raid.title} 상세 ${isExpanded ? "접기" : "펼치기"}`}
                >
                  <ChevronDown
                    className={`${isExpanded ? "rotate-180" : ""} transition-transform duration-100`}
                  />
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isExpanded ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 border-t border-deep-border bg-(--input-surface)">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface label-md font-bold text-2xl">
                      {raid.raid.raidName}
                    </span>
                  </div>

                  <div>
                    <span className="label-sm text-on-surface-variant block mb-2">
                      참여 캐릭터
                    </span>

                    <div className="flex flex-col gap-3">
                      {participantCount === 0 ? (
                        <p className="body-sm text-on-surface-variant">
                          아직 참여 캐릭터가 없습니다.
                        </p>
                      ) : (
                        <>
                          {raid.characters.map((character) => {
                            const icon = getClassIcon(
                              character.characterClassName,
                            );

                            return (
                              <div
                                key={character.scheduleEntryCharacterId}
                                className="bg-surface-dim border border-deep-border rounded p-3 flex flex-col gap-2"
                              >
                                <div className="flex justify-between items-center gap-2 label-sm text-primary font-bold border-b border-deep-border pb-1">
                                  {icon ? (
                                    <Image
                                      src={icon.src}
                                      alt={icon.label}
                                      width={32}
                                      height={32}
                                    />
                                  ) : null}
                                  <span className="text-sm">
                                    {character.characterName}
                                  </span>
                                </div>

                                <div className="flex items-center gap-3">
                                  <div className="flex flex-col">
                                    <span className="label-sm text-on-surface-variant">
                                      직업
                                    </span>
                                    <span className="body-sm text-on-surface">
                                      {character.characterClassName}
                                    </span>
                                  </div>

                                  <div className="h-6 w-px bg-deep-border mx-2" />

                                  <div className="flex flex-col">
                                    <span className="label-sm text-on-surface-variant">
                                      아이템 레벨
                                    </span>
                                    <span className="body-sm text-on-surface">
                                      {character.itemLevel}
                                    </span>
                                  </div>

                                  <div className="h-6 w-px bg-deep-border mx-2" />

                                  <div className="flex flex-col">
                                    <span className="label-sm text-on-surface-variant">
                                      그룹
                                    </span>
                                    <span className="body-sm text-on-surface">
                                      {character.rosterName}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {draftCharacters.map((character) => {
                            const icon = getClassIcon(
                              character.characterClassName,
                            );

                            return (
                              <div
                                key={`draft-${character.characterId}`}
                                className="flex items-center gap-3 rounded border border-primary/35 bg-primary/5 p-3"
                              >
                                {icon ? (
                                  <Image
                                    src={icon.src}
                                    alt=""
                                    width={32}
                                    height={32}
                                  />
                                ) : null}
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-bold text-on-surface">
                                    {character.characterName}
                                  </p>
                                  <p className="body-sm truncate">
                                    {character.rosterName} · {character.characterClassName}
                                  </p>
                                </div>
                                <span className="status-badge shrink-0" data-status="scheduled">
                                  추가 예정
                                </span>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button
                      type="button"
                      className="label-sm inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                      onClick={() => onAddCharacter(raid)}
                      aria-label={`${raid.title} 참여 캐릭터 추가`}
                    >
                      <UserPlus className="size-4" aria-hidden="true" />
                      추가
                    </button>
                    <button
                      type="button"
                      className="label-sm text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
                      onClick={() => handleEditClick(raid)}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      className="label-sm text-on-surface-variant hover:text-status-not-participating transition-colors px-2 py-1"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
