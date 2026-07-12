import { ENDPOINTS_CHARACTER } from "@/constants/endpoint";
import { checkError, checkUrl } from "@/utils/checkApi";

import type {
  CharacterListRequest,
  CharacterListResponse,
} from "@/types/character.types";

const API_BASE_URL = process.env.API_BASE_URL;

/** 방 전체 캐릭터 목록 조회 */
export async function getCharacterList(
  path: CharacterListRequest,
): Promise<CharacterListResponse> {
  checkUrl(API_BASE_URL, "API_BASE_URL");

  const { roomCode } = path;

  const url = `${API_BASE_URL}${ENDPOINTS_CHARACTER.LIST.replace(":roomCode", roomCode)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  });

  const result: CharacterListResponse = await response.json();

  checkError(response, result, "캐릭터 조회에 실패했습니다.");

  return result;
}
