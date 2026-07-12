import { addModalAtom } from "@/atom/atom";
import { useSetAtom } from "jotai";
import { PlusCircle } from "lucide-react";

type CardProps = {
  day: string;
};

export default function CardEmpty({ day = "화" }: CardProps) {
  const setOpenModal = useSetAtom(addModalAtom);

  const handleAddScheduleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="min-w-96 flex-1 flex flex-col gap-4 snap-start opacity-50">
      {/* 스케줄 헤더 */}
      <div className="flex items-center justify-between pb-2 border-b border-deep-border">
        <h3 className="heading-md text-on-surface">{day}</h3>
        <span className="label-sm text-on-surface-variant">0 스케줄</span>
      </div>
      {/* 스케줄 추가 */}
      <div
        className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
        onClick={handleAddScheduleClick}
      >
        <PlusCircle className="size-7" strokeWidth={1.8} />
        <span className="label-md">스케줄 추가</span>
      </div>
    </div>
  );
}
