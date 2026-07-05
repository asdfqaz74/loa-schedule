import { atom } from "jotai";

import type { RoomRaidResponse } from "@/types/raid-items.types";
import type { EntriesEditBody } from "@/types/schedule.types";

// 레이드 모달 상태관리
export const addModalAtom = atom(false);

// 레이드 아이템
export const raidItem = atom<RoomRaidResponse>([]);

// 레이드 모달 (수정) 상태관리
export const editModalAtom = atom(false);

// 레이드 수정용 atom
export type EditScheduleDraft = EntriesEditBody & {
  scheduleEntryId: number;
};

export const selectedScheduleAtom = atom<EditScheduleDraft | null>(null);
