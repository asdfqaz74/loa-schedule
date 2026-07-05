"use client";

import { ScheduleCalendarResponse } from "@/types/schedule.types";
import CardDay from "./CardDay";
import CardEmpty from "./CardEmpty";

type WeeklyScheduleProps = {
  weeklySchedule: ScheduleCalendarResponse | [];
  weekStartDate: string;
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
}: WeeklyScheduleProps) {
  return (
    <div className="flex overflow-x-auto pb-6 -mx-page-mobile px-page-mobile md:mx-0 md:px-0 gap-6 snap-x snap-mandatory">
      {weeklySchedule.map((day) =>
        day.raids.length > 0 ? (
          <CardDay
            key={day.dayOfWeek}
            day={DAY_LABELS[day.dayOfWeek]}
            dayOfWeek={day.dayOfWeek}
            weekStartDate={weekStartDate}
            raids={day.raids}
          />
        ) : (
          <CardEmpty key={day.dayOfWeek} day={DAY_LABELS[day.dayOfWeek]} />
        ),
      )}
    </div>
  );
}
