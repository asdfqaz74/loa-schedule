import { atom } from "jotai";

import type { RoomRaidResponse } from "@/types/raid-items.types";

// 레이드 모달 상태관리
export const addModalAtom = atom(false);

// 레이드 아이템
export const raidItem = atom<RoomRaidResponse>([]);
