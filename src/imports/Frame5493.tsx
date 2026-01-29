import svgPaths from "./svg-osupm839cg";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0">Search health</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0">BAD</p>
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0">Talent</p>
    </div>
  );
}

function SearchDot() {
  return (
    <div className="relative shrink-0 size-[3px]" data-name="search/dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="search/dot">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #3A495F)" fillOpacity="0.2" id="Ellipse 127" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Sad() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sad">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sad">
          <circle cx="10" cy="10" id="Ellipse 107" r="6.875" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p3902f100} id="Ellipse 108" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="7.8125" cy="8.4375" fill="var(--fill-0, #54657D)" id="Ellipse 109" r="0.9375" />
          <circle cx="12.1875" cy="8.4375" fill="var(--fill-0, #54657D)" id="Ellipse 110" r="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function SearchSearching() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="search/searching">
      <Frame />
      <SearchDot />
      <Sad />
    </div>
  );
}

function SearchDot1() {
  return (
    <div className="relative shrink-0 size-[3px]" data-name="search/dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="search/dot">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #3A495F)" fillOpacity="0.2" id="Ellipse 127" r="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">Total datapoints</p>
      <SearchDot1 />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">1 246</p>
    </div>
  );
}

function SearchActivity() {
  return (
    <div className="relative shrink-0 w-full" data-name="search/activity">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <SearchSearching />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0">Talent platforms connected:</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0">0</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Link">
          <path d={svgPaths.p347cde20} id="Rectangle 521" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p38d1e400} id="Vector 627" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(58,73,95,0.1)] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <Link />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[14px] text-nowrap">Copy invitation link</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-[12px] relative w-full">
          <Frame4 />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[rgba(255,0,0,0.05)] content-stretch flex flex-col items-start relative size-full">
      <SearchActivity />
      <Frame3 />
    </div>
  );
}