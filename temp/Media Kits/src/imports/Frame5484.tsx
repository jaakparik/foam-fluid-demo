import svgPaths from "./svg-z7l5xomulk";
import imgErikLucateroD2MsDujJl2GUnsplash from "figma:asset/fce305c14b36035214fd16288c5b1647dc319ef9.png";
import imgLinks from "figma:asset/070435955d742e09d27ee1b19cede32173c1de45.png";
import imgLinks1 from "figma:asset/7ccbb25df7eaa2786d99dbb4e944c0ad51c656d8.png";
import imgLogoPepsi from "figma:asset/e9b2214ed0ab6628f1221890c65d1ac07c690fb7.png";
import imgLogoStarbucks from "figma:asset/cf5b91ce879b24c0f02e2ebd2ba3c3cc5f69e027.png";
import imgLogoTarget from "figma:asset/9146d71e94ed2964902f7fc214f54250a60e5678.png";
import imgLogoPg from "figma:asset/c3c7339f83a7b047c0b69f67a5a7c9be16caef31.png";
import imgLogoLyft from "figma:asset/1844b73c3587c372319afa2eb3a63bf77b69f376.png";
import imgLogoFacebook from "figma:asset/837ff525a905e5087c3988f706fbbf9ef0775019.png";

function AvatarPhoto() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[128px]" data-name="_avatar-photo">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute aspect-[1024/1024] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="erik-lucatero-d2MSDujJl2g-unsplash">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgErikLucateroD2MsDujJl2GUnsplash} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Talent() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Talent">
      <AvatarPhoto />
    </div>
  );
}

function PlatformsBio() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Platforms + bio">
      <Talent />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <p className="relative shrink-0 text-[#54657d]">31 years old</p>
      <p className="relative shrink-0 text-[#c4c8cf]">•</p>
      <p className="relative shrink-0 text-[#54657d]">Male</p>
    </div>
  );
}

function LocationAge() {
  return (
    <div className="content-stretch flex flex-col font-['Founders_Grotesk:Regular',sans-serif] gap-[2px] items-start justify-end leading-[20px] not-italic relative shrink-0 text-[14px] w-full whitespace-pre" data-name=".LocationAge">
      <p className="relative shrink-0 text-[#54657d]">New York, NY, USA</p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[16px] py-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">Ali Abdaal</p>
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
        <p className="leading-[24px] whitespace-pre-wrap">Total followers</p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e] whitespace-nowrap">
        <p className="leading-[24px] whitespace-pre">7.3m</p>
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
            <path d={svgPaths.p208295b0} fill="url(#paint0_linear_190_1188)" />
            <path d={svgPaths.p208295b0} fill="url(#paint1_linear_190_1188)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_190_1188" x1="0.625" x2="5.82692" y1="1.25" y2="11.6154">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_190_1188" x1="1.85577" x2="8.99038" y1="18.2788" y2="0.307692">
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px] whitespace-pre-wrap">@sophiamartinez</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] whitespace-pre">1.1m</p>
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px] whitespace-pre-wrap">@sophiamartinez</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] whitespace-pre">368.6k</p>
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px] whitespace-pre-wrap">@sophiamartinez</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] whitespace-pre">5.9m</p>
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px] whitespace-pre-wrap">@sophiamartinez</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] whitespace-pre">87.4k</p>
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">sophiamartinezstyle</p>
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
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">sophiamartinez</p>
    </div>
  );
}

function Platforms4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name=".Platforms">
      <Ig />
      <Tt />
      <Yt />
      <Sn />
      <Sn1 />
      <Sn2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Platforms4 />
    </div>
  );
}

function NameLocationAge() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative shrink-0" data-name="Name + location + age">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none" />
      <TextLink />
      <Frame1 />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="flex flex-[1_0_0] flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative text-[#15191e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden">Creativity</p>
      </div>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="flex flex-[1_0_0] flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative text-[#15191e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden">Education</p>
      </div>
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="Pill">
      <div className="flex flex-[1_0_0] flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative text-[#15191e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden">Tech</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center max-w-[256px] relative shrink-0">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[272.5px]">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[14px] whitespace-pre">Brand Experience</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="logo_pepsi">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoPepsi} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_starbucks">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoStarbucks} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_target">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.06%] left-[-0.11%] max-w-none top-0 w-[100.22%]" src={imgLogoTarget} />
        </div>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_pg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoPg} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_lyft">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoLyft} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_facebook">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFacebook} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame3 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="relative shrink-0">Brendan Nahmias</p>
      <p className="relative shrink-0">,</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#54657d]">
      <Frame11 />
      <p className="relative shrink-0">Sarah Chen</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-center leading-[20px] relative shrink-0 text-[14px] w-[272.5px] whitespace-pre">
      <p className="relative shrink-0 text-[#8b94a2]">{`Managed by: `}</p>
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pl-[24px] pr-0 py-0 relative shrink-0">
      <p className="font-['Founders_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#15191e] text-[16px] w-[621px] whitespace-pre-wrap">Ali is a YouTuber, Podcaster, ex-Doctor, and New York Times best selling author. Ali now runs a multi-million pound content-creation business with 20 full-time employees, making videos on entrepreneurship and how to lead a happier, more fulfilled life.</p>
      <Frame2 />
      <Frame10 />
      <Frame8 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex items-start relative size-full">
      <Frame4 />
      <NameLocationAge />
      <Frame7 />
    </div>
  );
}