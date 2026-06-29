import { ENDPOINTS_ROOM } from "@/constants/endpoint";
import { EnterRoomRequest, EnterRoomResponse } from "@/types/room.types";
import { checkError, checkUrl } from "@/utils/checkApi";
import "server-only";

const API_BASE_URL = process.env.API_BASE_URL;

/** 방 입장 */
export async function enterRoom(
  request: EnterRoomRequest,
): Promise<EnterRoomResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode } = request;

  const URL = `${API_BASE_URL}${ENDPOINTS_ROOM.ENTER.replace(":roomCode", String(roomCode))}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-cache",
  });

  const result: EnterRoomResponse = await response.json();

  checkError(response, result, "방 입장에 실패했습니다.");

  return result;
}
