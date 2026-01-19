import svgPaths from "./svg-7wti4wk13a";

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

function Unchecked() {
  return (
    <div className="content-stretch flex items-center opacity-50 relative shrink-0 w-full" data-name="unchecked">
      <HitArea />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#155fef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function HitArea1() {
  return (
    <div className="bg-[rgba(21,95,239,0.05)] content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox1 />
    </div>
  );
}

function HoverWhileUnchecked() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="hover while unchecked">
      <HitArea1 />
    </div>
  );
}

function Checkmark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkmark">
          <path clipRule="evenodd" d={svgPaths.p3626f780} fill="var(--fill-0, #155FEF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#155fef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Checkmark />
    </div>
  );
}

function HitArea2() {
  return (
    <div className="bg-[rgba(21,95,239,0.1)] content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox2 />
    </div>
  );
}

function PressingWhileUnchecked() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="pressing while unchecked">
      <HitArea2 />
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name=".checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id=".checkmark">
          <path clipRule="evenodd" d={svgPaths.p3626f780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#155fef] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <Checkmark1 />
    </div>
  );
}

function HitArea3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox3 />
    </div>
  );
}

function Checked() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="checked">
      <HitArea3 />
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name=".checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id=".checkmark">
          <path clipRule="evenodd" d={svgPaths.p3626f780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-[#155fef] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <Checkmark2 />
    </div>
  );
}

function HitArea4() {
  return (
    <div className="bg-[rgba(21,95,239,0.05)] content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox4 />
    </div>
  );
}

function HoverWhileChecked() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="hover while checked">
      <HitArea4 />
    </div>
  );
}

function Checkbox5() {
  return <div className="bg-white content-stretch flex items-center justify-center rounded-[4px] shrink-0 size-[16px]" data-name="checkbox" />;
}

function HitArea5() {
  return (
    <div className="bg-[rgba(21,95,239,0.1)] content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0" data-name="hit area">
      <Checkbox5 />
    </div>
  );
}

function PressingWhileChecked() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="pressing while checked">
      <HitArea5 />
    </div>
  );
}

export default function CheckboxComponent() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="checkbox component">
      <Unchecked />
      <HoverWhileUnchecked />
      <PressingWhileUnchecked />
      <Checked />
      <HoverWhileChecked />
      <PressingWhileChecked />
    </div>
  );
}