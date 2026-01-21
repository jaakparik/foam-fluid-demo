import svgPaths from "./svg-s874fbaxdy";
import imgErikLucateroD2MsDujJl2GUnsplash from "figma:asset/fce305c14b36035214fd16288c5b1647dc319ef9.png";
import imgLinks from "figma:asset/070435955d742e09d27ee1b19cede32173c1de45.png";
import imgLinks1 from "figma:asset/7ccbb25df7eaa2786d99dbb4e944c0ad51c656d8.png";

function AvatarPhoto() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[160px]" data-name="_avatar-photo">
      <div className="absolute aspect-[1024/1024] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="erik-lucatero-d2MSDujJl2g-unsplash">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgErikLucateroD2MsDujJl2GUnsplash} />
      </div>
    </div>
  );
}

function PlatformsBio() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Platforms + bio">
      <AvatarPhoto />
    </div>
  );
}

function LocationAge() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light gap-[2px] items-start justify-end leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-full" data-name=".LocationAge">
      <p className="css-ew64yg relative shrink-0">New York, NY, USA</p>
      <p className="css-ew64yg relative shrink-0">31 years old</p>
      <p className="css-ew64yg relative shrink-0">Male</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[16px] py-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Ali Abdaal</p>
      </div>
      <PlatformsBio />
      <LocationAge />
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 text-[16px]" data-name="Text link">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#8b94a2] w-[150px]">
        <p className="css-4hzbpn leading-[24px]">Total followers</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e]">
        <p className="css-ew64yg leading-[24px]">7.3m</p>
      </div>
    </div>
  );
}

function Platforms() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Platforms">
          <g id="Vector">
            <path d={svgPaths.p208295b0} fill="url(#paint0_linear_2003_1414)" />
            <path d={svgPaths.p208295b0} fill="url(#paint1_linear_2003_1414)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2003_1414" x1="0.625" x2="5.82692" y1="1.25" y2="11.6154">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2003_1414" x1="1.85577" x2="8.99038" y1="18.2788" y2="0.307692">
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop offset="0.85431" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Ig() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="IG">
      <Platforms />
      <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px]">@sophiamartinez</p>
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px]">1.1m</p>
    </div>
  );
}

function Platforms1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Platforms">
          <path clipRule="evenodd" d={svgPaths.p2dd0f600} fill="var(--fill-0, #00F7EF)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1877ad00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1a7e8900} fill="var(--fill-0, #FF004F)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Tt() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="TT">
      <Platforms1 />
      <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px]">@sophiamartinez</p>
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px]">368.6k</p>
    </div>
  );
}

function Platforms2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <div className="absolute inset-[0_-0.1%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0198 20">
          <g id="Platforms">
            <path d={svgPaths.p313bff00} fill="var(--fill-0, #FF0302)" id="Vector" />
            <path d={svgPaths.p388c7a00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Yt() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="YT">
      <Platforms2 />
      <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px]">@sophiamartinez</p>
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px]">5.9m</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Frame 521">
          <rect fill="var(--fill-0, #FFFC00)" height="17.5" rx="4" width="17.5" />
          <path d={svgPaths.pf351800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2fdba100} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Platforms3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Platforms">
      <Frame />
    </div>
  );
}

function Sn() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="SN">
      <Platforms3 />
      <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px]">@sophiamartinez</p>
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px]">87.4k</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Ig />
      <Tt />
      <Yt />
      <Sn />
    </div>
  );
}

function Links() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[20px]" data-name="Links">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLinks} />
    </div>
  );
}

function Sn1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[150px]" data-name="SN">
      <Links />
      <p className="css-ew64yg font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">sophiamartinezstyle</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="overflow-clip relative rounded-[4px] shrink-0 size-[20px]" data-name="Links">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLinks1} />
    </div>
  );
}

function Sn2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="SN">
      <Links1 />
      <p className="css-ew64yg font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">sophiamartinez</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Sn1 />
      <Sn2 />
    </div>
  );
}

function Platforms4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0" data-name=".Platforms">
      <Frame10 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <TextLink />
      <Platforms4 />
    </div>
  );
}

function NameLocationAge() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative self-stretch shrink-0" data-name="Name + location + age">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#15191e] text-[12px] text-center text-ellipsis">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">Creativity</p>
      </div>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#15191e] text-[12px] text-center text-ellipsis">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">Education</p>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#15191e] text-[12px] text-center text-ellipsis">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">Tech</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center max-w-[256px] relative shrink-0">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg relative shrink-0">Brendan Nahmias</p>
      <p className="css-ew64yg relative shrink-0">,</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[4px] items-center relative shrink-0 text-[#54657d]">
      <Frame6 />
      <p className="css-ew64yg relative shrink-0">Sarah Chen</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[20px] relative shrink-0 text-[12px] w-[272.5px]">
      <p className="css-ew64yg font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#8b94a2]">{`Managed by: `}</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-0 relative w-full">
          <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[12px] w-[min-content]">Ali is a YouTuber, Podcaster, ex-Doctor, and New York Times best selling author. Ali now runs a multi-million pound content-creation business with 20 full-time employees, making videos on entrepreneurship and how to lead a happier, more fulfilled life.</p>
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start pb-0 pl-[16px] pr-0 pt-[8px] relative w-full">
        <Frame3 />
        <NameLocationAge />
        <Frame5 />
      </div>
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame4 />
    </div>
  );
}