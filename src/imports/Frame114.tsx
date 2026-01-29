import svgPaths from "./svg-6bs5c18nnp";

function RecentChats() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Recent-chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Recent-chats">
          <path d="M10 6.5625V10.3125H12.1875" id="Vector 637" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p10913700} id="Vector 646" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.pb202400} id="Ellipse 117" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <RecentChats />
    </div>
  );
}

function NewChat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="New-chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="New-chat">
          <path d={svgPaths.p1951afb0} id="Rectangle 563" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p13e7d000} id="Vector 633" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M13.125 6.25L14.375 7.5" id="Vector 634" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <NewChat />
    </div>
  );
}

function Fullscreen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Fullscreen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Fullscreen">
          <path d={svgPaths.p169ddb80} id="Rectangle 580" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <Fullscreen />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path d={svgPaths.p2475df80} id="Vector 631" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p22a90d60} id="Vector 632" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <Close />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame12 />
      <Button3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="leading-[40px] relative shrink-0 text-[#15191e] text-[32px] text-nowrap">Hi John!</p>
      <p className="leading-[20px] min-w-full relative shrink-0 text-[#8b94a2] text-[12px] text-center w-[min-content]">{`Ask me anything about your talent roster, data insights, or how to use Foam's features.`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#303d4f] text-[14px] text-center w-[min-content]">
        <p className="leading-[20px]">Highest ranking talent this week</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Content />
    </div>
  );
}

function ChatButtonBw() {
  return (
    <div className="max-w-[480px] relative rounded-[8px] shrink-0 w-full" data-name="chat button/bw">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[12px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#303d4f] text-[14px] text-center w-[min-content]">
        <p className="leading-[20px]">Which profiles need data updates?</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Content1 />
    </div>
  );
}

function ChatButtonBw1() {
  return (
    <div className="max-w-[480px] relative rounded-[8px] shrink-0 w-full" data-name="chat button/bw">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[12px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#303d4f] text-[14px] text-center w-[min-content]">
        <p className="leading-[20px]">How do I create a media kit?</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Content2 />
    </div>
  );
}

function ChatButtonBw2() {
  return (
    <div className="max-w-[480px] relative rounded-[8px] shrink-0 w-full" data-name="chat button/bw">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[12px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
        <Frame5 />
        <ChatButtonBw />
        <ChatButtonBw1 />
        <ChatButtonBw2 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0 w-full">
      <Frame11 />
      <Frame9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="font-['Founders_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b94a2] text-[14px] text-nowrap">@mention a creator</p>
        </div>
      </div>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow-Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow-Up">
          <path d={svgPaths.p39b09680} id="Vector 644" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M8.00012 4.66666V13" id="Vector 646" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#155fef] content-stretch flex items-center justify-center opacity-50 p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <ArrowUp />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame2 />
      <Button4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a24e900} id="Vector" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p32e5cf00} id="Vector_2" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p94a3500} id="Vector_3" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[14px] text-nowrap">Skills</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <circle cx="10" cy="5.625" id="Ellipse 98" r="2.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.pbea3980} id="Rectangle 520" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon1 />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[14px] text-nowrap">Talent</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="buttons">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
        <Frame3 />
        <Buttons />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame8 />
      <Input />
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#8b94a2] text-[12px] w-[min-content]">Foam AI can make mistakes. Check important info.</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-tl-[12px] size-full">
      <Frame1 />
    </div>
  );
}