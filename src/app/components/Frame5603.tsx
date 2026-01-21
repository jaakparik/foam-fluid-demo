import { ChartColumnSquareDuotone, ImageDuotone, ReelDuotone, StarDuotone } from "foamicons";

interface Frame5603Props {
  onPlatformAnalyticsClick?: () => void;
  onPlatformContentClick?: () => void;
  onBrandExperienceClick?: () => void;
  onVideoClick?: () => void;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
        <p className="css-ew64yg leading-[12px]">Select Media Kit elements</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[447.5px]">
      <Frame1 />
    </div>
  );
}

function Card({ onPlatformAnalyticsClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onPlatformAnalyticsClick}
    >
      <ChartColumnSquareDuotone size={20} strokeWidth="1.2" color="#54657D" />
      <p className="text-sm font-medium text-[#54657d] whitespace-nowrap">Platform analytics</p>
    </div>
  );
}

function Card1({ onPlatformContentClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onPlatformContentClick}
    >
      <ImageDuotone size={20} strokeWidth="1.2" color="#54657D" />
      <p className="text-sm font-medium text-[#54657d] whitespace-nowrap">Platform content</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]" data-name="card">
      <svg className="relative shrink-0 size-[20px]" fill="none" viewBox="0 0 16 16">
        <path d="M3.33317 4.66667V11.3333C3.33317 12.0697 3.92984 12.6667 4.6665 12.6667H11.3332C12.0698 12.6667 12.6665 12.0697 12.6665 11.3333V4.66667C12.6665 3.93 12.0698 3.33333 11.3332 3.33333H4.6665C3.92984 3.33333 3.33317 3.93 3.33317 4.66667Z" fill="#54657D" />
      </svg>
      <p className="text-sm font-medium text-[#54657d] whitespace-nowrap">Text</p>
    </div>
  );
}

function Card3({ onVideoClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onVideoClick}
    >
      <ReelDuotone size={20} strokeWidth="1.2" color="#54657D" />
      <p className="text-sm font-medium text-[#54657d] whitespace-nowrap">Video</p>
    </div>
  );
}

function Card4({ onBrandExperienceClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onBrandExperienceClick}
    >
      <StarDuotone size={20} strokeWidth="1.2" color="#54657D" />
      <p className="text-sm font-medium text-[#54657d] whitespace-nowrap">Brand experience</p>
    </div>
  );
}

function Frame3({ onPlatformAnalyticsClick, onPlatformContentClick, onBrandExperienceClick, onVideoClick }: Frame5603Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[959px]">
      <Card onPlatformAnalyticsClick={onPlatformAnalyticsClick} />
      <Card1 onPlatformContentClick={onPlatformContentClick} />
      <Card2 />
      <Card3 onVideoClick={onVideoClick} />
      <Card4 onBrandExperienceClick={onBrandExperienceClick} />
    </div>
  );
}

export default function Frame5603({ onPlatformAnalyticsClick, onPlatformContentClick, onBrandExperienceClick, onVideoClick }: Frame5603Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <Frame2 />
      <Frame3 onPlatformAnalyticsClick={onPlatformAnalyticsClick} onPlatformContentClick={onPlatformContentClick} onBrandExperienceClick={onBrandExperienceClick} onVideoClick={onVideoClick} />
    </div>
  );
}
