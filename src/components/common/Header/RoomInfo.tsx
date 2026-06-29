"use client";

import { Copy, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RoomInfo() {
  const router = useRouter();

  /* -------------------------------------------- */
  /*                 Event Handler                */
  /* -------------------------------------------- */
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("ROOM-AX79-K, 복사테스트");
      toast.success("방 코드가 복사되었습니다.");
    } catch {
      toast.error("방 코드 복사에 실패했습니다.");
    }
  };

  const handleExitRoomButton = () => {
    router.replace("/");
  };

  /* -------------------------------------------- */
  /*                      JSX                     */
  /* -------------------------------------------- */
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm bg-surface-container-high px-4 py-2 rounded-full border border-deep-border">
        <span className="font-bold">ROOM-AX79-K</span>
        <button
          className="hover:text-primary transition-colors flex items-center justify-center"
          title="방 코드 복사"
          onClick={handleCopyClick}
        >
          <Copy className="size-4" strokeWidth={1.8} />
        </button>
      </div>
      <button
        title="방 나가기"
        type="button"
        className="hover:text-red-400 transition-colors"
        onClick={handleExitRoomButton}
      >
        <LogOut className="size-7" strokeWidth={1.8} />
      </button>
      {/* Mobile Menu Toggle (Optional for smaller screens to show links if needed) */}
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2">
        <Menu className="size-5" strokeWidth={1.8} />
      </button>
    </div>
  );
}
