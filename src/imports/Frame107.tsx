function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[16px] items-center justify-center px-[2px] py-0 relative rounded-[2px] shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b7bdc7] text-[14px] w-full">
        <p className="leading-[20px]">⌘</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center px-[2px] py-0 relative rounded-[2px] shrink-0 size-[16px]">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b7bdc7] text-[14px] w-full">
        <p className="leading-[20px]">K</p>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}