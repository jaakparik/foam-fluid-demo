function Question() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Question">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4%]" style={{ "--stroke-0": "rgba(139, 148, 162, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2 16.2">
            <circle cx="8.1" cy="8.1" id="Ellipse 49" r="7.5" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Arial_Rounded_MT_Bold:Regular',sans-serif] inset-[0_32.03%_0_34.64%] justify-center leading-[0] not-italic text-[#8b94a2] text-[9px]">
        <p className="leading-[24px] whitespace-pre-wrap">?</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">Data Health</p>
      </div>
      <Question />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">78%</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[8px] left-0 rounded-[10px] top-0 w-[197px]" />
      <div className="absolute bg-[#155fef] h-[8px] left-0 rounded-[10px] top-0 w-[154px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Connected platforms</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">4/4</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Data points</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">12,232</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Posts indexed</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">1,232</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full whitespace-pre">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame1 />
        <Frame2 />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">Profile completion</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Basic info</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">Complete</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Platform connections</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">Complete</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Brand experience</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">6 brands</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">Foam Connect App</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#cb0000]">Not installed</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full whitespace-pre">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(58,73,95,0.05)] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Frame14 />
        <Frame11 />
      </div>
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Frame3 />
      <Frame15 />
    </div>
  );
}