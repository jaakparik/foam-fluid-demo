import svgPaths from "./svg-q7ixiy5xgy";

function Placeholder() {
  return (
    <div className="basis-0 content-stretch flex gap-px grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Placeholder">
      <div className="basis-0 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#b7bdc7] text-[14px]">
        <p className="leading-[20px]">Search talent profiles, content captions and lists</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search"></g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path clipRule="evenodd" d={svgPaths.p7a69800} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="Icon">
      <Search1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#54657d] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] py-0 relative size-full">
          <Placeholder />
          <Search />
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default function SearchDark() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative size-full" data-name="search/dark">
      <TextInput />
    </div>
  );
}