import svgPaths from "./svg-ifzoswi4e3";

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

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 5454">
          <rect fill="var(--fill-0, #54657D)" height="12" id="Rectangle 1142" rx="1.33333" width="12" x="2" y="2" />
          <rect fill="var(--fill-0, white)" height="6.66667" id="Rectangle 1147" width="1.33333" x="7.33333" y="4.66667" />
          <rect fill="var(--fill-0, white)" height="1.33333" id="Rectangle 1149" width="1.33333" x="10" y="10" />
          <rect fill="var(--fill-0, white)" height="3.33333" id="Rectangle 1148" width="1.33333" x="4.66667" y="8" />
          <circle cx="8" cy="4.66667" fill="var(--fill-0, white)" id="Ellipse 986" r="0.666667" />
          <circle cx="8" cy="11.3333" fill="var(--fill-0, white)" id="Ellipse 987" r="0.666667" />
          <circle cx="5.33333" cy="11.3333" fill="var(--fill-0, white)" id="Ellipse 988" r="0.666667" />
          <circle cx="5.33333" cy="8" fill="var(--fill-0, white)" id="Ellipse 989" r="0.666667" />
          <circle cx="10.6667" cy="10" fill="var(--fill-0, white)" id="Ellipse 990" r="0.666667" />
          <circle cx="10.6667" cy="11.3333" fill="var(--fill-0, white)" id="Ellipse 991" r="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Card({ onPlatformAnalyticsClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] h-[66px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onPlatformAnalyticsClick}
    >
      <Frame />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Platform analytics</p>
    </div>
  );
}

function SidebarIcons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_sidebar-icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="_sidebar-icons">
          <path d={svgPaths.p8eb9600} fill="var(--fill-0, #54657D)" id="Subtract" />
          <path d={svgPaths.p105781c0} fill="var(--fill-0, #54657D)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Card1({ onPlatformContentClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] h-[66px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onPlatformContentClick}
    >
      <SidebarIcons />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Platform content</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Text">
          <path d={svgPaths.pc9186c0} fill="var(--fill-0, #54657D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[66px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]" data-name="card">
      <Text />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Text</p>
    </div>
  );
}

function Reel() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Reel">
          <path clipRule="evenodd" d={svgPaths.p35555f80} fill="var(--fill-0, #54657D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Card3({ onVideoClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 size-[66px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onVideoClick}
    >
      <Reel />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Video</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Star">
          <path d={svgPaths.pf6a13c0} id="Vector" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card4({ onBrandExperienceClick }: Frame5603Props) {
  return (
    <div
      className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] h-[66px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      data-name="card"
      onClick={onBrandExperienceClick}
    >
      <Star />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Brand experience</p>
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

export default function Frame4({ onPlatformAnalyticsClick, onPlatformContentClick, onBrandExperienceClick, onVideoClick }: Frame5603Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <Frame2 />
      <Frame3 onPlatformAnalyticsClick={onPlatformAnalyticsClick} onPlatformContentClick={onPlatformContentClick} onBrandExperienceClick={onBrandExperienceClick} onVideoClick={onVideoClick} />
    </div>
  );
}