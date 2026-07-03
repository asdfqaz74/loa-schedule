/* -------------------------------------------- */
/*                    공통 아이템                */
/* -------------------------------------------- */

/** 공통 레이드 아이템 */
export type CommonRaidItem = {
  /** 레이드 식별 아이디 */
  raidItemId: number;
  /** 레이드 이름 */
  raidName: string;
  /** 레이드 가능 레벨 */
  itemLevel: number;
  /** 활성화 여부 */
  active: boolean;
  /** 이미지 여부 */
  hasImage: boolean;
  /** 이미지 존재 시, url */
  imageUrl: string | null;
};

/* -------------------------------------------- */
/*            전역 레이드 항목 목록 조회           */
/* -------------------------------------------- */

/** 전역 레이드 아이템 */
export type GlobalRaidItems = CommonRaidItem;

/** 전역 레이드 요청 쿼리 */
export type GlobalRaidItemRequest = {
  includeInactive: boolean;
};

/** 전역 레이드 응답 */
export type GlobalRaidResponse = GlobalRaidItems[];

/* -------------------------------------------- */
/*          방 기준 레이드 항목 목록 조회          */
/* -------------------------------------------- */

/** 방 기준 레이드 항목 아이템 */
export type RoomRaidItems = CommonRaidItem;

/** 방 기준 레이드 요청 파라미터(path) */
export type RoomRaidPath = {
  roomCode: string;
};

/** 방 기준 레이드 요청 파라미터(query) */
export type RoomRaidQuery = {
  includeInactive: boolean;
};

/** 방 기준 레이드 항목 응답 */
export type RoomRaidResponse = RoomRaidItems[];
