"use client";

import { enterRoomAction } from "@/app/actions";
import { EnterRoomRequest } from "@/types/room.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ROOMCODE = /^[A-Z0-9]{6}$/;

export default function RoomForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnterRoomRequest>({
    defaultValues: {
      roomCode: "",
    },
  });

  const onSubmit = async (values: EnterRoomRequest) => {
    setServerMessage(null);
    console.log(values);

    const result = await enterRoomAction(values);

    if (!result.success) {
      setServerMessage(result.message);
      return;
    }

    setServerMessage(result.message);
    router.push("/scheduler");
  };

  return (
    <form
      className="flex items-center justify-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="roomCode" className="text-sm font-medium">
          방 코드
        </label>

        <input
          id="roomCode"
          type="text"
          placeholder="방 코드를 입력하세요"
          className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-amber-400"
          {...register("roomCode", {
            required: "방 코드를 입력해주세요.",
            setValueAs: (value) => value.trim().toUpperCase(),
            pattern: {
              value: ROOMCODE,
              message: "방 코드는 영문 대문자 또는 숫자 6자리여야 합니다.",
            },
          })}
        />

        {errors.roomCode && (
          <p className="text-xs text-red-400">{errors.roomCode.message}</p>
        )}

        {serverMessage && (
          <p className="text-xs text-amber-300">{serverMessage}</p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "입장 중..." : "입장"}
      </button>
    </form>
  );
}
