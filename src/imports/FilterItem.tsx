import svgPaths from "./svg-uvhkhk6ylk";

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.p2594b100} id="Vector" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function FilterItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative rounded-[4px] size-full" data-name="Filter item">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#8b94a2] text-[12px]">Name..</p>
      <Search />
    </div>
  );
}