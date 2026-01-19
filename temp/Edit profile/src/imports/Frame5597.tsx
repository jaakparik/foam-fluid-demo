import svgPaths from "./svg-nvulfnq6oe";

function Reload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Reload">
          <path d={svgPaths.p25edad20} id="Vector 646" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p27931500} id="Ellipse 53" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p1d2e4780} id="Ellipse 54" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="button-secondary">
      <Reload />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#8b94a2] text-[12px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">Updated 2 hours ago</p>
      </div>
      <ButtonSecondary />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">Instagram Overview</p>
      </div>
      <Frame1 />
    </div>
  );
}