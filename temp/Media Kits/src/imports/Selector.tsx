function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List">
          <path d="M6.875 5H16.25" id="Vector 662" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6.875 10H16.25" id="Vector 664" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6.875 15H16.25" id="Vector 663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <circle cx="3.4375" cy="5" fill="currentColor" id="Ellipse 70" r="0.9375" />
          <circle cx="3.4375" cy="10" fill="currentColor" id="Ellipse 71" r="0.9375" />
          <circle cx="3.4375" cy="15" fill="currentColor" id="Ellipse 72" r="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(84,101,125,0.3)] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" style={{ color: "var(--nav-item-icon-active)" }}>
      <List />
    </div>
  );
}

function Grid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Grid">
      <div className="absolute inset-[12.5%_56.25%_56.25%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#8b94a2] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[56.25%_56.25%_12.5%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#8b94a2] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[12.5%_12.5%_56.25%_56.25%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#8b94a2] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_56.25%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border border-[#8b94a2] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Grid />
    </div>
  );
}

function Cards() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Cards">
      <div className="absolute inset-[12.5%_12.5%_56.25%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#8b94a2] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_12.5%] rounded-[1px]">
        <div aria-hidden="true" className="absolute border-[#8b94a2] border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <Cards />
    </div>
  );
}

export default function Selector() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] size-full" data-name="selector">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}