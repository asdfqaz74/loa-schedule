"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ScheduleCalendarResponse } from "@/types/schedule.types";
import type { ScheduleCalendarRaidItem } from "@/types/schedule.types";
import type { CharacterListItem } from "@/types/character.types";
import CardDay from "./CardDay";
import CardEmpty from "./CardEmpty";
import CharacterSidebar from "../CharacterSidebar";

type WeeklyScheduleProps = {
  weeklySchedule: ScheduleCalendarResponse | [];
  weekStartDate: string;
  roomCharacters: CharacterListItem[];
};

const DAY_LABELS = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
} as const;

export default function WeeklyGrid({
  weeklySchedule,
  weekStartDate,
  roomCharacters,
}: WeeklyScheduleProps) {
  const [selectedRaid, setSelectedRaid] =
    useState<ScheduleCalendarRaidItem | null>(null);
  const [draftAssignments, setDraftAssignments] = useState<
    Record<number, number[]>
  >({});
  const [scrollState, setScrollState] = useState({
    canScrollPrevious: false,
    canScrollNext: false,
  });
  const scheduleScrollerRef = useRef<HTMLDivElement>(null);

  const updateScrollState = useCallback(() => {
    const scroller = scheduleScrollerRef.current;
    if (!scroller) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;

    setScrollState({
      canScrollPrevious: scroller.scrollLeft > 4,
      canScrollNext: scroller.scrollLeft < maxScrollLeft - 4,
    });
  }, []);

  useEffect(() => {
    const scroller = scheduleScrollerRef.current;
    if (!scroller) return;

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const handleScheduleScroll = (direction: -1 | 1) => {
    const scroller = scheduleScrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * Math.max(scroller.clientWidth * 0.72, 320),
      behavior: "smooth",
    });
  };

  const handleCharacterDrop = (
    scheduleEntryId: number,
    characterId: number,
  ) => {
    setDraftAssignments((previous) => {
      const assignedIds = previous[scheduleEntryId] ?? [];
      if (assignedIds.includes(characterId)) return previous;

      return {
        ...previous,
        [scheduleEntryId]: [...assignedIds, characterId],
      };
    });
  };

  const handleCloseSidebar = useCallback(() => setSelectedRaid(null), []);

  const selectedDraftCharacterIds = selectedRaid
    ? (draftAssignments[selectedRaid.scheduleEntryId] ?? [])
    : [];

  return (
    <>
      <div
        className={`transition-[padding] duration-200 ease-out ${
          selectedRaid ? "md:pr-[29rem]" : ""
        }`}
      >
        <div className="mb-4 flex items-center justify-end gap-2">
          <span className="label-sm mr-2 hidden text-on-surface-variant sm:inline">
            스케줄 이동
          </span>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-sm border border-deep-border bg-surface-base text-on-surface-variant transition-colors hover:border-primary hover:text-primary disabled:hover:border-deep-border disabled:hover:text-on-surface-variant"
            onClick={() => handleScheduleScroll(-1)}
            disabled={!scrollState.canScrollPrevious}
            aria-label="이전 스케줄 보기"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-sm border border-deep-border bg-surface-base text-on-surface-variant transition-colors hover:border-primary hover:text-primary disabled:hover:border-deep-border disabled:hover:text-on-surface-variant"
            onClick={() => handleScheduleScroll(1)}
            disabled={!scrollState.canScrollNext}
            aria-label="다음 스케줄 보기"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={scheduleScrollerRef}
          className="flex overflow-x-hidden pb-6 -mx-page-mobile px-page-mobile md:mx-0 md:px-0 gap-6 snap-x snap-mandatory"
        >
          {weeklySchedule.map((day) =>
            day.raids.length > 0 ? (
              <CardDay
                key={day.dayOfWeek}
                day={DAY_LABELS[day.dayOfWeek]}
                dayOfWeek={day.dayOfWeek}
                weekStartDate={weekStartDate}
                raids={day.raids}
                roomCharacters={roomCharacters}
                draftAssignments={draftAssignments}
                onAddCharacter={setSelectedRaid}
                onDropCharacter={handleCharacterDrop}
              />
            ) : (
              <CardEmpty key={day.dayOfWeek} day={DAY_LABELS[day.dayOfWeek]} />
            ),
          )}
        </div>
      </div>

      <CharacterSidebar
        isOpen={selectedRaid !== null}
        raid={selectedRaid}
        characters={roomCharacters}
        draftCharacterIds={selectedDraftCharacterIds}
        onClose={handleCloseSidebar}
      />
    </>
  );
}
