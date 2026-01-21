import svgPaths from "./svg-r622i5xrvt";
import imgContentImg from "figma:asset/746d9f46fa6771c339846d2060ff1a1d96a068dc.png";

function ContentImg() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="_contentImg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgContentImg} />
    </div>
  );
}

function ImgWrapper() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start relative shrink-0 w-full" data-name="ImgWrapper">
      <ContentImg />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Eye">
          <path clipRule="evenodd" d={svgPaths.p38a8b380} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MetricItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
      <Eye />
      <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
        <p className="css-ew64yg leading-[20px]">227k</p>
      </div>
    </div>
  );
}

function Reach() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reach">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2003_16061)" id="Reach">
          <path clipRule="evenodd" d={svgPaths.p1aa30580} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2003_16061">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetricItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
      <Reach />
      <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
        <p className="css-ew64yg leading-[20px]">190k</p>
      </div>
    </div>
  );
}

function Click() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Click">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Click">
          <path clipRule="evenodd" d={svgPaths.p381dd800} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MetricItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
      <Click />
      <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
        <p className="css-ew64yg leading-[20px]">468k</p>
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
      <MetricItem />
      <MetricItem1 />
      <MetricItem2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Metrics />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Platforms() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Platforms">
          <g id="Vector">
            <path d={svgPaths.p208295b0} fill="url(#paint0_linear_2003_16067)" />
            <path d={svgPaths.p208295b0} fill="url(#paint1_linear_2003_16067)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2003_16067" x1="0.625" x2="5.82692" y1="1.25" y2="11.6154">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2003_16067" x1="1.85577" x2="8.99038" y1="18.2788" y2="0.307692">
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop offset="0.85431" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] text-right">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#8b94a2]">
        <p className="css-ew64yg leading-[20px]">Posted:</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#15191e]">
        <p className="css-ew64yg leading-[20px]">12/12/24</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3f07f870} fill="var(--fill-0, #1C2128)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Platforms />
      <Frame5 />
      <Button />
    </div>
  );
}

function InfoLabel() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="InfoLabel">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame />
        <Frame2 />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HitArea() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
      <HitArea />
    </div>
  );
}

function Hover() {
  return (
    <div className="absolute content-stretch flex items-center opacity-0 right-[12.38px] top-[12px]" data-name="_hover">
      <Checkbox1 />
    </div>
  );
}

function ContentCardMetrics() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[222.375px]" data-name="Content Card Metrics">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ImgWrapper />
        <InfoLabel />
        <Hover />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <ContentCardMetrics />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
    </div>
  );
}