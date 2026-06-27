"use client";

import { PlusCircle } from "lucide-react";

export default function SubHeader() {
  const handleAddRaidButton = () => {
    console.log("add");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <h1 className="heading-lg text-on-surface mb-2">주간 레이드 스케줄</h1>
        <p className="body-md text-on-surface-variant">
          요일별로 레이드를 추가하고 참여 캐릭터를 관리하세요.
        </p>
      </div>
      <button
        className="bg-primary-container text-on-primary font-bold py-3 px-6 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-primary transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
        onClick={handleAddRaidButton}
      >
        <PlusCircle className="size-6" strokeWidth={1.8} />
        레이드 스케줄 추가
      </button>
    </div>
  );
}
