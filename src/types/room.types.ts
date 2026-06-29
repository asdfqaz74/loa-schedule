/* -------------------------------------------- */
/*                    방 공통 타입                */
/* -------------------------------------------- */

/** 공통 방 아이템 */
export type CommonRoomItem = {
  /** 방 식별 아이디 */
  roomId: number;
  /** 방 코드 */
  roomCode: string;
  /** 방 이름 */
  roomName: string;
  /** 최대 참여 인원 */
  maxMembers: number;
};

/* -------------------------------------------- */
/*                     방 생성                   */
/* -------------------------------------------- */

/** 방 생성 요청 바디 */
export type CreateRoomBody = {
  /** 방 이름 */
  roomName: string;
  /** 최대 참여 인원 */
  maxMembers: number;
};

/** 방 생성 응답 */
export type CreateRoomResponse = CommonRoomItem;

/* -------------------------------------------- */
/*                     방 입장                   */
/* -------------------------------------------- */

/** 방 입장 파라미터(path) */
export type EnterRoomRequest = {
  /** 방 코드(path) */
  roomCode: string;
};

/** 방 입장 응답 */
export type EnterRoomResponse = CommonRoomItem;
