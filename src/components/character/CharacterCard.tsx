import { MoreVertical, RefreshCw } from "lucide-react";
import type { CharacterListItem } from "@/types/character.types";

export default function CharacterCard({
  character,
}: {
  character: CharacterListItem;
}) {
  return (
    <article className="surface-card character-card p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="label-sm rounded-sm border border-primary/25 bg-primary/8 px-2 py-1 text-primary">
              {character.rosterName}
            </span>
            <span className="body-sm text-on-surface-variant">
              {character.characterClassName}
            </span>
          </div>
          <h3 className="heading-md truncate text-on-surface">
            {character.characterName}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className="rounded-sm p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
            aria-label={`${character.characterName} 정보 동기화`}
          >
            <RefreshCw className="size-4" aria-hidden="true" />
          </button>

          <details className="character-card__menu relative">
            <summary
              className="rounded-sm p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
              aria-label={`${character.characterName} 메뉴 열기`}
            >
              <MoreVertical className="size-5" aria-hidden="true" />
            </summary>
            <div className="character-card__menu-panel">
              <button type="button">수정</button>
              <button type="button" className="text-error">
                삭제
              </button>
            </div>
          </details>
        </div>
      </div>

      <dl className="mt-8 space-y-4">
        <div className="character-card__metric">
          <dt className="label-md text-on-surface-variant">아이템 레벨</dt>
          <dd className="character-level-value font-display text-2xl font-bold text-primary md:text-[2rem]">
            {character.itemLevel}
          </dd>
        </div>
        <div className="character-card__metric">
          <dt className="label-md text-on-surface-variant">전투력</dt>
          <dd className="character-level-value body-lg font-semibold text-on-surface">
            {character.combatPower}
          </dd>
        </div>
      </dl>
    </article>
  );
}
