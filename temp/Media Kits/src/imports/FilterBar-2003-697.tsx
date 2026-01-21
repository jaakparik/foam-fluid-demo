import svgPaths from "./svg-u5zlbj0kp8";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[272.5px]">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#303d4f] text-[16px]">Media kit name</p>
    </div>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Options">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Options">
          <path d="M2.5 5H8.5M13.5 5H11.5" id="Vector 716" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1.2" />
          <path d="M2.5 12H4.5M13.5 12H7.5" id="Vector 717" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1.2" />
          <circle cx="10" cy="5" id="Ellipse 134" r="1.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1.2" />
          <circle cx="6" cy="12" id="Ellipse 135" r="1.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="button-secondary">
      <Options />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonSecondary />
    </div>
  );
}

function Sharing() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sharing">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sharing">
          <path d={svgPaths.p1ee3f300} id="Vector 644" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p27213380} id="Vector 646" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p1539e100} id="Rectangle 519" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="button-primary">
      <Sharing />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame1 />
      <ButtonPrimary />
    </div>
  );
}

export default function FilterBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="filter bar">
      <Frame2 />
      <Frame />
    </div>
  );
}