type Week =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

/* -------------------------------------------- */
/*                   주간 달력 조회               */
/* -------------------------------------------- */

/** 주간 달력 조회 요청 */
export type ScheduleCalendarRequest = {
  roomCode: string; // path
  weekStartDate: string; // YYYY-MM-DD , query
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
    roasterId: number;
    /** 캐릭터가 속한 로스터 이름 */
    roasterName: string;
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
export type ScheduleCalendarResponse = ScheduleCalendarItem;
