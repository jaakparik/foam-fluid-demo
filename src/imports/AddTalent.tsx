function Plus() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Plus"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Plus">
          <path
            d="M10 4.375V15.625"
            id="Vector 631"
            stroke="var(--stroke-0, #F9FAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <path
            d="M15.625 10L4.375 10"
            id="Vector 632"
            stroke="var(--stroke-0, #F9FAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}

export default function AddTalent() {
  return (
    <div
      className="bg-[#1c2128] content-stretch flex gap-[4px] items-center  pl-[12px] pr-[16px]  justify-center py-[8px] relative rounded-[8px] size-full"
      data-name="add-talent"
    >
      <Plus />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f9fafa] text-[14px] text-nowrap">
        Add Talent
      </p>
    </div>
  );
}