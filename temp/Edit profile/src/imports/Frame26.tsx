import svgPaths from "./svg-2wdxfhhtoy";

function Logotype() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Logotype">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Logotype">
          <path d={svgPaths.p1dcf7e30} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#303d4f] relative rounded-[8px] size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <Logotype />
        </div>
      </div>
    </div>
  );
}