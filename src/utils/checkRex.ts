const ROOM_CODE_PATTERN = /^[A-Z0-9]{6}$/;

/** 방코드 정규식 테스트 */
export function checkRoomCode(roomCode: unknown): roomCode is string {
  return typeof roomCode === "string" && ROOM_CODE_PATTERN.test(roomCode);
}
