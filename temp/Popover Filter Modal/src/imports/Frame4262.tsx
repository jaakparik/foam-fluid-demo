function Title() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center min-h-[32px] px-0 py-[8px] relative shrink-0 w-full" data-name="Title">
      <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54657d] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Location</p>
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
            <p className="css-4hzbpn leading-[20px]">City, country or state</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title />
      <TextInput />
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
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Chicago, IL, USA</p>
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
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Houston, TX, USA</p>
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
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Los Angeles, CA, USA</p>
          <Checkbox5 />
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function HitArea3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox6 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
      <HitArea3 />
    </div>
  );
}

function CheckboxNaked3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="checkbox/naked">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">New York, NY, USA</p>
          <Checkbox7 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <CheckboxNaked />
      <CheckboxNaked1 />
      <CheckboxNaked2 />
      <CheckboxNaked3 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
      <Frame />
      <Frame2 />
    </div>
  );
}