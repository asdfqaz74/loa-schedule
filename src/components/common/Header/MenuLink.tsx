"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* -------------------------------------------- */
/*               Constant Setting               */
/* -------------------------------------------- */

/* --------------- 각 클래스별 css 설정 -------------- */
const BASE_CLASS = "h-full flex items-center label-md transition-colors";
const ACTIVE_CLASS = "text-primary font-bold border-b-2 border-primary";
const INACTIVE_CLASS =
  "text-on-surface hover:text-on-surface-variant font-medium";

/* ----------------- 메뉴 아이템 설정 ---------------- */
const MENU_ITEMS = [
  { href: "/scheduler", label: "스케줄러", activePaths: ["/scheduler"] },
  { href: "/characters", label: "캐릭터 관리", activePaths: ["/characters"] },
];

/* -------------------------------------------- */
/*               Component Setting              */
/* -------------------------------------------- */

type LinkComponentType = {
  href: string;
  isActive: boolean;
  label: string;
};

function LinkComponent({ href, isActive, label }: LinkComponentType) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${BASE_CLASS} ${isActive ? ACTIVE_CLASS : INACTIVE_CLASS}`}
    >
      {label}
    </Link>
  );
}
/**
 * 서비스 이름 + 메뉴 링크
 *
 * 헤더의 왼쪽 구역을 담당합니다.
 *
 */
export default function MenuLink() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex items-center gap-8">
      <h1 className="font-display text-xl font-bold text-primary tracking-tight">
        로스트아크 스케줄러
      </h1>
      <nav className="hidden md:flex items-center gap-6 h-16">
        {MENU_ITEMS.map((item) => {
          const isActive = item.activePaths.some((path) =>
            path === "/"
              ? pathname === "/"
              : pathname === path || pathname.startsWith(`${path}/`),
          );

          return (
            <LinkComponent
              key={item.href}
              href={item.href}
              isActive={isActive}
              label={item.label}
            />
          );
        })}
      </nav>
    </div>
  );
}
