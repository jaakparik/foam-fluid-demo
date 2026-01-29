import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import svgPaths from "../../imports/svg-modal";
import { mediaKitsData, MediaKitData } from "../data/mediaKits";

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (selectedKits: string[]) => void;
  selectedContentCount?: number;
  selectedContentIds?: number[];
}

function Title() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-[32px] min-w-px relative"
      data-name="Title"
    >
      <div className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#15191e] text-[16px]">
        <p className="leading-[24px]">Add to Media Kit</p>
      </div>
    </div>
  );
}

function HeaderInfo() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative"
      data-name="headerInfo"
    >
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title />
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.close}
          fill="#1C2128"
          fillRule="evenodd"
        />
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
      <CloseIcon />
    </button>
  );
}

function Actions({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="actions"
    >
      <Close onClick={onClose} />
    </div>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
      data-name="header"
    >
      <HeaderInfo />
      <Actions onClose={onClose} />
    </div>
  );
}

function ChevronIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.chevronDown}
          fill="#1C2128"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function AgencyKitsButton() {
  return (
    <button
      className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[12px] py-[6px] relative rounded-[8px] shrink-0 hover:bg-[#e8ebed] transition-colors cursor-pointer"
      data-name="Button secondary"
    >
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">
        Agency media kits
      </p>
      <ChevronIcon />
    </button>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.search}
          stroke="#B7BDC7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="var(--icon-stroke-width)"
        />
      </svg>
    </div>
  );
}

function FilterInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[32px] items-center px-[8px] py-0 relative rounded-[8px] shrink-0 w-[160px]"
      data-name="Filter item"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search kits..."
        className="flex-[1_0_0] font-['Hanken_Grotesk',sans-serif] font-light leading-[20px] min-h-px min-w-px relative text-[#54657d] text-[12px] bg-transparent border-none outline-none placeholder:text-[#8b94a2]"
      />
      <SearchIcon />
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.plus}
          fill="white"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1c2128] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 hover:bg-[#2a3039] transition-colors cursor-pointer"
      data-name="Button primary"
    >
      <PlusIcon />
    </button>
  );
}

function Toolbar({
  searchValue,
  onSearchChange,
  onAddClick,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <AgencyKitsButton />
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <FilterInput value={searchValue} onChange={onSearchChange} />
        <AddButton onClick={onAddClick} />
      </div>
    </div>
  );
}

function MediaKitItem({
  mediaKit,
  isSelected,
  onToggle,
}: {
  mediaKit: MediaKitData;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer ${
        isSelected ? "bg-[#f3f5f6]" : "bg-white hover:bg-[#f9fafb]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${
          isSelected ? "border-[#1c2128]" : "border-[rgba(0,0,0,0.05)]"
        }`}
      />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div
              className="relative rounded-[4px] shrink-0 w-[72px] h-[48px] overflow-hidden"
              data-name="thumbnail"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full"
                src={mediaKit.thumbnail}
              />
            </div>
            <div className="content-stretch flex flex-col font-['Hanken_Grotesk',sans-serif] font-medium items-start leading-[20px] relative shrink-0 text-[12px] min-w-[120px]">
              <p className="relative shrink-0 text-[#54657d] truncate max-w-[180px]">
                {mediaKit.title}
              </p>
              <p className="relative shrink-0 text-[#8b94a2]">
                {mediaKit.creator}
              </p>
            </div>
          </div>
          <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px]">
            {mediaKit.creationDate}
          </p>
        </div>
      </div>
    </button>
  );
}

function MediaKitList({
  mediaKits,
  selectedKits,
  onToggleKit,
}: {
  mediaKits: MediaKitData[];
  selectedKits: Set<string>;
  onToggleKit: (id: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[400px] items-start overflow-y-auto overflow-x-hidden relative shrink-0 w-full pr-[4px]">
      {mediaKits.map((kit) => (
        <MediaKitItem
          key={kit.id}
          mediaKit={kit}
          isSelected={selectedKits.has(kit.id)}
          onToggle={() => onToggleKit(kit.id)}
        />
      ))}
    </div>
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#e8ebed] transition-colors cursor-pointer"
      data-name="Button secondary"
    >
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[12px]">
        Cancel
      </p>
    </button>
  );
}

function ConfirmButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer ${
        disabled
          ? "bg-[#8b94a2] cursor-not-allowed"
          : "bg-[#1c2128] hover:bg-[#2a3039]"
      }`}
      data-name="Button primary"
    >
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-white">
        Add
      </p>
    </button>
  );
}

function Footer({
  onCancel,
  onConfirm,
  disabled,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className="content-stretch flex gap-[16px] isolate items-center justify-end relative shrink-0 w-full"
      data-name="footer"
    >
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative z-[1]">
        <CancelButton onClick={onCancel} />
        <ConfirmButton onClick={onConfirm} disabled={disabled} />
      </div>
    </div>
  );
}

export function MediaKitModal({
  isOpen,
  onClose,
  onConfirm,
  selectedContentCount = 0,
  selectedContentIds = [],
}: MediaKitModalProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [selectedKits, setSelectedKits] = useState<Set<string>>(new Set());

  // Get first 20 media kits
  const availableKits = mediaKitsData.slice(0, 20);

  const filteredKits = availableKits.filter(
    (kit) =>
      kit.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      kit.creator.toLowerCase().includes(searchValue.toLowerCase())
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

  const handleAddNew = () => {
    // Navigate to new media kit page with selected content
    navigate("/media-kits/create", {
      state: { selectedContentIds },
    });
    onClose();
  };

  const handleConfirm = () => {
    if (onConfirm && selectedKits.size > 0) {
      onConfirm(Array.from(selectedKits));
    }
    onClose();
    // Reset state when closing
    setSelectedKits(new Set());
    setSearchValue("");
  };

  const handleClose = () => {
    onClose();
    // Reset state when closing
    setSelectedKits(new Set());
    setSearchValue("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[100] p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[12px] shadow-[0px_2px_16px_0px_rgba(28,33,40,0.25),0px_32px_64px_0px_rgba(28,33,40,0.25)] w-full max-w-[520px]"
            data-name="_Modal"
            onClick={(e) => e.stopPropagation()}
          >
            <Header onClose={handleClose} />
            
            {/* Info text showing content count */}
            {selectedContentCount > 0 && (
              <p className="font-['Hanken_Grotesk',sans-serif] text-[14px] text-[#54657d] w-full -mt-[12px]">
                Adding {selectedContentCount} item{selectedContentCount !== 1 ? "s" : ""} to selected media kit(s)
              </p>
            )}
            
            <Toolbar
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onAddClick={handleAddNew}
            />
            <MediaKitList
              mediaKits={filteredKits}
              selectedKits={selectedKits}
              onToggleKit={handleToggleKit}
            />
            <Footer
              onCancel={handleClose}
              onConfirm={handleConfirm}
              disabled={selectedKits.size === 0}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
