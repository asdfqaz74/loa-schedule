import AddRaidModal from "@/components/modal/AddRaidModal";
import SubHeader from "@/components/Scheduler/SubHeader";
import WeeklyGrid from "@/components/Scheduler/Weekly";
import { getWeeklySchedule } from "./actions";
import { getWeekStartDate } from "@/utils/date";
import EditRaidModal from "@/components/modal/EditRaidModal";
import { getCharacterListAction } from "../characters/actions";

type SchedulePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SchedulerPage({ params }: SchedulePageProps) {
  const { id: roomCode } = await params;

  const weekStartDate = getWeekStartDate();

  const [scheduleResult, characterResult] = await Promise.all([
    getWeeklySchedule({ roomCode }, { weekStartDate }),
    getCharacterListAction({ roomCode }),
  ]);

  const weeklySchedule = scheduleResult.success ? scheduleResult.data : [];
  const roomCharacters = characterResult.success ? characterResult.data : [];

  return (
    <>
      <main className="flex-1 pt-20 min-h-screen bg-background relative overflow-hidden">
        <div className="max-w-container-wide mx-auto px-page-mobile md:px-page-desktop py-8">
          <SubHeader />
          <WeeklyGrid
            roomCode={roomCode}
            weeklySchedule={weeklySchedule}
            weekStartDate={weekStartDate}
            roomCharacters={roomCharacters}
          />
        </div>
      </main>
      <AddRaidModal />
      <EditRaidModal />
    </>
  );
}
