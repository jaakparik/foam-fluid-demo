import svgPaths from "./svg-10nifgixuc";
import { imgVector } from "./svg-44w3e";

function Platforms() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Platforms">
          <g id="Vector">
            <path d={svgPaths.p208295b0} fill="url(#paint0_linear_2003_14422)" />
            <path d={svgPaths.p208295b0} fill="url(#paint1_linear_2003_14422)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2003_14422" x1="0.625" x2="5.82692" y1="1.25" y2="11.6154">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2003_14422" x1="1.85577" x2="8.99038" y1="18.2788" y2="0.307692">
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

function Frame68() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0 w-full">
      <Platforms />
      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Instagram Overview</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-[calc(50%+0.03px)] not-italic text-center top-[calc(50%+18.11px)] translate-x-[-50%] translate-y-[-50%] w-[72.051px]" data-name="Frame">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px] w-full">
        <p className="css-4hzbpn leading-none">70%</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[12.99px] leading-[normal] relative shrink-0 text-[#303d4f] text-[10px] w-full">Female</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_23.35%_0.08%_0]" data-name="Group">
      <div className="absolute flex inset-[0_23.35%_0.08%_0] items-center justify-center">
        <div className="flex-none h-[68.945px] rotate-[180deg] scale-y-[-100%] w-[105.772px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.772 68.9453">
                <path d={svgPaths.p37652a40} fill="var(--fill-0, #155FEF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_23.35%_0.08%_0]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_23.35%_0.08%_0]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[19.31%_0.24%_6.33%_72.6%]" data-name="Group">
      <div className="absolute flex inset-[19.31%_0.24%_6.33%_72.6%] items-center justify-center">
        <div className="flex-none h-[51.31px] rotate-[180deg] scale-y-[-100%] w-[37.483px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(128, 169, 249, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4827 51.3104">
                <path d={svgPaths.p382d7400} fill="var(--fill-0, #80A9F9)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[19.31%_0.24%_6.33%_72.6%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[19.31%_0.24%_6.33%_72.6%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[0_0.24%_0.08%_0]" data-name="Group">
      <Group2 />
      <Group5 />
      <div className="absolute bg-[#cdf] inset-[93.48%_0.72%_0.72%_89.13%] rounded-[3px]" data-name="Rectangle" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="aspect-[156/78] flex-[1_0_0] max-h-[69px] max-w-[138px] min-h-px min-w-px relative" data-name="Frame">
      <Frame />
      <Group6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#80a9f9] rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">30% Male</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#cdf] rounded-[2px] shrink-0 size-[8px]" data-name="Rectangle" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">{` 10% Others`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-start flex flex-wrap gap-[2px_4px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Frame">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Gender() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[240px] items-center max-w-[180px] min-w-[180px] p-[16px] relative rounded-[12px] shrink-0 w-[180px]" data-name="_gender">
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="css-4hzbpn font-['Founders_Grotesk:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#15191e] text-[16px] w-full">{`Gender  distribution`}</p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">13-17</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">18-24</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">25-34</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">35-44</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">45-64</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Frame">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#15191e] text-[12px] text-right">65+</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Frame">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-end relative shrink-0" data-name="Frame">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[20px] py-0 relative size-full">
          <div className="bg-[#155fef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Rectangle" />
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">80%</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[90px] py-0 relative size-full">
          <div className="bg-[#155fef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Rectangle" />
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">50%</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[120px] py-0 relative size-full">
          <div className="bg-[#155fef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Rectangle" />
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">30%</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[180px] py-0 relative size-full">
          <div className="bg-[#155fef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Rectangle" />
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">10%</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[209px] py-0 relative size-full">
          <div className="bg-[#155fef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Rectangle" />
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">1%</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative size-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#303d4f] text-[12px]">0%</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Frame">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Frame">
      <Frame14 />
      <Frame21 />
    </div>
  );
}

function Age() {
  return (
    <div className="bg-white flex-[1_0_0] h-[240px] min-h-px min-w-[220px] relative rounded-[12px]" data-name="_age">
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[16px] relative size-full">
        <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#15191e] text-[16px]">Age distribution</p>
        <Frame22 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#15191e] text-[16px]">{`Country distribution `}</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-1/2 left-[35.36%] right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.6411 50">
        <g id="Group">
          <path d={svgPaths.p29fd0a00} fill="var(--fill-0, #155FEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[45.76%] left-0 right-1/2 top-[2.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 52.0486">
        <g id="Group">
          <path d={svgPaths.pd883700} fill="var(--fill-0, #80A9F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[1.16%] left-[0.18%] right-1/2 top-1/2" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.8198 48.8417">
        <g id="Group">
          <path d={svgPaths.p397e3c00} fill="var(--fill-0, #CCDDFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-0 left-[39.3%] right-[9.06%] top-1/2" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.6439 50">
        <g id="Group">
          <path d={svgPaths.p1513b080} fill="var(--fill-0, #E6EEFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-[21.3%] left-1/2 right-0 top-1/2" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 28.6981">
        <g id="Group">
          <path d={svgPaths.p3167d200} fill="var(--fill-0, #155FEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute left-[calc(50%-0.13px)] size-[100px] top-[calc(50%+0.32px)] translate-x-[-50%] translate-y-[-50%]">
      <Group12 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 size-[101px]">
      <Frame57 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#155fef] rounded-[2px] shrink-0 size-[8px]" data-name="Background" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">60% United States</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#80a9f9] rounded-[2px] shrink-0 size-[8px]" data-name="Background" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">20% Canada</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#cdf] rounded-[2px] shrink-0 size-[8px]" data-name="Background" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">20% Mexico</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#e5eeff] rounded-[2px] shrink-0 size-[8px]" data-name="Background" />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
        <p className="css-ew64yg leading-[16px]">{` 10% Others`}</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-center flex flex-wrap gap-[2px_4px] items-center justify-center relative shrink-0 w-full">
      <Frame41 />
      <Frame43 />
      <Frame44 />
      <Frame42 />
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-h-px min-w-px relative w-full" data-name="SVG">
      <Frame58 />
      <Frame45 />
    </div>
  );
}

function Country() {
  return (
    <div className="bg-white flex-[1_0_0] h-[240px] min-h-px min-w-[180px] relative rounded-[12px]" data-name="_country">
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[16px] relative size-full">
        <Frame40 />
        <Svg />
      </div>
    </div>
  );
}

function Platforms1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Platforms">
          <g id="Vector">
            <path d={svgPaths.p271be100} fill="url(#paint0_linear_2003_13995)" />
            <path d={svgPaths.p271be100} fill="url(#paint1_linear_2003_13995)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2003_13995" x1="0.5" x2="4.66154" y1="1" y2="9.29231">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2003_13995" x1="1.48462" x2="7.19231" y1="14.6231" y2="0.246154">
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

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Platforms1 />
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px]">
        <p className="css-ew64yg leading-[20px]">2.5k followers</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#34c0a2] text-[16px]">+19%</p>
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#15191e] text-[10px]">
        <p className="css-ew64yg leading-[20px]">growth (+400) from Jan to Oct</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <p className="css-ew64yg font-['Founders_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#dee2e8] text-[14px]">•</p>
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Frame">
      <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#15191e] text-[16px]">{` Follower growth rate`}</p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">100%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">80%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">60%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">40%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">20%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#15191e] text-[8px] text-center w-[32.62px]">0%</p>
      <div className="h-0 relative shrink-0 w-[1304px]" data-name="Line">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(222, 226, 232, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1304 1">
            <path d="M0 0.5H1304" id="Line" stroke="var(--stroke-0, #DEE2E8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex flex-col h-[128px] items-start justify-between left-0 overflow-clip pb-[23px] pt-0 px-0 w-[1381px]" data-name="Frame">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Group">
      <p className="col-1 css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[18.923px] leading-[normal] ml-[16.31px] mt-0 not-italic relative row-1 text-[#15191e] text-[12px] text-center translate-x-[-50%] w-[32.62px]">Jan</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Group">
      <p className="col-1 css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[18.923px] leading-[normal] ml-[17.09px] mt-0 not-italic relative row-1 text-[#15191e] text-[12px] text-center translate-x-[-50%] w-[34.173px]">Apr</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Group">
      <p className="col-1 css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[18.923px] leading-[normal] ml-[15.53px] mt-0 not-italic relative row-1 text-[#15191e] text-[12px] text-center translate-x-[-50%] w-[31.066px]">Jul</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Group">
      <p className="col-1 css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[18.923px] leading-[normal] ml-[18.64px] mt-0 not-italic relative row-1 text-[#15191e] text-[12px] text-center translate-x-[-50%] w-[37.28px]">Oct</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Group">
      <p className="col-1 css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[18.923px] leading-[normal] ml-[16.31px] mt-0 not-italic relative row-1 text-[#15191e] text-[12px] text-center translate-x-[-50%] w-[32.62px]">Dec</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full" data-name="Frame">
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6px] pr-0 py-0 relative shrink-0" data-name="Frame">
      <div className="css-g0mm18 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[10px]">
        <p className="css-ew64yg leading-[10px]">Showing monthly change in follower growth rate (%)</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute bottom-[3.08px] content-stretch flex flex-col h-[32.923px] items-center justify-between left-[33px] right-0" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute bottom-[38.7px] contents left-[33px] right-0" data-name="Group">
      <div className="absolute bottom-[38.7px] h-[32.588px] left-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_-65.051px] mask-size-[100%_98.351px] opacity-50 right-0" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862 32.5884">
            <path d={svgPaths.p1bae9200} fill="var(--fill-0, #155FEF)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[51.72px] h-[19.57px] left-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_-65.051px] mask-size-[100%_98.351px] opacity-50 right-0" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862 19.5697">
            <path d={svgPaths.p31de3a00} fill="var(--fill-0, #155FEF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[38.7px] contents left-[33px] right-0" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[38.7px] contents left-[33px] right-0" data-name="Group">
      <div className="absolute bottom-[38.7px] h-[32.588px] left-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_-65.051px] mask-size-[100%_98.351px] right-0" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862 32.5884">
            <path d={svgPaths.p26cef100} id="Vector" stroke="var(--stroke-0, #155FEF)" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[51.72px] h-[19.57px] left-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_-65.051px] mask-size-[100%_98.351px] right-0" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-2.55%_0_-2.52%_-0.01%]" style={{ "--stroke-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 862.107 20.5621">
            <path d={svgPaths.p3820db80} id="Vector" stroke="var(--stroke-0, #155FEF)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-[38.7px] contents left-[33px] right-0" data-name="Group">
      <Group20 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[37.99px] contents left-[33px] right-0" data-name="Mask Group">
      <Group19 />
      <Group21 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[37.99px] contents left-[33px] right-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute bottom-[37.99px] contents left-[33px] right-0" data-name="Group">
      <Group22 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <Frame37 />
      <Group23 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px overflow-clip relative w-full" data-name="Frame">
      <Frame34 />
      <Frame38 />
    </div>
  );
}

function Growth() {
  return (
    <div className="bg-white flex-[1_0_0] h-[240px] min-h-px min-w-[380px] relative rounded-[12px]" data-name="_growth">
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[16px] relative size-full">
        <Frame27 />
        <Frame39 />
      </div>
    </div>
  );
}

function EditChartsV() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Edit/ChartsV02">
      <Gender />
      <Age />
      <Country />
      <Growth />
    </div>
  );
}

function EditorCharts() {
  return (
    <div className="content-stretch flex flex-col gap-[6.646px] items-start justify-center relative shrink-0 w-full" data-name="Editor/Charts">
      <EditChartsV />
      <p className="css-4hzbpn font-['Founders_Grotesk:Regular',sans-serif] leading-[14.953px] not-italic relative shrink-0 text-[#303d4f] text-[9.969px] w-full">{`Last updated  Jul 24, 2024`}</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Average Reach</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">22.1k</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Average Impressions</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">22.4k</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Average Engagements</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">4.6k</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Follower Engagement Rate</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">321</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Reach Engagement Rate</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">12%</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">View Engagement Rate</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">21.1%</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">View Engagement Rate</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">3.9%</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">{`Average Reels Views `}</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">370.8k</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Average Story Reach</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">3.1k</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame55 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[8px] items-start relative shrink-0">
      <p className="css-ew64yg leading-[14px] relative shrink-0 text-[#54657d] text-[12px] text-center">Average Story Reach</p>
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[16px] w-[min-content]">3.2k</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[225.75px]">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame56 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame59 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <Frame67 />
    </div>
  );
}

export default function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame68 />
      <EditorCharts />
      <Frame70 />
    </div>
  );
}