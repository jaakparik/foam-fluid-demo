import svgPaths from "./svg-bbeqvn9gux";
import imgAvatar from "../assets/ee58b14a9045d0e024e00d41f0adefe967cdb999.png";
import imgAvatar1 from "../assets/ddc25c8c5e86bf6e74b0a0b2c4b59dafbe137784.png";
import imgAvatar2 from "../assets/60668e2e2279b5f5a3e31741327e568f55f28a7b.png";
import imgAvatar3 from "../assets/ddf1229648c028903af7ee5eba107860f62e14ea.png";
import imgAvatar4 from "../assets/756127d64edfe65efe75b2d8463af2294fe3e9c5.png";
import imgAvatar5 from "../assets/118f7ee3f8bcf8916e64dd3f446f5f0a843dfa95.png";
import imgAvatar6 from "../assets/992421e6abd42f43985fef4894588d26c932efe5.png";
import imgAvatar7 from "../assets/e3fa84ad08a69a946cab2e46a0f62b609598d895.png";
import imgAvatar8 from "../assets/c8a5b3ab0c4d602bce662ac763bdf3c551a63fef.png";
import imgAvatar9 from "../assets/3e04328ec681a97ee920bbb76b7aa2da6b349b9e.png";
import imgAvatar10 from "../assets/bb2b99e4bb9db3eed1af721b96aa2228a1eba447.png";

function Logotype() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Logotype">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Logotype">
          <path d={svgPaths.p6135cc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#303d4f] content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0 size-[28px]">
      <Logotype />
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative shrink-0" data-name="nav_3">
      <Frame4 />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#303d4f] text-[16px] text-nowrap">Evergreen Agency</p>
    </div>
  );
}

function NavSeparator() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-name="nav/separator">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Home">
          <path d={svgPaths.p1811ef00} id="Rectangle 519" stroke="var(--stroke-0, #15191E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#15191e] text-[14px]">Dashboard</p>
    </div>
  );
}

function NavItemWithIcon1() {
  return (
    <div className="bg-[rgba(58,73,95,0.1)] relative rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[2px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div aria-hidden="true" className="absolute border-[#155fef] border-[0px_4px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[2px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Home />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Persons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Persons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Persons">
          <circle cx="7.09595" cy="5.6543" id="Ellipse 98" r="2.1582" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="14.043" cy="6.15906" id="Ellipse 99" r="1.65344" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p3376ba00} id="Rectangle 520" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <g id="Mask group">
            <mask height="7" id="mask0_1_2470" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="9" x="10" y="9">
              <path d={svgPaths.p20cc8d00} id="Rectangle 521" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            </mask>
            <g mask="url(#mask0_1_2470)">
              <path d={svgPaths.p34a575c0} fill="var(--fill-0, #54657D)" id="Rectangle 561" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Talent Directory</p>
    </div>
  );
}

function NavItemWithIcon2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Persons />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Pictures() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Pictures">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Pictures">
          <path d={svgPaths.p330caa00} id="Rectangle 519" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d={svgPaths.p2d219ae0} id="Vector 624" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="13.9062" cy="7.125" fill="var(--fill-0, #54657D)" id="Ellipse 45" r="0.9375" />
          <path d={svgPaths.p1c72f400} id="Vector 684" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Content Feed</p>
    </div>
  );
}

function NavItemWithIcon3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Pictures />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List">
          <path d="M6.875 5H16.25" id="Vector 662" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M6.875 10H16.25" id="Vector 664" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path d="M6.875 15H16.25" id="Vector 663" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="3.4375" cy="5" fill="var(--fill-0, #54657D)" id="Ellipse 70" r="0.9375" />
          <circle cx="3.4375" cy="10" fill="var(--fill-0, #54657D)" id="Ellipse 71" r="0.9375" />
          <circle cx="3.4375" cy="15" fill="var(--fill-0, #54657D)" id="Ellipse 72" r="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Lists</p>
    </div>
  );
}

function NavItemWithIcon4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <List />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function MediaPacks() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Media packs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Media packs">
          <g id="Group 10">
            <circle cx="12.3863" cy="6.24462" id="Ellipse 99" r="1.16616" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            <path d={svgPaths.p3cf4d3c0} id="Rectangle 521" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          </g>
          <path d={svgPaths.p1daa3500} fill="var(--stroke-0, #54657D)" id="Rectangle 559" />
          <path d={svgPaths.p1693900} id="Rectangle 560" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Media Kits</p>
    </div>
  );
}

function NavItemWithIcon5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <MediaPacks />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Eye">
          <path d={svgPaths.p490a880} id="Ellipse 38" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="10" cy="10" id="Ellipse 30" r="2.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Scouting Watchlists</p>
    </div>
  );
}

function NavItemWithIcon6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/with_icon_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Eye />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
          <NavItemWithIcon1 />
          <NavItemWithIcon2 />
          <NavItemWithIcon3 />
          <NavItemWithIcon4 />
          <NavItemWithIcon5 />
          <NavItemWithIcon6 />
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="nav_2">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">RECENT</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3a495f] text-[12px] text-nowrap">
        <span>{`Alejandra Tapia’s `}</span>
        <span className="text-[#8b94a2]">Profile</span>
      </p>
    </div>
  );
}

function NavItemRecentProfile() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nav/item/recent_profile_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Avatar />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="row 1">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar1} />
      </div>
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar2} />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="row 2">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar3} />
      </div>
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar4} />
      </div>
    </div>
  );
}

function AvatarsTalent() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="avatars talent">
      <Row />
      <Row1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]" data-name="Avatar">
      <AvatarsTalent />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3a495f] text-[12px] text-nowrap">Sixteenth Roster</p>
    </div>
  );
}

function NavItemRecentList() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="nav/item/recent_list_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <Avatar1 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar5} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3a495f] text-[12px] text-nowrap">
        <span>{`Marcello Bukate’s `}</span>
        <span className="text-[#8b94a2]">Media Kit</span>
      </p>
    </div>
  );
}

function NavItemMediaKit() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="nav/item/media_kit_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <Avatar2 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2170ce00} fill="var(--fill-0, #54657D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <Icon />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] relative shrink-0 text-[12px] text-nowrap">
      <p className="relative shrink-0 text-[#3a495f]">Project Hail Mary</p>
      <p className="relative shrink-0 text-[#8b94a2]">Watchlist</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame11 />
    </div>
  );
}

function NavItemWatchlist() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="nav/item/watchlist_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <Frame18 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="row 1">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.71%] left-0 max-w-none top-0 w-full" src={imgAvatar6} />
        </div>
      </div>
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar7} />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="row 2">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.99%] left-0 max-w-none top-[-0.65%] w-full" src={imgAvatar8} />
        </div>
      </div>
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[140.85%] left-[0.14%] max-w-none top-[-8.93%] w-full" src={imgAvatar9} />
        </div>
      </div>
    </div>
  );
}

function AvatarsTalent1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="avatars talent">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAvatar10} />
      <AvatarsTalent1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3a495f] text-[12px] text-nowrap">
        <span>{`Google Note 26 `}</span>
        <span className="text-[#8b94a2]">List</span>
      </p>
    </div>
  );
}

function NavItemRecentList1() {
  return (
    <div className="h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="nav/item/recent_list_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <Avatar3 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-0 relative w-full">
          <Nav1 />
          <NavItemRecentProfile />
          <NavItemRecentList />
          <NavItemMediaKit />
          <NavItemWatchlist />
          <NavItemRecentList1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Nav2 />
      <NavSeparator />
      <Frame />
      <NavSeparator />
      <Frame1 />
    </div>
  );
}

function LogoGoogleg48Dp() {
  return (
    <div className="absolute inset-[4.17%]" data-name="logo_googleg_48dp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="logo_googleg_48dp">
          <path clipRule="evenodd" d={svgPaths.p1c31e00} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.pe4b4a80} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p2a1e0380} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="Shape_3" />
          <path clipRule="evenodd" d={svgPaths.p2e6a5600} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="Shape_4" />
          <g id="Shape_5"></g>
        </g>
      </svg>
    </div>
  );
}

function Platforms() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Platforms">
      <LogoGoogleg48Dp />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[12px] w-[144px]">
      <p className="font-['Founders_Grotesk:Medium',sans-serif] relative shrink-0 text-[#303d4f] w-full">Download Chrome Extension</p>
      <p className="font-['Founders_Grotesk:Regular',sans-serif] relative shrink-0 text-[#8b94a2] w-full">Get the full experience</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Platforms />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function NavSeparator1() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full" data-name="nav/separator">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bell">
          <path d={svgPaths.p34917f40} id="Vector" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow items-center justify-between leading-[20px] min-h-px min-w-px relative shrink-0">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Notifications</p>
      <p className="relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">12</p>
    </div>
  );
}

function NavItemWithIcon() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="nav/item/with_icon_2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Bell />
          <Frame23 />
          <div className="absolute left-[21px] size-[5px] top-[7px]">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 95, 239, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                <circle cx="2.5" cy="2.5" fill="var(--fill-0, #155FEF)" id="Ellipse 1" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cogwheel() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Cogwheel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Cogwheel">
          <path clipRule="evenodd" d={svgPaths.p1e1e1900} fillRule="evenodd" id="Union" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <circle cx="10.0334" cy="9.94791" id="Ellipse 31" r="2.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px]">Agency Settings</p>
    </div>
  );
}

function NavItemWithIcon7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="nav/item/with_icon_2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <Cogwheel />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
          <NavItemWithIcon />
          <NavItemWithIcon7 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#fbb874] relative rounded-[100px] shrink-0 size-[24px]" data-name="Avatar">
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[12px] not-italic text-[#1c2128] text-[10px] text-center text-nowrap top-[12.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[15px]">GB</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[14px] w-full">John Smith</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1bedaf80} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18a00b00} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Icon1 />
    </div>
  );
}

function User() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="user_3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative w-full">
          <Avatar4 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <User />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame8 />
      <NavSeparator1 />
      <Frame3 />
      <NavSeparator1 />
      <Frame17 />
    </div>
  );
}

export default function Frame26() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex flex-col items-start justify-between px-0 py-[16px] relative size-full">
      <Frame7 />
      <Frame25 />
    </div>
  );
}