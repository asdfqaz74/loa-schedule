"use client";

import { useEffect, useRef, type DragEvent } from "react";
import Image from "next/image";
import { Clock3, GripVertical, Users, X } from "lucide-react";

import { CLASS_ICONS, type ClassIconKey } from "@/constants/classIcon";
import type { CharacterListItem } from "@/types/character.types";
import type { ScheduleCalendarRaidItem } from "@/types/schedule.types";

type CharacterSidebarProps = {
  isOpen: boolean;
  raid: ScheduleCalendarRaidItem | null;
  characters: CharacterListItem[];
  draftCharacterIds: number[];
  onClose: () => void;
};

function getClassIcon(className: string) {
  if (className in CLASS_ICONS) {
    return CLASS_ICONS[className as ClassIconKey];
  }

  return null;
}

export default function CharacterSidebar({
  isOpen,
  raid,
  characters,
  draftCharacterIds,
  onClose,
}: CharacterSidebarProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const assignedCharacterIds = new Set(
    [
      ...(raid?.characters.map((character) => character.characterId) ?? []),
      ...draftCharacterIds,
    ],
  );

  const handleDragStart = (
    event: DragEvent<HTMLLIElement>,
    character: CharacterListItem,
  ) => {
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData(
      "application/x-loa-character-id",
      String(character.characterId),
    );
    event.dataTransfer.setData("text/plain", character.characterName);
  };

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <aside
      aria-hidden={!isOpen}
      aria-labelledby="character-sidebar-title"
      className={`fixed bottom-0 right-0 top-16 z-50 flex w-full max-w-md flex-col border-l border-deep-border bg-surface-base shadow-[-20px_0_48px_rgb(0_0_0/0.34)] transition-transform duration-200 ease-out ${
        isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
      }`}
    >
        <header className="border-b border-deep-border px-5 py-5 md:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="label-sm mb-2 text-primary">캐릭터 배정</p>
              <h2
                id="character-sidebar-title"
                className="truncate font-display text-xl font-semibold text-on-surface"
              >
                {raid?.title ?? "스케줄 선택"}
              </h2>
              <p className="body-sm mt-1 truncate">
                {raid?.raid.raidName ?? "선택한 스케줄의 캐릭터 목록"}
              </p>
              <p className="body-sm mt-3 text-primary">
                캐릭터를 원하는 스케줄 카드로 드래그하세요.
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              tabIndex={isOpen ? 0 : -1}
              className="grid size-10 shrink-0 place-items-center rounded-sm text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
              onClick={onClose}
              aria-label="캐릭터 사이드바 닫기"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-on-surface-variant">
            <span className="label-sm inline-flex items-center gap-2">
              <Clock3 className="size-4 text-primary" aria-hidden="true" />
              {raid?.startTime?.slice(0, 5) ?? "시간 미정"}
            </span>
            <span className="label-sm inline-flex items-center gap-2">
              <Users className="size-4 text-primary" aria-hidden="true" />
              참여 {raid?.characters.length ?? 0}명 · 전체 {characters.length}명
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h3 className="label-md text-on-surface">방 캐릭터</h3>
            <span className="label-sm text-on-surface-variant">
              {characters.length}명
            </span>
          </div>

          {characters.length === 0 ? (
            <div className="rounded-sm border border-dashed border-deep-border px-5 py-10 text-center">
              <p className="body-md text-on-surface">
                방에 등록된 캐릭터가 없습니다.
              </p>
              <p className="body-sm mt-2">
                캐릭터 관리에서 캐릭터를 먼저 등록해주세요.
              </p>
            </div>
          ) : (
            <ul className="space-y-2" aria-label="방에 등록된 캐릭터 목록">
              {characters.map((character) => {
                const icon = getClassIcon(character.characterClassName);
                const isAssigned = assignedCharacterIds.has(
                  character.characterId,
                );

                return (
                  <li
                    key={character.characterId}
                    data-character-id={character.characterId}
                    draggable={!isAssigned}
                    onDragStart={(event) =>
                      handleDragStart(event, character)
                    }
                    title={
                      isAssigned
                        ? "이미 이 스케줄에 참여 중입니다."
                        : "스케줄 카드로 드래그"
                    }
                    className={`flex items-center gap-3 rounded-sm border border-deep-border bg-surface-container-low px-3 py-3 transition-colors ${
                      isAssigned
                        ? "opacity-60"
                        : "cursor-grab hover:border-primary/60 active:cursor-grabbing"
                    }`}
                  >
                    <GripVertical
                      className="size-4 shrink-0 text-on-surface-variant"
                      aria-hidden="true"
                    />
                    <div className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-sm border border-deep-border bg-surface-dim">
                      {icon ? (
                        <Image
                          src={icon.src}
                          alt=""
                          width={36}
                          height={36}
                        />
                      ) : (
                        <span className="font-display text-sm font-semibold text-primary">
                          {character.characterName.slice(0, 1)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-semibold text-on-surface">
                          {character.characterName}
                        </p>
                        {isAssigned ? (
                          <span className="status-badge shrink-0" data-status="completed">
                            참여 중
                          </span>
                        ) : null}
                      </div>
                      <p className="body-sm mt-0.5 truncate">
                        {character.rosterName} · {character.characterClassName}
                      </p>
                    </div>

                    <span className="label-sm shrink-0 text-primary">
                      Lv. {character.itemLevel}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
    </aside>
  );
}
