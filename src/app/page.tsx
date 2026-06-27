import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <Link href={"/schedule"}>스케줄 페이지로</Link>
      <div>메인페이지</div>
    </>
  );
}
