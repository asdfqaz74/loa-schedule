import { Plus } from "lucide-react";

type CharacterSubHeaderProps = {
  characterCount: number;
};

export default function CharacterSubHeader({
  characterCount,
}: CharacterSubHeaderProps) {
  return (
    <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="label-sm mb-3 text-primary">
          등록 캐릭터 {characterCount}명
        </p>
        <h1 className="heading-xl text-primary">캐릭터 관리</h1>
        <p className="body-lg mt-3 max-w-2xl">
          레이드 스케줄에 참여할 캐릭터를 등록하고 관리하세요.
        </p>
      </div>

      <button type="button" className="btn-primary w-full md:w-auto">
        <Plus className="size-5" aria-hidden="true" />
        캐릭터 추가
      </button>
    </header>
  );
}
