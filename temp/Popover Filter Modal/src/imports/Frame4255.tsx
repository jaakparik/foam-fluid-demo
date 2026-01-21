function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] items-center justify-between leading-[16px] not-italic pl-[3px] pr-0 py-0 relative text-[#54657d] text-[10px] w-full">
          <p className="css-ew64yg relative shrink-0">0</p>
          <p className="css-ew64yg relative shrink-0">20</p>
          <p className="css-ew64yg relative shrink-0">40</p>
          <p className="css-ew64yg relative shrink-0">60</p>
          <p className="css-ew64yg relative shrink-0">80</p>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[9999px]" data-name=".line">
      <div className="size-full" />
    </div>
  );
}

function Line1() {
  return (
    <div className="bg-[#155fef] flex-[1_0_0] h-[4px] min-h-px min-w-px relative" data-name=".line">
      <div className="size-full" />
    </div>
  );
}

function Line2() {
  return (
    <div className="h-[16px] mb-[-16px] relative shrink-0 w-full" data-name="line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative size-full">
          <Line />
          {[...Array(3).keys()].map((_, i) => (
            <Line1 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="25">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="0">
          <circle cx="8" cy="8" fill="var(--fill-0, #155FEF)" id="ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="50">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="75">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="100">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="0">
          <circle cx="8" cy="8" fill="var(--fill-0, #155FEF)" id="ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between mb-[-16px] min-h-px min-w-px pl-0 pr-[6px] py-0 relative w-full" data-name="dot">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Line3() {
  return (
    <div className="bg-[#155fef] flex-[1_0_0] h-[4px] min-h-px min-w-px opacity-50 relative rounded-[9999px]" data-name=".line">
      <div className="size-full" />
    </div>
  );
}

function Line4() {
  return (
    <div className="flex-[1_0_0] mb-[-16px] min-h-px min-w-px relative w-full" data-name="line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative size-full">
          <Line3 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start justify-center pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <Line2 />
      <Dot />
      <Line4 />
    </div>
  );
}

function RangePickerBase() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-32px] relative shrink-0 w-full" data-name="Range picker/base">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start mb-[-32px] relative shrink-0 w-full">
      {[...Array(4).keys()].map((_, i) => (
        <Frame3 key={i} />
      ))}
    </div>
  );
}

function RangePicker() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Range picker/0-25-75-100">
      <RangePickerBase />
      <Frame4 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[5px] pr-0 py-0 relative size-full">
      <RangePicker />
    </div>
  );
}