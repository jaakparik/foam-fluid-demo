import svgPaths from "./svg-qgr2jjbhhd";

function Calendar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Calendar">
          <path d="M6.25 3.75V5" id="Vector 165" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M13.75 3.75V5" id="Vector 166" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p1f592400} id="Rectangle 519" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p3decd200} id="Rectangle 520" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[2px] items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[4px] size-full" data-name="card">
      <Calendar />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center text-nowrap">January</p>
    </div>
  );
}