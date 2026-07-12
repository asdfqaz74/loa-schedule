"use server";

import { getCharacterList } from "@/api/character.api";
import { checkRoomCode } from "@/utils/checkRex";
import {
  CharacterListRequest,
  CharacterListResponse,
} from "@/types/character.types";

/* -------------------------------------------- */
/*                  Action Type                 */
/* -------------------------------------------- */

/** 방 전체 캐릭터 목록 조회 액션 타입 */
type GetCharacterListAction =
  | {
      success: true;
      data: CharacterListResponse;
    }
  | {
      success: false;
      message: string;
    };

/* -------------------------------------------- */
/*                Action Setting                */
/* -------------------------------------------- */

/** 방 전체 캐릭터 목록 조회 액션 */
export async function getCharacterListAction(
  path: CharacterListRequest,
): Promise<GetCharacterListAction> {
  try {
    const isPassed = checkRoomCode(path.roomCode);

    if (!path || typeof path !== "object" || !isPassed) {
      return {
        success: false,
        message: "올바르지 않은 방 코드입니다.",
      };
    }

    const result = await getCharacterList(path);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "캐릭터 조회를 실패했습니다. 다시 시도해주세요.",
    };
  }
}
