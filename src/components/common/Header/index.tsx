import MenuLink from "./MenuLink";
import RoomInfo from "./RoomInfo";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-base border-b border-deep-border">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-desktop h-16 flex justify-between items-center">
        {/* 왼쪽 : 서비스 이름 + 메뉴 링크 */}
        <MenuLink />
        {/* 오른쪽: 방 정보 */}
        <RoomInfo />
      </div>
    </header>
  );
}
