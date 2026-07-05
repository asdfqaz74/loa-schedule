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
};
