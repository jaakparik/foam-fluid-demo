import { useState } from "react";
import svgPaths from "@/imports/svg-emerj873jg";
import imgOspanAli6Xv4A1Va1RUUnsplash from "figma:asset/4367c742320230e075d497c8b985767332182797.png";

interface MediaKit {
  id: string;
  name: string;
  author: string;
  date: string;
  image: string;
}

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: (selectedKits: string[]) => void;
}

const mockMediaKits: MediaKit[] = [
  {
    id: "1",
    name: "Sammi Maria's Media Kit",
    author: "Regina Carvalho",
    date: "16/01/2026",
    image: imgOspanAli6Xv4A1Va1RUUnsplash,
  },
  {
    id: "2",
    name: "Sammi Maria's Media Kit",
    author: "Regina Carvalho",
    date: "16/01/2026",
    image: imgOspanAli6Xv4A1Va1RUUnsplash,
  },
  {
    id: "3",
    name: "Sammi Maria's Media Kit",
    author: "Regina Carvalho",
    date: "16/01/2026",
    image: imgOspanAli6Xv4A1Va1RUUnsplash,
  },
  {
    id: "4",
    name: "Sammi Maria's Media Kit",
    author: "Regina Carvalho",
    date: "16/01/2026",
    image: imgOspanAli6Xv4A1Va1RUUnsplash,
  },
  {
    id: "5",
    name: "Sammi Maria's Media Kit",
    author: "Regina Carvalho",
    date: "16/01/2026",
    image: imgOspanAli6Xv4A1Va1RUUnsplash,
  },
];

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

function Icon({ onClick }: { onClick?: () => void }) {
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

function Close({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer"
      data-name="close"
    >
      <Icon />
    </button>
  );
}

function Actions({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="actions">
      <Close onClick={onClose} />
    </div>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="header">
      <HeaderInfo />
      <Actions onClose={onClose} />
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
    <button className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[12px] py-[6px] relative rounded-[8px] shrink-0 hover:bg-[#e8ebed] transition-colors cursor-pointer" data-name="Button secondary">
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Agency media kits</p>
      <Icon1 />
    </button>
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

function FilterItem({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center px-[8px] py-0 relative rounded-[8px] shrink-0 w-[128px]" data-name="Filter item">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Kit name"
        className="css-4hzbpn flex-[1_0_0] font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-none outline-none placeholder:text-[#8b94a2]"
      />
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

function ButtonPrimary({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 hover:bg-[#2a3039] transition-colors cursor-pointer"
      data-name="Button primary"
    >
      <Icon2 />
    </button>
  );
}

function Frame1({ searchValue, onSearchChange, onAdd }: { searchValue: string; onSearchChange: (value: string) => void; onAdd: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <FilterItem value={searchValue} onChange={onSearchChange} />
      <ButtonPrimary onClick={onAdd} />
    </div>
  );
}

function Frame({ searchValue, onSearchChange, onAdd }: { searchValue: string; onSearchChange: (value: string) => void; onAdd: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <ButtonSecondary />
      <Frame1 searchValue={searchValue} onSearchChange={onSearchChange} onAdd={onAdd} />
    </div>
  );
}

function Frame3({ name, author }: { name: string; author: string }) {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium items-start leading-[20px] relative shrink-0 text-[12px] w-[132px]">
      <p className="css-4hzbpn relative shrink-0 text-[#54657d] w-full">{name}</p>
      <p className="css-4hzbpn relative shrink-0 text-[#8b94a2] ">{author}</p>
    </div>
  );
}

function Frame4({ mediaKit }: { mediaKit: MediaKit }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 w-[72px] h-[48px]" data-name="ospan-ali-6xv4A1VA1rU-unsplash">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={mediaKit.image} />
      </div>
      <Frame3 name={mediaKit.name} author={mediaKit.author} />
    </div>
  );
}

function Frame5({ mediaKit, isSelected, onToggle }: { mediaKit: MediaKit; isSelected: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer ${
        isSelected ? "bg-[#f3f5f6]" : "bg-white hover:bg-[#f9fafb]"
      }`}
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isSelected ? "border-[#1c2128]" : "border-[rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between p-[8px] relative w-full">
          <Frame4 mediaKit={mediaKit} />
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px]">{mediaKit.date}</p>
        </div>
      </div>
    </button>
  );
}

function Frame6({ mediaKits, selectedKits, onToggleKit }: { mediaKits: MediaKit[]; selectedKits: Set<string>; onToggleKit: (id: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[322px] items-start overflow-y-auto overflow-x-hidden relative shrink-0 w-full">
      {mediaKits.map((kit) => (
        <Frame5 key={kit.id} mediaKit={kit} isSelected={selectedKits.has(kit.id)} onToggle={() => onToggleKit(kit.id)} />
      ))}
    </div>
  );
}

function ButtonSecondary1({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#e8ebed] transition-colors cursor-pointer"
      data-name="Button secondary"
    >
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">Cancel</p>
    </button>
  );
}

function ButtonPrimary1({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer ${
        disabled ? "bg-[#8b94a2] cursor-not-allowed" : "bg-[#1c2128] hover:bg-[#2a3039]"
      }`}
      data-name="Button primary"
    >
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">Next</p>
    </button>
  );
}

function Frame2({ onCancel, onNext, disabled }: { onCancel: () => void; onNext: () => void; disabled?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative z-[1]">
      <ButtonSecondary1 onClick={onCancel} />
      <ButtonPrimary1 onClick={onNext} disabled={disabled} />
    </div>
  );
}

function Footer({ onCancel, onNext, disabled }: { onCancel: () => void; onNext: () => void; disabled?: boolean }) {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center justify-end relative shrink-0 w-full" data-name="footer">
      <Frame2 onCancel={onCancel} onNext={onNext} disabled={disabled} />
    </div>
  );
}

export default function MediaKitModal({ isOpen, onClose, onNext }: MediaKitModalProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedKits, setSelectedKits] = useState<Set<string>>(new Set());

  if (!isOpen) return null;

  const filteredKits = mockMediaKits.filter((kit) =>
    kit.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    kit.author.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleToggleKit = (id: string) => {
    setSelectedKits((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    if (onNext && selectedKits.size > 0) {
      onNext(Array.from(selectedKits));
    }
    onClose();
  };

  const handleAdd = () => {
    console.log("Add new media kit");
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[8px] shadow-[0px_2px_16px_0px_rgba(28,33,40,0.25),0px_32px_64px_0px_rgba(28,33,40,0.25)] w-full max-w-[480px]"
        data-name="_Modal"
        onClick={(e) => e.stopPropagation()}
      >
        <Header onClose={onClose} />
        <Frame searchValue={searchValue} onSearchChange={setSearchValue} onAdd={handleAdd} />
        <Frame6 mediaKits={filteredKits} selectedKits={selectedKits} onToggleKit={handleToggleKit} />
        <Footer onCancel={onClose} onNext={handleNext} disabled={selectedKits.size === 0} />
      </div>
    </div>
  );
}