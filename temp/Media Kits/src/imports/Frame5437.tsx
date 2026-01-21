import svgPaths from "./svg-0y1ii8zupy";

function Ask() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ask">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ask">
          <path d={svgPaths.p14a3b460} id="Ellipse 123" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p34a8ea80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.pff27e00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <circle cx="6.99365" cy="10.141" fill="var(--fill-0, white)" id="Ellipse 124" r="1" />
          <circle cx="10.157" cy="10.141" fill="var(--fill-0, white)" id="Ellipse 125" r="1" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155fef] content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <Ask />
    </div>
  );
}

function RecentChats() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Recent-chats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Recent-chats">
          <path d="M10 6.5625V10.3125H12.1875" id="Vector 637" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p10913700} id="Vector 646" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.pb202400} id="Ellipse 117" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
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
          <path d={svgPaths.p1951afb0} id="Rectangle 563" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p13e7d000} id="Vector 633" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M13.125 6.25L14.375 7.5" id="Vector 634" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
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
          <path d={svgPaths.p169ddb80} id="Rectangle 580" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <Fullscreen />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path d={svgPaths.p2475df80} id="Vector 631" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p22a90d60} id="Vector 632" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <Close />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between px-0 py-[12px] relative size-full">
      <Button />
      <Frame />
    </div>
  );
}