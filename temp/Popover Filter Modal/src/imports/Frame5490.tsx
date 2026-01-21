function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
            <p className="css-ew64yg leading-[20px]">Min age</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px]">
            <p className="css-4hzbpn leading-[20px]">12</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputMin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative" data-name="Input/min">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
            <p className="css-ew64yg leading-[20px]">Max age</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px]">
            <p className="css-4hzbpn leading-[20px]">80</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputMax() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative" data-name="Input/max">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <InputMin />
      <InputMax />
    </div>
  );
}

function Frame4() {
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

function Component1() {
  return (
    <div className="mr-[-6px] relative shrink-0 size-[16px]" data-name="25">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="25"></g>
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

function Frame5() {
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
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" />;
}

function Frame8() {
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
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[5px] pr-0 py-0 relative w-full">
        <RangePicker />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame2 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[12px] w-[165px]">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e]">
        <p className="css-ew64yg leading-[20px]">Over 18</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#54657d]">
        <p className="css-ew64yg leading-[20px]">Ages 18 and above</p>
      </div>
    </div>
  );
}

function Radiobutton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]" data-name="radiobutton">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[1000px]" />
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
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <Frame1 />
          <RadioButton />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[12px] w-[165px]">
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e]">
        <p className="css-ew64yg leading-[20px]">Over 21</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#54657d]">
        <p className="css-ew64yg leading-[20px]">Ages 21 and above</p>
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
          <Frame3 />
          <RadioButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <CheckboxNaked />
      <CheckboxNaked1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
        <Frame9 />
      </div>
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Frame10 />
    </div>
  );
}