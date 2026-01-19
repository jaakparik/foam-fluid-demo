import svgPaths from "./svg-g5oy05smpt";

function Magic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Magic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Magic">
          <path d={svgPaths.p3a24e900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p228bdf00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p94a3500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#155fef] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-0 relative rounded-[8px] size-full" data-name="Button">
      <Magic />
      <p className="font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Ask Assist</p>
    </div>
  );
}