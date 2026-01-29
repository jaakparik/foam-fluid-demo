import svgPaths from "./svg-cqbygy6yw1";

function ArrowDown() {
  return (
    <div className="relative size-[20px]" data-name="ArrowDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowDown">
          <path d={svgPaths.p381fd800} id="Vector 644" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M10.0001 4.83331V15.25" id="Vector 646" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function FilterItem() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">Name</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

function FilterItem1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">Age</p>
    </div>
  );
}

function FilterItem2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">Location</p>
    </div>
  );
}

function FilterItem3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">Total Audience</p>
    </div>
  );
}

function FilterItem4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">Instagram Audience</p>
    </div>
  );
}

function FilterItem5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">TikTok Audience</p>
    </div>
  );
}

function FilterItem6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-[128px]" data-name="Filter item">
      <p className="basis-0 font-['Hanken_Grotesk:Light',sans-serif] font-light grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[12px]">YouTube Audience</p>
    </div>
  );
}

export default function Filter() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shadow-[0px_10px_23px_-3px_rgba(0,0,0,0.07),0px_4px_12px_-2px_rgba(0,0,0,0.01)] size-full" data-name="Filter">
      <FilterItem />
      <FilterItem1 />
      <FilterItem2 />
      <FilterItem3 />
      <FilterItem4 />
      <FilterItem5 />
      <FilterItem6 />
    </div>
  );
}