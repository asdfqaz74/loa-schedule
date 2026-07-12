import { Star } from "lucide-react";

import type { CharacterListItem } from "@/types/character.types";
import CharacterCard from "./CharacterCard";

type CharacterListProps = {
  characters: CharacterListItem[];
};

type LevelTier = {
  id: string;
  label: string;
  min: number;
  max: number;
};

const LEVEL_TIERS: LevelTier[] = [
  { id: "tier-1620", label: "Lv. 1620 이상", min: 1620, max: Infinity },
  { id: "tier-1580", label: "Lv. 1580 - 1619", min: 1580, max: 1620 },
  { id: "tier-1540", label: "Lv. 1540 - 1579", min: 1540, max: 1580 },
  { id: "tier-under-1540", label: "Lv. 1540 미만", min: 0, max: 1540 },
];

function parseItemLevel(itemLevel: string) {
  const parsedLevel = Number(itemLevel.replaceAll(",", ""));
  return Number.isFinite(parsedLevel) ? parsedLevel : 0;
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0) {
    return (
      <div className="surface-card mt-10 p-8 text-center">
        <p className="body-md">등록된 캐릭터가 없습니다.</p>
      </div>
    );
  }

  const tiers = LEVEL_TIERS.map((tier) => ({
    ...tier,
    characters: characters.filter((character) => {
      const itemLevel = parseItemLevel(character.itemLevel);
      return itemLevel >= tier.min && itemLevel < tier.max;
    }),
  })).filter((tier) => tier.characters.length > 0);

  return (
    <div className="mt-10 space-y-12">
      {tiers.map((tier) => (
        <section key={tier.id} aria-labelledby={tier.id}>
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-deep-border pb-4">
            <h2
              id={tier.id}
              className="flex items-center gap-3 font-display text-xl font-semibold text-on-surface md:text-2xl"
            >
              <span className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary">
                <Star className="size-4" strokeWidth={2} aria-hidden="true" />
              </span>
              {tier.label}
            </h2>
            <span className="label-sm shrink-0 text-on-surface-variant">
              {tier.characters.length}명
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tier.characters.map((character) => (
              <CharacterCard
                key={character.characterId}
                character={character}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
