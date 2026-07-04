import AddRaidModal from "@/components/modal/AddRaidModal";
import SubHeader from "@/components/Scheduler/SubHeader";
import WeeklyGrid from "@/components/Scheduler/Weekly";
import { getWeeklySchedule } from "./actions";
import { getWeekStartDate } from "@/utils/date";

type SchedulePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SchedulerPage({ params }: SchedulePageProps) {
  const { id: roomCode } = await params;

  const result = await getWeeklySchedule(
    { roomCode },
    { weekStartDate: getWeekStartDate() },
  );

  const weeklySchedule = result.success ? result.data : [];

  return (
    <>
      <main className="flex-1 pt-20 min-h-screen bg-background relative overflow-hidden">
        <div className="max-w-container-wide mx-auto px-page-mobile md:px-page-desktop py-8">
          <SubHeader />
          <WeeklyGrid weeklySchedule={weeklySchedule} />
        </div>
      </main>
      <AddRaidModal />
    </>
  );
}
