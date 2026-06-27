import SubHeader from "@/components/Scheduler/SubHeader";

export default function SchedulerPage() {
  return (
    <main className="flex-1 pt-20 min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background Glow */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" /> */}
      <div className="max-w-container-wide mx-auto px-page-mobile md:px-page-desktop py-8">
        {/* Header Section */}
        <SubHeader />
        {/* Weekly Grid */}
        <div className="flex overflow-x-auto pb-6 -mx-page-mobile px-page-mobile md:mx-0 md:px-0 gap-6 snap-x snap-mandatory">
          {/* Monday Column */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">월</h3>
              <span className="label-sm text-on-surface-variant">1 스케줄</span>
            </div>
            {/* Accordion Card 1 */}
            <div className="surface-card flex flex-col">
              {/* Header (Always visible) */}
              <div
                className="p-5 cursor-pointer flex flex-col gap-3"
                onClick="this.parentElement.classList.toggle('active')"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="body-lg text-primary font-bold">
                      월요일 밤 카멘 하드 트라이
                    </h4>
                    <div className="flex items-center gap-2 label-md text-on-surface-variant mt-1">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      21:00
                    </div>
                  </div>
                  <span className="status-badge" data-status="scheduled">
                    예정
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1 label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">
                      group
                    </span>
                    <span>2/8 참여</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300">
                    expand_more
                  </span>
                </div>
              </div>
              {/* Expanded Content */}
              <div className="px-5 border-t border-deep-border bg-[var(--input-surface)]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="label-sm text-on-surface-variant">
                      대상 레이드:
                    </span>
                    <span className="text-on-surface label-md font-bold">
                      카멘
                    </span>
                  </div>
                  <div>
                    <span className="label-sm text-on-surface-variant block mb-2">
                      참여 원정대 및 캐릭터
                    </span>
                    <div className="flex flex-col gap-3">
                      {/* Roster 1 */}
                      <div className="bg-surface-dim border border-deep-border rounded p-3 flex flex-col gap-2">
                        <div className="flex items-center gap-2 label-sm text-primary font-bold border-b border-deep-border pb-1">
                          <span className="material-symbols-outlined text-[16px]">
                            shield_person
                          </span>
                          원정대: 빛나는검성
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              데모닉
                            </span>
                            <span className="body-sm text-on-surface">
                              암살귀검 (1630)
                            </span>
                          </div>
                          <div className="h-6 w-px bg-deep-border mx-2" />
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              역할
                            </span>
                            <span className="body-sm text-on-surface">
                              딜러
                            </span>
                          </div>
                          <div className="h-6 w-px bg-deep-border mx-2" />
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              확정
                            </span>
                            <span className="material-symbols-outlined text-status-completed text-[18px]">
                              check_circle
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Roster 2 */}
                      <div className="bg-surface-dim border border-deep-border rounded p-3 flex flex-col gap-2">
                        <div className="flex items-center gap-2 label-sm text-primary font-bold border-b border-deep-border pb-1">
                          <span className="material-symbols-outlined text-[16px]">
                            shield_person
                          </span>
                          원정대: 서폿장인
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              바드
                            </span>
                            <span className="body-sm text-on-surface">
                              천상의하모니 (1625)
                            </span>
                          </div>
                          <div className="h-6 w-px bg-deep-border mx-2" />
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              역할
                            </span>
                            <span className="body-sm text-on-surface">
                              서포터
                            </span>
                          </div>
                          <div className="h-6 w-px bg-deep-border mx-2" />
                          <div className="flex flex-col">
                            <span className="label-sm text-on-surface-variant">
                              확정
                            </span>
                            <span className="material-symbols-outlined text-status-not-participating text-[18px]">
                              cancel
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="label-sm text-on-surface-variant block mb-1">
                      메모
                    </span>
                    <p className="body-sm text-on-surface bg-surface-dim p-2 rounded border border-deep-border">
                      3관문 트라이 파티. 디코 필수.
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border-2 border-deep-border rounded bg-surface-dim group-hover:border-primary transition-colors">
                        <input
                          className="opacity-0 absolute inset-0 cursor-pointer peer"
                          onchange="
                      this.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle(
                        'border-primary',
                      )
                    "
                          type="checkbox"
                        />
                        <span className="material-symbols-outlined text-[16px] text-primary opacity-0 peer-checked:opacity-100 transition-opacity">
                          check
                        </span>
                      </div>
                      <span className="label-md text-on-surface group-hover:text-primary transition-colors">
                        완료 표시
                      </span>
                    </label>
                    <div className="flex gap-2">
                      <button className="label-sm text-on-surface-variant hover:text-primary transition-colors px-2 py-1">
                        수정
                      </button>
                      <button className="label-sm text-on-surface-variant hover:text-status-not-participating transition-colors px-2 py-1">
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Empty Columns for remaining days to show structure */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start opacity-50">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">화</h3>
              <span className="label-sm text-on-surface-variant">0 스케줄</span>
            </div>
            <div
              className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              onClick="toggleModal('add-raid-modal')"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="label-md">스케줄 추가</span>
            </div>
          </div>
          {/* Repeat empty column structure for Wed-Sun for visual completeness */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start opacity-50">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">수</h3>
              <span className="label-sm text-on-surface-variant">0 스케줄</span>
            </div>
            <div
              className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              onClick="toggleModal('add-raid-modal')"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="label-md">스케줄 추가</span>
            </div>
          </div>
          {/* Repeat empty column structure for Wed-Sun for visual completeness */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start opacity-50">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">수</h3>
              <span className="label-sm text-on-surface-variant">0 스케줄</span>
            </div>
            <div
              className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              onClick="toggleModal('add-raid-modal')"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="label-md">스케줄 추가</span>
            </div>
          </div>
          {/* Repeat empty column structure for Wed-Sun for visual completeness */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start opacity-50">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">수</h3>
              <span className="label-sm text-on-surface-variant">0 스케줄</span>
            </div>
            <div
              className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              onClick="toggleModal('add-raid-modal')"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="label-md">스케줄 추가</span>
            </div>
          </div>
          {/* Repeat empty column structure for Wed-Sun for visual completeness */}
          <div className="min-w-[300px] flex-1 flex flex-col gap-4 snap-start opacity-50">
            <div className="flex items-center justify-between pb-2 border-b border-deep-border">
              <h3 className="heading-md text-on-surface">수</h3>
              <span className="label-sm text-on-surface-variant">0 스케줄</span>
            </div>
            <div
              className="border border-dashed border-deep-border rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant gap-2 hover:border-primary hover:text-primary cursor-pointer transition-colors"
              onClick="toggleModal('add-raid-modal')"
            >
              <span className="material-symbols-outlined">add</span>
              <span className="label-md">스케줄 추가</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
