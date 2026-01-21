function Component5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 9">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Agency</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 5">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Creator</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#155fef] content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 7">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Audience</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 8">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Platforms</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(48,61,79,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Component5 />
      <Component1 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#155fef] content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 5">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Gender</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 7">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Age</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 8">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Locations</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 9">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Verticals</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(48,61,79,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Component2 />
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
        <p className="css-ew64yg leading-[20px]">Audience filters</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[165px]">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[20px]">Male</p>
      </div>
    </div>
  );
}

function CircleCheck() {
  return <div className="bg-[#155fef] rounded-[1000px] shrink-0 size-[8px]" data-name="circle check" />;
}

function Radiobutton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]" data-name="radiobutton">
      <div aria-hidden="true" className="absolute border border-[#155fef] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <CircleCheck />
    </div>
  );
}

function HitArea() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Radiobutton />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="radio button">
      <HitArea />
    </div>
  );
}

function CheckboxNaked() {
  return (
    <div className="bg-[rgba(21,95,239,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <Frame />
          <RadioButton />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[165px]">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[20px]">Female</p>
      </div>
    </div>
  );
}

function Radiobutton1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]" data-name="radiobutton">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function HitArea1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Radiobutton1 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="radio button">
      <HitArea1 />
    </div>
  );
}

function CheckboxNaked1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <Frame1 />
          <RadioButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <CheckboxNaked />
      <CheckboxNaked1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Founders_Grotesk:Medium',sans-serif] items-center justify-between leading-[0] not-italic p-[12px] relative text-[#54657d] text-[12px] w-full">
          <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
            <p className="css-ew64yg leading-[16px]">Define minimum audience gender %</p>
          </div>
          <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
            <p className="css-ew64yg leading-[16px]">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] items-center justify-between leading-[16px] not-italic pl-[3px] pr-0 py-0 relative text-[#54657d] text-[10px] w-full">
          <p className="css-ew64yg relative shrink-0">0%</p>
          <p className="css-ew64yg relative shrink-0">25%</p>
          <p className="css-ew64yg relative shrink-0">50%</p>
          <p className="css-ew64yg relative shrink-0">75%</p>
          <p className="css-ew64yg relative shrink-0">100%</p>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="0">
          <circle cx="8" cy="8" fill="var(--fill-0, #155FEF)" id="ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="25">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="50">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="100">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between mb-[-16px] min-h-px min-w-px pl-0 pr-[6px] py-0 relative w-full" data-name="dot">
      <Component />
      <Component9 />
      <Component10 />
      <Component11 />
    </div>
  );
}

function Line() {
  return (
    <div className="bg-[#155fef] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[9999px]" data-name=".line">
      <div className="size-full" />
    </div>
  );
}

function Line1() {
  return (
    <div className="flex-[1_0_0] mb-[-16px] min-h-px min-w-px relative w-full" data-name="line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative size-full">
          <Line />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-50 pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <Dot />
      <Line1 />
    </div>
  );
}

function RangePickerBase() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-32px] relative shrink-0 w-full" data-name="Range picker/base">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start mb-[-32px] relative shrink-0 w-full">
      {[...Array(4).keys()].map((_, i) => (
        <Frame7 key={i} />
      ))}
    </div>
  );
}

function RangePicker() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Range picker/0-25-75-100">
      <RangePickerBase />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-[12px] relative w-full">
        <RangePicker />
      </div>
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[8px] shadow-[0px_4px_16px_0px_rgba(28,33,40,0.25)] size-full">
      <Frame8 />
      <Frame11 />
      <Frame12 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}