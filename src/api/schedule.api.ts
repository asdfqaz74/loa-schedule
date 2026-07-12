import { ENDPOINTS_SCHEDULE } from "@/constants/endpoint";
import type {
  EntriesCreateBody,
  EntriesCreatePath,
  EntriesCreateResponse,
  EntriesEditBody,
  EntriesEditPath,
  EntriesEditResponse,
  ScheduleCalendarPath,
  ScheduleCalendarQuery,
  ScheduleCalendarResponse,
  ScheduleEntryCharacterAddBody,
  ScheduleEntryCharacterAddPath,
  ScheduleEntryCharacterAddResponse,
} from "@/types/schedule.types";
import { checkError, checkUrl } from "@/utils/checkApi";

const API_BASE_URL = process.env.API_BASE_URL;

/** 일정 생성 */
export async function createEntries(
  path: EntriesCreatePath,
  body: EntriesCreateBody,
): Promise<EntriesCreateResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode } = path;

  const URL = `${API_BASE_URL}${ENDPOINTS_SCHEDULE.CREATE.replace(":roomCode", encodeURIComponent(String(roomCode)))}`;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result: EntriesCreateResponse = await response.json();

  checkError(response, result, "일정 생성에 실패했습니다.");

  return result;
}

/** 일정 수정 */
export async function editEntries(
  path: EntriesEditPath,
  body: EntriesEditBody,
): Promise<EntriesEditResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode, scheduleEntryId } = path;

  const URL = `${API_BASE_URL}${ENDPOINTS_SCHEDULE.EDIT.replace(":roomCode", String(roomCode)).replace(":scheduleEntryId", encodeURIComponent(String(scheduleEntryId)))}`;

  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result: EntriesEditResponse = await response.json();

  checkError(response, result, "일정 수정에 실패했습니다.");

  return result;
}

/** 일정 참여 캐릭터 추가 */
export async function addScheduleEntryCharacter(
  path: ScheduleEntryCharacterAddPath,
  body: ScheduleEntryCharacterAddBody,
): Promise<ScheduleEntryCharacterAddResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode, scheduleEntryId } = path;

  const URL = `${API_BASE_URL}${ENDPOINTS_SCHEDULE.ADD_CHARACTER.replace(":roomCode", encodeURIComponent(String(roomCode))).replace(":scheduleEntryId", encodeURIComponent(String(scheduleEntryId)))}`;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result: ScheduleEntryCharacterAddResponse = await response.json();

  checkError(response, result, "일정 참여 캐릭터 추가에 실패했습니다.");

  return result;
}

/** 주간 달력 조회 */
export async function getWeeklyCalendar(
  path: ScheduleCalendarPath,
  query: ScheduleCalendarQuery,
): Promise<ScheduleCalendarResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode } = path;

  const params = new URLSearchParams();

  if (query.weekStartDate) {
    params.set("weekStartDate", String(query.weekStartDate));
  }

  const queryString = params.toString();

  const URL = `${API_BASE_URL}${ENDPOINTS_SCHEDULE.GET_CALENDAR.replace(":roomCode", encodeURIComponent(String(roomCode)))}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 300,
    },
  });

  const result: ScheduleCalendarResponse = await response.json();

  checkError(response, result, "주간 레이드 스케줄 불러오기를 실패했습니다.");

  return result;
}
