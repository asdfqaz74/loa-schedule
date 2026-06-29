import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CLASS_ICONS } from "@/constants/classIcon";

type CardDayProps = {
  day: string;
  count: number;
  raid: string;
};

export default function CardDay({
  day = "월",
  count = 1,
  raid = "카멘",
}: CardDayProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleExpandButton = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="min-w-75 flex-1 flex flex-col gap-4 snap-start">
      {/* 스케줄 헤더 */}
      <div className="flex items-center justify-between pb-2 border-b border-deep-border">
        <h3 className="heading-md text-on-surface">{day}</h3>
        <span className="label-sm text-on-surface-variant">{count} 스케줄</span>
      </div>
      {/* Accordion Card 1 */}
      <div
        className={`surface-card flex flex-col ${isCompleted ? "border-primary" : ""}`}
      >
        {/* Header (Always visible) */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="body-lg text-primary font-bold">
                월요일 밤 카멘 하드 트라이
              </h4>
              <div className="flex items-center gap-2 label-md text-on-surface-variant mt-1">
                <span className="material-symbols-outlined text-[16px]">
                  스케줄
                </span>
                21:00
              </div>
            </div>
            <span className="status-badge" data-status="scheduled">
              예정
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1 label-sm text-on-surface-variant">
              <span>2/8 참여</span>
            </div>
            <button className="cursor-pointer" onClick={handleExpandButton}>
              <ChevronDown
                className={`${isExpanded ? "rotate-180" : ""} transition-transform duration-100`}
              />
            </button>
          </div>
        </div>
        {/* 확장 컨텐츠 */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? "max-h-150 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="p-5 border-t border-deep-border bg-(--input-surface)">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-on-surface label-md font-bold text-2xl">
                  {raid}
                </span>
              </div>
              <div>
                <span className="label-sm text-on-surface-variant block mb-2">
                  참여 캐릭터
                </span>
                <div className="flex flex-col gap-3">
                  {/* Roster 1 */}
                  <div className="bg-surface-dim border border-deep-border rounded p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-2 label-sm text-primary font-bold border-b border-deep-border pb-1">
                      <Image
                        src={CLASS_ICONS.바드.src}
                        alt={CLASS_ICONS.바드.label}
                        width={40}
                      />
                      <span className="text-lg">빛나는검성</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          데모닉
                        </span>
                        <span className="body-sm text-on-surface">
                          암살귀검 (1630)
                        </span>
                      </div>
                      <div className="h-6 w-px bg-deep-border mx-2" />
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          역할
                        </span>
                        <span className="body-sm text-on-surface">딜러</span>
                      </div>
                      <div className="h-6 w-px bg-deep-border mx-2" />
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          확정
                        </span>
                        <span className="material-symbols-outlined text-status-completed text-[18px]">
                          check_circle
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Roster 2 */}
                  <div className="bg-surface-dim border border-deep-border rounded p-3 flex flex-col gap-2">
                    <div className="flex items-center gap-2 label-sm text-primary font-bold border-b border-deep-border pb-1">
                      <span className="material-symbols-outlined text-[16px]">
                        shield_person
                      </span>
                      원정대: 서폿장인
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          바드
                        </span>
                        <span className="body-sm text-on-surface">
                          천상의하모니 (1625)
                        </span>
                      </div>
                      <div className="h-6 w-px bg-deep-border mx-2" />
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          역할
                        </span>
                        <span className="body-sm text-on-surface">서포터</span>
                      </div>
                      <div className="h-6 w-px bg-deep-border mx-2" />
                      <div className="flex flex-col">
                        <span className="label-sm text-on-surface-variant">
                          확정
                        </span>
                        <span className="material-symbols-outlined text-status-not-participating text-[18px]">
                          cancel
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="label-sm text-on-surface-variant block mb-1">
                  메모
                </span>
                <p className="body-sm text-on-surface bg-surface-dim p-2 rounded border border-deep-border">
                  3관문 트라이 파티. 디코 필수.
                </p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 border-2 border-deep-border rounded bg-surface-dim group-hover:border-primary transition-colors">
                    <input
                      className="opacity-0 absolute inset-0 cursor-pointer peer"
                      checked={isCompleted}
                      onChange={() => setIsCompleted((completed) => !completed)}
                      type="checkbox"
                    />
                    <span className="material-symbols-outlined text-[16px] text-primary opacity-0 peer-checked:opacity-100 transition-opacity">
                      check
                    </span>
                  </div>
                  <span className="label-md text-on-surface group-hover:text-primary transition-colors">
                    완료 표시
                  </span>
                </label>
                <div className="flex gap-2">
                  <button className="label-sm text-on-surface-variant hover:text-primary transition-colors px-2 py-1">
                    수정
                  </button>
                  <button className="label-sm text-on-surface-variant hover:text-status-not-participating transition-colors px-2 py-1">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
