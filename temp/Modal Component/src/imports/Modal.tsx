import svgPaths from "./svg-emerj873jg";
import imgOspanAli6Xv4A1Va1RUUnsplash from "figma:asset/4367c742320230e075d497c8b985767332182797.png";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-[32px] min-w-px relative" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#15191e] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">Add to Media Kit</p>
      </div>
    </div>
  );
}

function HeaderInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="headerInfo">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p13c62400} fill="var(--fill-0, #1C2128)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="close">
      <Icon />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="actions">
      <Close />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="header">
      <HeaderInfo />
      <Actions />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1fd7f500} fill="var(--fill-0, #1C2128)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button secondary">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Agency media kits</p>
      <Icon1 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.p2594b100} id="Vector" stroke="var(--stroke-0, #B7BDC7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function FilterItem() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center px-[8px] py-0 relative rounded-[8px] shrink-0 w-[128px]" data-name="Filter item">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-4hzbpn flex-[1_0_0] font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] min-h-px min-w-px relative text-[#8b94a2] text-[12px]">Kit name</p>
      <Search />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p389d96f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button primary">
      <Icon2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <FilterItem />
      <ButtonPrimary />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <ButtonSecondary />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[4px] items-start leading-[20px] relative shrink-0 text-[12px] w-[132px]">
      <p className="css-4hzbpn relative shrink-0 text-[#54657d] w-full">{`Sammi Maria's Media Kit`}</p>
      <p className="css-4hzbpn relative shrink-0 text-[#8b94a2] w-full">Regina Carvalho</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[48px]" data-name="ospan-ali-6xv4A1VA1rU-unsplash">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgOspanAli6Xv4A1Va1RUUnsplash} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between p-[8px] relative w-full">
          <Frame4 />
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px]">16/01/2026</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[322px] items-start overflow-clip relative shrink-0 w-full">
      {[...Array(5).keys()].map((_, i) => (
        <Frame5 key={i} />
      ))}
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button secondary">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Cancel</p>
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button primary">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Next</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative z-[1]">
      <ButtonSecondary1 />
      <ButtonPrimary1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center justify-end relative shrink-0 w-full" data-name="footer">
      <Frame2 />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[8px] shadow-[0px_2px_16px_0px_rgba(28,33,40,0.25),0px_32px_64px_0px_rgba(28,33,40,0.25)] size-full" data-name="_Modal">
      <Header />
      <Frame />
      <Frame6 />
      <Footer />
    </div>
  );
}