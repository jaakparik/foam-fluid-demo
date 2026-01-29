function List() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="List">
          <path d="M5.5 4H13" id="Vector 662" stroke="var(--stroke-0, #15191E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M5.5 8H13" id="Vector 664" stroke="var(--stroke-0, #15191E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M5.5 12H13" id="Vector 663" stroke="var(--stroke-0, #15191E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="2.75" cy="4" fill="var(--fill-0, #15191E)" id="Ellipse 70" r="0.75" />
          <circle cx="2.75" cy="8" fill="var(--fill-0, #15191E)" id="Ellipse 71" r="0.75" />
          <circle cx="2.75" cy="12" fill="var(--fill-0, #15191E)" id="Ellipse 72" r="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex items-center justify-center p-[4px] relative shrink-0 size-[30px]">
      <List />
    </div>
  );
}

function Grid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Grid">
      <div className="absolute inset-[12.5%_56.25%_56.25%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
      <div className="absolute inset-[56.25%_56.25%_12.5%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
      <div className="absolute inset-[12.5%_12.5%_56.25%_56.25%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_56.25%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0 size-[30px]">
      <Grid />
    </div>
  );
}

function Cards() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Cards">
      <div className="absolute inset-[12.5%_12.5%_56.25%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#b7bdc7] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0 size-[30px]">
      <Cards />
    </div>
  );
}

export default function Selector() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="selector">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <Frame2 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}