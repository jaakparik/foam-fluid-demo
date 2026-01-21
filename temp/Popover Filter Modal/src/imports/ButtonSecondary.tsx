import svgPaths from "./svg-5l2lcbv1g3";

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Filter">
          <path d={svgPaths.p61cdd80} id="Vector 630" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function ButtonSecondary() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] size-full" data-name="button-secondary">
      <Filter />
    </div>
  );
}