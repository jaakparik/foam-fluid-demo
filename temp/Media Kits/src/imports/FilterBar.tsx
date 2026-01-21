import svgPaths from "./svg-586f7opxs2";

function ChevronDown() {
  return (
    <div className="relative size-[20px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronDown">
          <path d={svgPaths.p10cfbff0} id="Vector 644" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function BAg() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0" data-name="b_ag">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">My Talent</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function BT() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="b_t">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">Filters</p>
    </div>
  );
}

function BA() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[4px] items-center justify-center leading-[20px] px-[16px] py-[8px] relative rounded-[8px] shrink-0 text-[14px] text-nowrap" data-name="b_a">
      <p className="relative shrink-0 text-[#54657d]">Sort by</p>
      <p className="relative shrink-0 text-[#15191e]">Name A to Z</p>
    </div>
  );
}

export default function FilterBar() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative size-full" data-name="filter-bar">
      <BAg />
      <BT />
      <BA />
    </div>
  );
}