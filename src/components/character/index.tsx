import { LayoutGrid, List } from "lucide-react";
import { getCharacterListAction } from "@/app/[id]/characters/actions";
import CharacterSubHeader from "./SubHeader";
import CharacterList from "./CharacterList";

type CharactersWrapperProps = {
  roomCode: string;
};

export default async function CharactersWrapper({
  roomCode,
}: CharactersWrapperProps) {
  const response = await getCharacterListAction({ roomCode });

  if (!response.success) {
    return (
      <div className="mx-auto w-full max-w-container px-page-mobile py-8 md:px-page-desktop md:py-12">
        <p className="surface-card p-6 text-error">{response.message}</p>
      </div>
    );
  }

  const characters = response.data;

  return (
    <div className="mx-auto w-full max-w-container px-page-mobile py-8 md:px-page-desktop md:py-12">
      <CharacterSubHeader characterCount={characters.length} />
      <div
        className="mt-10 flex overflow-x-auto border-b border-deep-border"
        role="tablist"
        aria-label="캐릭터 정렬 방식"
      >
        <button
          type="button"
          role="tab"
          aria-selected="true"
          className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-primary px-4 py-3 font-mono text-sm font-bold text-primary md:px-6"
        >
          <LayoutGrid className="size-4" aria-hidden="true" />
          레벨별 보기
        </button>
        <button
          type="button"
          role="tab"
          aria-selected="false"
          className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-transparent px-4 py-3 font-mono text-sm text-on-surface-variant transition-colors hover:text-primary md:px-6"
        >
          <List className="size-4" aria-hidden="true" />
          그룹별 보기
        </button>
      </div>
      <CharacterList characters={characters} />
    </div>
  );
}
