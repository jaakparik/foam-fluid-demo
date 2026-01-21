function Component3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Component 9">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Agency</p>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#155fef] content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[4px] h-[24px] items-center justify-center leading-[20px] p-[8px] relative rounded-[4px] shrink-0 text-[12px] text-white" data-name="Component 5">
      <p className="css-ew64yg relative shrink-0">Creator</p>
      <p className="css-ew64yg opacity-50 relative shrink-0">1</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Component 7">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Audience</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Component 8">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Platforms</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(48,61,79,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Component3 />
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative size-full">
      <Frame1 />
    </div>
  );
}