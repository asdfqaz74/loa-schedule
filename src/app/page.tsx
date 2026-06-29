import RoomForm from "@/components/RoomForm";
import Link from "next/link";

export default function MainPage() {
  return (
    <main className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden selection:bg-primary selection:text-on-primary py-12">
      <Link href={"/scheduler"}>스케줄 페이지로</Link>
      <RoomForm />
      <div>메인페이지</div>
    </main>
  );
}
