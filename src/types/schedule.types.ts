/* -------------------------------------------- */
/*                     공통 타입                  */
/* -------------------------------------------- */

type Week =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

type EntriesBody = {
  weekStartDate: string;
  dayOfWeek: Week;
  title: string;
  startTime: string;
  raidItemId: number;
};

/* -------------------------------------------- */
/*                   주간 달력 조회               */
/* -------------------------------------------- */

/** 주간 달력 요청 (path) */
export type ScheduleCalendarPath = {
  roomCode: string;
};

/** 주간 달력 요청 (query) */
export type ScheduleCalendarQuery = {
  weekStartDate: string;
};

/** 주간 달력 레이드 아이템 */
export type ScheduleCalendarRaidItem = {
  /** 일정 ID */
  scheduleEntryId: number;
  /** 일정 카드 제목 */
  title: string;
  /** 일정 시작 시간. 시간 미정이면 null */
  startTime: string; // 21:30

  raid: {
    /** 레이드 항목 ID */
    raidItemId: number;
    /** 레이드 명 */
    raidName: string; // 카제로스 2막
    /** 권장/입장 아이템 레벨 */
    itemLevel: number;
    /** 현재 활성 상태 */
    active: boolean;
    /** 대표 이미지 등록 여부 */
    hasImage: boolean;
    /** 대표 이미지 조회 URL */
    imageUrl: string; // hasImage=false 이면 null.
  };

  /** 이 일정에 참여하도록 배정된 캐릭터 목록 */
  characters: {
    /** 일정-캐릭터 연결 ID */
    scheduleEntryCharacterId: number;
    /** 캐릭터 ID */
    characterId: number;
    /** 캐릭터가 속한 로스터 ID */
    rosterId: number;
    /** 캐릭터가 속한 로스터 이름 */
    rosterName: string;
    /** 로스트아크 캐릭터 명 */
    characterName: string;
    /** 로스트아크 직업명 */
    characterClassName: string;
    /** 아이템 레벨 문자열 */
    itemLevel: string;
    /** 전투력 문자열 */
    combatPower: string;
  }[];
};

/** 주간 달력 아이템 */
export type ScheduleCalendarItem = {
  dayOfWeek: Week;
  date: string; // YYYY-MM-DD
  raids: ScheduleCalendarRaidItem[];
};

/** 주간 달력 응답 */
export type ScheduleCalendarResponse = ScheduleCalendarItem[];

/* -------------------------------------------- */
/*                     일정 생성                  */
/* -------------------------------------------- */

export type EntriesCreateBody = EntriesBody;

export type EntriesCreatePath = {
  roomCode: string;
};

export type EntriesCreateResponse = EntriesCreateBody & {
  scheduleEntryId: number;
};

/* -------------------------------------------- */
/*                     일정 수정                  */
/* -------------------------------------------- */

export type EntriesEditBody = EntriesBody;

export type EntriesEditPath = {
  roomCode: string;
  scheduleEntryId: number;
};

export type EntriesEditResponse = EntriesEditBody & {
  scheduleEntryId: number;
};

/* -------------------------------------------- */
/*                   일정 목록 조회               */
/* -------------------------------------------- */

export type SchedulesListPath = {
  roomCode: string;
};

export type SchedulesListQuery = {
  weekStartDate: string;
};

export type SchedulesListItem = EntriesBody & {
  scheduleEntryId: number;
};

export type SchedulesListResponse = SchedulesListItem[];
