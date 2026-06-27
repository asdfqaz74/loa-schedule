import Link from "next/link";

export default function MainPage() {
  return (
    <body className="bg-surface-container-lowest text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden selection:bg-primary selection:text-on-primary py-12">
      <Link href={"/schedule"}>스케줄 페이지로</Link>
      <div>메인페이지</div>
    </body>
  );
}
