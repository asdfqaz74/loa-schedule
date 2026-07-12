import CharactersWrapper from "@/components/character";

type CharactersPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CharactersPage({ params }: CharactersPageProps) {
  const { id: roomCode } = await params;

  return (
    <main className="min-h-screen bg-background pt-20 pb-20">
      <CharactersWrapper roomCode={roomCode} />
    </main>
  );
}
