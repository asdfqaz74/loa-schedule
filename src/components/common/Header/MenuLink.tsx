"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

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
  {
    segement: "scheduler",
    label: "스케줄러",
  },
  {
    segement: "characters",
    label: "캐릭터 관리",
  },
] as const;

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
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex items-center gap-8">
      <h1 className="font-display text-xl font-bold text-primary tracking-tight">
        로스트아크 스케줄러
      </h1>
      <nav className="hidden md:flex items-center gap-6 h-16">
        {MENU_ITEMS.map((item) => {
          const href = `/${id}/${item.segement}`;
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <LinkComponent
              key={item.segement}
              href={href}
              isActive={isActive}
              label={item.label}
            />
          );
        })}
      </nav>
    </div>
  );
}
