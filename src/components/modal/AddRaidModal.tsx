"use client";

import { useAtom } from "jotai";
import { CircleX } from "lucide-react";

import { addModalAtom, raidItem } from "@/atom/atom";
import { useEffect } from "react";
import { getRaidActions, submitEntryForm } from "@/app/[id]/scheduler/actions";
import { useRoomCode } from "@/hooks/useRoomCode";
import { usePathname, useRouter } from "next/navigation";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { EntriesCreateBody } from "@/types/schedule.types";
import { getWeekStartDate } from "@/utils/date";
import { toast } from "react-toastify";

type EntryForm = EntriesCreateBody;

export default function AddRaidModal() {
  /* -------------------------------------------- */
  /*                  React Hook                  */
  /* -------------------------------------------- */
  const [openModal, setOpenModal] = useAtom(addModalAtom);
  const [item, setItem] = useAtom(raidItem);

  const router = useRouter();

  const { handleSubmit, register, reset } = useForm<EntryForm>();

  const storedRoomcode = useRoomCode();
  const pathname = usePathname();

  const pathRoomcode = pathname.split("/")[1];
  const roomCode = pathRoomcode || storedRoomcode;

  // 레이드 항목 불러오기
  useEffect(() => {
    if (!roomCode) return;

    const fetchRaidItems = async () => {
      const result = await getRaidActions(
        { roomCode },
        { includeInactive: false },
      );

      if (result.success) {
        setItem(result.data);
        return;
      }

      console.error(result.message);
    };

    fetchRaidItems();
  }, [roomCode, setItem]);

  /* -------------------------------------------- */
  /*                 Event Handler                */
  /* -------------------------------------------- */
  const onSubmit = async (data: EntryForm) => {
    if (!roomCode) return;

    const body: EntryForm = {
      ...data,
      weekStartDate: getWeekStartDate(),
    };

    const result = await submitEntryForm({ roomCode }, body);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);

    reset();
    setOpenModal(false);
    router.refresh();
  };

  const onInvalid: SubmitErrorHandler<EntryForm> = (errors) => {
    const message =
      errors.title?.message ||
      errors.dayOfWeek?.message ||
      errors.startTime?.message ||
      errors.raidItemId?.message ||
      "필수 값을 입력해주세요";

    toast.warn(message);
  };

  return (
    <>
      <div
        className={`${openModal ? "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" : "hidden"}`}
        onClick={() => setOpenModal(false)}
      />
      <form
        className={`${openModal ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-50 bg-surface-base border border-deep-border rounded-xl shadow-2xl flex flex-col max-h-[90vh]" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-raid-title"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <div className="flex items-center justify-between p-6 border-b border-deep-border">
          <h2
            className="text-headline-md font-headline-md text-on-surface"
            id="add-raid-title"
          >
            레이드 스케줄 추가
          </h2>
          <button
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setOpenModal(false)}
            type="button"
          >
            <CircleX />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-label-sm font-label-sm text-on-surface-variant"
              htmlFor="raid-title"
            >
              스케줄 제목
            </label>
            <input
              className="bg-surface-dim border border-deep-border text-on-surface rounded p-3 focus:outline-none focus:border-primary transition-colors placeholder:text-on-tertiary-fixed-variant"
              id="raid-title"
              placeholder="ex. 카제로스 하드 월요일 밤"
              type="text"
              {...register("title", {
                required: "스케줄 제목을 입력해주세요.",
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-label-sm font-label-sm text-on-surface-variant"
              htmlFor="raid-day"
            >
              요일
            </label>
            <select
              className="bg-surface-dim border border-deep-border text-on-surface rounded p-3 focus:outline-none focus:border-primary transition-colors"
              id="raid-day"
              defaultValue=""
              {...register("dayOfWeek", { required: "요일을 선택해주세요" })}
            >
              <option value="" disabled hidden>
                요일을 선택해주세요
              </option>
              <option value="MONDAY">월요일</option>
              <option value="TUESDAY">화요일</option>
              <option value="WEDNESDAY">수요일</option>
              <option value="THURSDAY">목요일</option>
              <option value="FRIDAY">금요일</option>
              <option value="SATURDAY">토요일</option>
              <option value="SUNDAY">일요일</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-label-sm font-label-sm text-on-surface-variant"
              htmlFor="raid-time"
            >
              시작 시간
            </label>
            <input
              className="bg-surface-dim border border-deep-border text-on-surface rounded p-3 focus:outline-none focus:border-primary transition-colors scheme-dark"
              id="raid-time"
              type="time"
              step={60}
              {...register("startTime", {
                required: "시작 시간을 입력해주세요",
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-label-sm font-label-sm text-on-surface-variant"
              htmlFor="raid-target"
            >
              대상 레이드
            </label>
            <select
              className="bg-surface-dim border border-deep-border text-on-surface rounded p-3 focus:outline-none focus:border-primary transition-colors"
              id="raid-target"
              defaultValue=""
              {...register("raidItemId", {
                required: "레이드를 선택해주세요",
                valueAsNumber: true,
              })}
            >
              <option value="" disabled hidden>
                레이드를 선택해주세요
              </option>
              {item.map((raid) => (
                <option key={raid.raidItemId} value={raid.raidItemId}>
                  {raid.raidName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-6 border-t border-deep-border flex justify-end gap-4 bg-surface-container-low rounded-b-xl">
          <button
            className="text-on-surface-variant hover:text-on-surface px-4 py-2 font-bold transition-colors text-label-md font-label-md"
            onClick={() => {
              reset();
              setOpenModal(false);
            }}
            type="button"
          >
            취소
          </button>
          <button
            className="bg-primary-container text-on-primary hover:bg-primary px-6 py-2 rounded font-bold transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-label-md font-label-md"
            type="submit"
          >
            저장
          </button>
        </div>
      </form>
    </>
  );
}
