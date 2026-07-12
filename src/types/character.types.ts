/* -------------------------------------------- */
/*                방 전체 캐릭터 목록 조회          */
/* -------------------------------------------- */

/** 방 전체 캐릭터 목록 조회 요청(path) */
export type CharacterListRequest = {
  roomCode: string;
};

/** 캐릭터 목록 아이템 */
export type CharacterListItem = {
  characterId: number;
  rosterId: number;
  rosterName: string;
  characterName: string;
  characterClassName: string;
  itemLevel: string;
  combatPower: string;
  lasySyncedAt: string;
  cacheHit: boolean;
};

/** 방 전체 캐릭터 목록 조회 응답 */
export type CharacterListResponse = CharacterListItem[];
