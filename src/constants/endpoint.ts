export const ENDPOINTS_ROOM = {
  ENTER: "/api/rooms/:roomCode",
  CREATE: "/api/rooms",
};

export const ENDPOINTS_RAID = {
  /** 방 기준 레이드 항목 목록 조회 */
  ROOM_ITEM: "/api/rooms/:roomCode/raid-items",
};

export const ENDPOINTS_SCHEDULE = {
  /** 일정 생성 */
  CREATE: "/api/rooms/:roomCode/schedule-entries",
  /** 스케줄 조회 */
  GET_CALENDAR: "/api/rooms/:roomCode/schedule-entries/calendar",
  /** 일정 수정 */
  EDIT: "/api/rooms/:roomCode/schedule-entries/:scheduleEntryId",
  /** 일정 참여 캐릭터 추가 */
  ADD_CHARACTER:
    "/api/rooms/:roomCode/schedule-entries/:scheduleEntryId/characters",
};

export const ENDPOINTS_CHARACTER = {
  /** 방 전체 캐릭터 목록 조회 */
  LIST: "/api/rooms/:roomCode/characters",
};
