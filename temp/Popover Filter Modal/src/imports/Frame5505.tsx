import svgPaths from "./svg-3a9p3vy745";

function Component() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 14">
          <path d={svgPaths.p3331c380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckmarkStroke() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="checkmark-stroke">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="checkmark-stroke">
          <path d={svgPaths.pdced600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center left-[52px] p-[2px] rounded-[6px] size-[16px] top-[2px]">
      <CheckmarkStroke />
    </div>
  );
}

function Platform() {
  return (
    <div className="bg-[#155fef] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="platform-2">
      <Component />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Instagram</p>
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 14">
          <path d={svgPaths.p3331c380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleXStroke() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-x-stroke">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="circle-x-stroke">
          <path d={svgPaths.p250aae00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1eb76080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center left-[52px] p-[2px] rounded-[6px] size-[16px] top-[2px]">
      <CircleXStroke />
    </div>
  );
}

function Platform1() {
  return (
    <div className="bg-[#155fef] content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="platform-2">
      <Component1 />
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Instagram</p>
      <Frame2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative size-full">
      <Platform />
      <Platform1 />
    </div>
  );
}