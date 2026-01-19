import svgPaths from "./svg-xgiv963bzb";

function ItemsSelected() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[16px] py-0 relative shrink-0" data-name="Items Selected">
      <div aria-hidden="true" className="absolute border-[#303d4f] border-r border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f9fafa] text-[16px]">1</p>
      <p className="css-ew64yg font-['Founders_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f9fafa] text-[12px]">Selected</p>
    </div>
  );
}

function ButtonSelectAll() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button select all">
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f9fafa] text-[14px]">Select all</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3b196300} fill="var(--fill-0, #1C2128)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button secondary">
      <Icon />
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#15191e] text-[14px]">Share</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p389d96f0} fill="var(--fill-0, #F9FAFA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#155fef] content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button primary">
      <Icon1 />
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f9fafa] text-[14px]">Add to</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Actions">
      <ButtonSelectAll />
      <ButtonSecondary />
      <ButtonPrimary />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p13c62400} fill="var(--fill-0, #F9FAFA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex h-full items-center px-[8px] py-0 relative shrink-0" data-name="Close">
      <div aria-hidden="true" className="absolute border-[#303d4f] border-l border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

export default function ActionToastDefault() {
  return (
    <div className="bg-[#1c2128] relative rounded-[12px] size-full" data-name="action toast/ Default">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-row items-center self-stretch">
          <ItemsSelected />
        </div>
        <Actions />
        <div className="flex flex-row items-center self-stretch">
          <Close />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#303d4f] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(28,33,40,0.25)]" />
    </div>
  );
}