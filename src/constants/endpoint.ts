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
  GET_CALENDAR: "/api/rooms/:roomCode/schedule-entries/calendar",
};
