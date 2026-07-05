"use server";

import { getRoomRaid } from "@/api/raid-items.api";
import {
  createEntries,
  editEntries,
  getWeeklyCalendar,
} from "@/api/schedule.api";
import type {
  RoomRaidPath,
  RoomRaidQuery,
  RoomRaidResponse,
} from "@/types/raid-items.types";
import type {
  EntriesCreateBody,
  EntriesCreatePath,
  EntriesEditBody,
  EntriesEditPath,
  ScheduleCalendarPath,
  ScheduleCalendarQuery,
  ScheduleCalendarResponse,
} from "@/types/schedule.types";
import { revalidatePath } from "next/cache";

/* -------------------------------------------- */
/*            방 기준 레이드 항목 목록 조회          */
/* -------------------------------------------- */
type GetRaidAction =
  | {
      success: true;
      data: RoomRaidResponse;
    }
  | {
      success: false;
      message: string;
    };

export async function getRaidActions(
  path: RoomRaidPath,
  query: RoomRaidQuery,
): Promise<GetRaidAction> {
  try {
    const result = await getRoomRaid(path, query);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "레이드 목록 불러오기를 실패했습니다.",
    };
  }
}

/* -------------------------------------------- */
/*                     일정 생성                  */
/* -------------------------------------------- */
type EntryCreateAction =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
    };

export async function submitEntryForm(
  path: EntriesCreatePath,
  body: EntriesCreateBody,
): Promise<EntryCreateAction> {
  try {
    await createEntries(path, body);

    revalidatePath(`/${path.roomCode}/scheduler`);

    return {
      success: true,
      message: "일정을 생성하였습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "일정 생성에 실패했습니다.",
    };
  }
}

/* -------------------------------------------- */
/*                     일정 수정                  */
/* -------------------------------------------- */
type EntryEditAction =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
    };

export async function submitEditEntryForm(
  path: EntriesEditPath,
  body: EntriesEditBody,
): Promise<EntryEditAction> {
  try {
    await editEntries(path, body);

    revalidatePath(`/${path.roomCode}/scheduler`);

    return {
      success: true,
      message: "일정을 수정하였습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "일정 수정에 실패했습니다.",
    };
  }
}

/* -------------------------------------------- */
/*                  주간 스케줄 불러오기           */
/* -------------------------------------------- */
type WeeklyScheduleAction =
  | {
      success: true;
      data: ScheduleCalendarResponse;
    }
  | {
      success: false;
      message: string;
    };

export async function getWeeklySchedule(
  path: ScheduleCalendarPath,
  query: ScheduleCalendarQuery,
): Promise<WeeklyScheduleAction> {
  try {
    const result = await getWeeklyCalendar(path, query);

    if (!result) {
      return {
        success: false,
        message: "주간 레이드 스케줄 불러오기를 실패했습니다.",
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "주간 레이드 스케줄 불러오기를 실패했습니다.",
    };
  }
}
