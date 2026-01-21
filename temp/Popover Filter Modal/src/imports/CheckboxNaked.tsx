import svgPaths from "./svg-t8qe9cdbhg";

function Checkmark() {
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

function Checkbox() {
  return (
    <div className="bg-[#155fef] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <Checkmark />
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

export default function CheckboxNaked() {
  return (
    <div className="bg-[rgba(21,95,239,0.1)] content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative rounded-[4px] size-full" data-name="checkbox/naked">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">Female</p>
      <Checkbox1 />
    </div>
  );
}