function Component() {
  return (
    <div className="bg-[#155fef] content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 5">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Gender</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 7">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Age</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 8">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Locations</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Component 9">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Verticals</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(48,61,79,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-[12px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
        <p className="css-ew64yg leading-[20px]">Creator filters</p>
      </div>
      <Frame />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function HitArea() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
      <HitArea />
    </div>
  );
}

function CheckboxNaked() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Female</p>
          <Checkbox1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function HitArea1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox2 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
      <HitArea1 />
    </div>
  );
}

function CheckboxNaked1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Male</p>
          <Checkbox3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function HitArea2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox4 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
      <HitArea2 />
    </div>
  );
}

function CheckboxNaked2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Other</p>
          <Checkbox5 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <CheckboxNaked />
      <CheckboxNaked1 />
      <CheckboxNaked2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}