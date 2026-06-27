export default function RoomInfo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm bg-surface-container-high px-4 py-2 rounded-full border border-deep-border">
        <span className="font-bold">ROOM-AX79-K</span>
        <button
          className="hover:text-primary transition-colors flex items-center justify-center"
          title="방 코드 복사"
        >
          <span className="material-symbols-outlined text-[16px]">
            content_copy
          </span>
        </button>
      </div>
      {/* Mobile Menu Toggle (Optional for smaller screens to show links if needed) */}
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
}
