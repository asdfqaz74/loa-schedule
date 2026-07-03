"use client";

import {
  getRoomCodeSnapshot,
  subscribeRoomCode,
} from "@/utils/roomCodeStorage";
import { useSyncExternalStore } from "react";

/**
 * localStorage에 저장된 방코드를 React 상태처럼 구독하는 hook.
 * 서버 렌더링 중에는 localStorage를 사용할 수 없으므로 기본값은 null이다.
 */
export function useRoomCode() {
  return useSyncExternalStore(
    subscribeRoomCode,
    getRoomCodeSnapshot,
    () => null,
  );
}
