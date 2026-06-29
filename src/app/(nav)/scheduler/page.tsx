import SubHeader from "@/components/Scheduler/SubHeader";
import WeeklyGrid from "@/components/Scheduler/Weekly";

export default function SchedulerPage() {
  return (
    <main className="flex-1 pt-20 min-h-screen bg-background relative overflow-hidden">
      <div className="max-w-container-wide mx-auto px-page-mobile md:px-page-desktop py-8">
        <SubHeader />
        <WeeklyGrid />
      </div>
    </main>
  );
}
