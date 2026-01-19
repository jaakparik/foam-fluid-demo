import svgPaths from "./svg-cv6j95wo49";

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

function ButtonSecondary() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0" data-name="button-secondary">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap">My Talent</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">32</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Instagram">
          <path d={svgPaths.p10fa8e00} fill="url(#paint0_linear_149_362)" id="Vector" />
          <path d={svgPaths.p3331c380} fill="url(#paint1_linear_149_362)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_149_362" x1="-1.05417" x2="4.84032" y1="0.64585" y2="9.15633">
            <stop offset="0.00121768" stopColor="#6521F5" />
            <stop offset="0.293733" stopColor="#1200DD" />
            <stop offset="0.709013" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_149_362" x1="1.83345" x2="7.23548" y1="14.2015" y2="0.595057">
            <stop stopColor="#FBEC48" />
            <stop offset="0.399" stopColor="#FC3746" />
            <stop offset="0.854" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function QuickButtons() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="quick buttons">
      <Instagram />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">Eng rate</p>
    </div>
  );
}

function QuickButtons1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="quick buttons">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">Millenials</p>
    </div>
  );
}

function QuickButtons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="quick buttons">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">Female</p>
    </div>
  );
}

function QuickButtons3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="quick buttons">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">Total Audience</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d="M8 3.5V12.5" id="Vector 631" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M12.5 8L3.5 8" id="Vector 632" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="button-secondary">
      <Plus />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full">
      <ButtonSecondary />
      <QuickButtons />
      <QuickButtons1 />
      <QuickButtons2 />
      <QuickButtons3 />
      <ButtonSecondary1 />
    </div>
  );
}