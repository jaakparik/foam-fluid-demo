import { SlidersHorizontalDuotone, ShareDuotone } from "foamicons";

interface MediaKitTitleBarProps {
  talentName: string;
}

function ButtonSecondary() {
  return (
    <button
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="button-secondary"
    >
      <div className="size-[16px]" style={{ color: "#54657D" }}>
        <SlidersHorizontalDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
      </div>
    </button>
  );
}

function ButtonPrimary() {
  return (
    <button
      className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px] cursor-pointer transition-opacity hover:opacity-90"
      data-name="button-primary"
    >
      <div className="size-[20px]" style={{ color: "white" }}>
        <ShareDuotone size={20} strokeWidth="var(--icon-stroke-width)" />
      </div>
    </button>
  );
}

export function MediaKitTitleBar({ talentName }: MediaKitTitleBarProps) {
  return (
    <div
      className="content-stretch flex items-center justify-between relative w-full"
      data-name="filter bar"
    >
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#303d4f] text-[16px]">
          {talentName}'s Media Kit
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <ButtonSecondary />
        <ButtonPrimary />
      </div>
    </div>
  );
}
