import svgPaths from "./svg-4ljqsnxugt";
import imgImage46 from "../assets/b9f92f2e1868cf07e09c1c67e2d75d0c4f7bfcd1.png";

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <path d={svgPaths.p1678a280} id="Vector 631" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p1560fc00} id="Vector 632" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex gap-[4px] items-center px-[2px] py-0 relative rounded-[4px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="h-[16px] relative rounded-[2px] shrink-0 w-[15px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full" src={imgImage46} />
      </div>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-black text-nowrap">Jake Miller</p>
      <Close />
    </div>
  );
}