import { ENDPOINTS_RAID } from "@/constants/endpoint";
import type {
  RoomRaidPath,
  RoomRaidQuery,
  RoomRaidResponse,
} from "@/types/raid-items.types";
import { checkError, checkUrl } from "@/utils/checkApi";

const API_BASE_URL = process.env.API_BASE_URL;

/** 방 기준 레이드 항목 목록 조회 */
export async function getRoomRaid(
  path: RoomRaidPath,
  query: RoomRaidQuery,
): Promise<RoomRaidResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode } = path;

  const params = new URLSearchParams();

  if (query.includeInactive !== undefined) {
    params.set("includeInactive", String(query.includeInactive));
  }

  const queryString = params.toString();

  const URL = `${API_BASE_URL}${ENDPOINTS_RAID.ROOM_ITEM.replace(":roomCode", encodeURIComponent(String(roomCode)))}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-cache",
  });

  const result: RoomRaidResponse = await response.json();

  checkError(response, result, "레이드 목록 불러오기를 실패했습니다.");

  return result;
}
