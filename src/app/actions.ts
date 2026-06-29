"use server";

import { enterRoom } from "@/api/room.api";
import { EnterRoomRequest, EnterRoomResponse } from "@/types/room.types";

type EnterRoomActionResult =
  | {
      success: true;
      data: EnterRoomResponse;
      message: string;
    }
  | {
      success: false;
      message: string;
    };

export async function enterRoomAction(
  request: EnterRoomRequest,
): Promise<EnterRoomActionResult> {
  try {
    const response = await enterRoom(request);

    return {
      success: true,
      data: response,
      message: "방에 입장했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "방 입장에 실패했습니다.",
    };
  }
}
