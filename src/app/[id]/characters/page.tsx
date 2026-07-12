import CharacterCard, {
  CharacterItem,
} from "@/components/character/CharacterCard";
import { LayoutGrid, List, Plus, Star } from "lucide-react";

type CharacterTier = {
  id: string;
  label: string;
  characters: CharacterItem[];
};

const CHARACTER_TIERS: CharacterTier[] = [
  {
    id: "tier-1620",
    label: "Lv. 1620 이상",
    characters: [
      {
        name: "카마인블레이드",
        className: "블레이드",
        itemLevel: "1,620.00",
        combatPower: "5,200,000",
        group: "본캐",
      },
    ],
  },
  {
    id: "tier-1580",
    label: "Lv. 1580 - 1619",
    characters: [
      {
        name: "도화가보송",
        className: "도화가",
        itemLevel: "1,580.00",
        combatPower: "4,100,000",
        group: "부캐",
      },
    ],
  },
  {
    id: "tier-1540",
    label: "Lv. 1540 - 1579",
    characters: [
      {
        name: "바드수딩",
        className: "바드",
        itemLevel: "1,540.00",
        combatPower: "3,200,000",
        group: "배럭",
      },
    ],
  },
];

export default function CharactersPage() {
  const characterCount = CHARACTER_TIERS.reduce(
    (count, tier) => count + tier.characters.length,
    0,
  );

  return (
    <main className="min-h-screen bg-background pt-20 pb-20">
      <div className="mx-auto w-full max-w-container px-page-mobile py-8 md:px-page-desktop md:py-12">
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

        <div className="mt-10 space-y-12">
          {CHARACTER_TIERS.map((tier) => (
            <section key={tier.id} aria-labelledby={tier.id}>
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-deep-border pb-4">
                <h2
                  id={tier.id}
                  className="flex items-center gap-3 font-display text-xl font-semibold text-on-surface md:text-2xl"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
                    <Star
                      className="size-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  {tier.label}
                </h2>
                <span className="label-sm shrink-0 text-on-surface-variant">
                  {tier.characters.length}명
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {tier.characters.map((character) => (
                  <CharacterCard key={character.name} character={character} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
