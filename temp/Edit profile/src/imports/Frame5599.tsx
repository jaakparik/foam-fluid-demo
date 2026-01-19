import svgPaths from "./svg-2h678txc7b";

function Checkmark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Checkmark">
          <path d={svgPaths.pdced600} id="Vector 646" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(52,192,162,0.2)] content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-[8px] py-[2px] relative rounded-[100px] size-full">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">Connected</p>
      </div>
      <Checkmark />
    </div>
  );
}