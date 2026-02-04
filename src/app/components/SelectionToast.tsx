import { motion, AnimatePresence } from "motion/react";
import { useRef, useLayoutEffect, useState } from "react";

// SVG paths for icons
const svgPaths = {
  close: "M10.8284 11.5356C11.0236 11.7308 11.3402 11.7308 11.5355 11.5356C11.7307 11.3403 11.7307 11.0237 11.5355 10.8285L8.70711 8.00008L11.5356 5.17162C11.7308 4.97636 11.7308 4.65978 11.5356 4.46452C11.3403 4.26925 11.0237 4.26925 10.8285 4.46452L8 7.29297L5.17152 4.46449C4.97626 4.26923 4.65968 4.26923 4.46442 4.46449C4.26915 4.65975 4.26915 4.97634 4.46442 5.1716L7.29289 8.00008L4.46449 10.8285C4.26923 11.0237 4.26923 11.3403 4.46449 11.5356C4.65975 11.7308 4.97634 11.7308 5.1716 11.5356L8 8.70718L10.8284 11.5356Z",
  plus: "M8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5H7.5V12.5C7.5 12.7761 7.72386 13 8 13C8.27614 13 8.5 12.7761 8.5 12.5V8.5H12.5C12.7761 8.5 13 8.27614 13 8C13 7.72386 12.7761 7.5 12.5 7.5H8.5V3.5Z",
  share: "M3 5.56563C3.27614 5.56563 3.5 5.78949 3.5 6.06563L3.5 12.0865C3.5 12.5728 3.84463 12.9692 4.30229 13.0289C5.25249 13.153 6.62952 13.2929 8 13.2929C9.37048 13.2929 10.7475 13.153 11.6977 13.0289C12.1554 12.9692 12.5 12.5728 12.5 12.0865L12.5 6.06563C12.5 5.78949 12.7239 5.56563 13 5.56563C13.2761 5.56563 13.5 5.78949 13.5 6.06563L13.5 12.0865C13.5 13.0501 12.8072 13.8926 11.8272 14.0205C10.8554 14.1474 9.43097 14.2929 8 14.2929C6.56903 14.2929 5.14461 14.1474 4.17281 14.0205C3.19282 13.8926 2.5 13.0501 2.5 12.0865L2.5 6.06563C2.5 5.78949 2.72386 5.56563 3 5.56563ZM7.50019 3L5.68705 4.81313C5.49179 5.0084 5.17521 5.0084 4.97994 4.81313C4.78468 4.61787 4.78468 4.30129 4.97994 4.10603L7.29306 1.79291C7.68358 1.40239 8.31675 1.40239 8.70727 1.79291L11.0204 4.10603C11.2156 4.30129 11.2156 4.61787 11.0204 4.81314C10.8251 5.0084 10.5085 5.0084 10.3133 4.81314L8.50025 3.0001L8.50024 9.45962C8.50024 9.73576 8.27639 9.95962 8.00024 9.95962C7.7241 9.95962 7.50024 9.73576 7.50024 9.45962L7.50025 3C7.50023 3 7.50021 3 7.50019 3Z",
  bookmark: "M4.25 3.75425C4.25 3.51212 4.42325 3.30546 4.66273 3.26968C5.31772 3.17183 6.65886 3 8 3C9.34114 3 10.6823 3.17183 11.3373 3.26968C11.5767 3.30546 11.75 3.51212 11.75 3.75425V12.6058C11.75 13.0808 11.1392 13.2977 10.8308 12.9364C9.91058 11.8586 8.55417 10.3889 8 10.3889C7.44583 10.3889 6.08942 11.8586 5.16924 12.9364C4.86081 13.2977 4.25 13.0808 4.25 12.6058V3.75425Z",
  trash: "M2 4H14M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2 6 1.33333 6.66667 1.33333H9.33333C10 1.33333 10.6667 2 10.6667 2.66667V4",
};

export interface SelectedItem {
  id: number;
  videoUrl: string;
  title: string;
  // Source position for fly animation (from the clicked card)
  sourceX?: number;
  sourceY?: number;
}

interface SelectionToastProps {
  selectedCount: number;
  totalCount?: number;
  onSelectAll?: () => void;
  onShare?: () => void;
  onAddTo?: () => void;
  onSaveForLater?: () => void;
  onDelete?: () => void;
  onClose?: () => void;
  isVisible: boolean;
}

// Exported ThumbnailGallery component for use outside the toast
export function ThumbnailGallery({ 
  items, 
  onDeselect 
}: { 
  items: SelectedItem[]; 
  onDeselect: (id: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  // Update container position for calculating fly-in animations
  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, [items.length]);

  // Calculate initial position for fly-in animation
  const getInitialPosition = (item: SelectedItem, index: number) => {
    if (item.sourceX !== undefined && item.sourceY !== undefined && containerRect) {
      // Calculate relative position from source card to gallery
      const targetX = containerRect.left + (index * 56) + 24; // 48px thumbnail + 8px gap, centered
      const targetY = containerRect.top + 32; // Center of gallery
      
      return {
        opacity: 0,
        scale: 0.2,
        x: item.sourceX - targetX,
        y: item.sourceY - targetY,
        rotate: -15,
      };
    }
    // Fallback animation if no source position
    return {
      opacity: 0,
      scale: 0.3,
      y: 200,
      x: 100,
      rotate: -10,
    };
  };

  return (
    <div 
      ref={containerRef}
      className="flex items-center gap-[8px] py-[8px] overflow-visible min-h-[64px]"
      style={{ position: "relative", zIndex: 9999 }}
    >
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            layout
            initial={getInitialPosition(item, index)}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: 0,
              rotate: 0,
              zIndex: 1,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: -30,
              zIndex: 9999,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 22,
              mass: 0.8,
            }}
            onClick={() => onDeselect(item.id)}
            className="relative shrink-0 w-[48px] h-[48px] rounded-[6px] overflow-hidden cursor-pointer group bg-[#303d4f]"
            style={{ 
              zIndex: 9999, 
              position: "relative",
            }}
            title={`Click to deselect: ${item.title}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <video
              src={item.videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              preload="auto"
            />
            {/* Hover overlay with X */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path
                  d={svgPaths.close}
                  fill="#F9FAFA"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}

function ItemsSelected({ count }: { count: number }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[16px] py-4 relative shrink-0"
      data-name="Items Selected"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#303d4f] border-r border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f9fafa] text-[16px]">
        {count}
      </p>
      <p className="font-['Hanken_Grotesk',sans-serif] leading-[16px] relative shrink-0 text-[#f9fafa] text-[12px]">
        Selected
      </p>
    </div>
  );
}

function ButtonSelectAll({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
      data-name="Button select all"
    >
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f9fafa] text-[14px]">
        Select all
      </p>
    </button>
  );
}

function ShareIcon() {
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
          d={svgPaths.share}
          fill="#1C2128"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ButtonSecondary({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#e5e7e8] transition-colors cursor-pointer"
      data-name="Button secondary"
    >
      <ShareIcon />
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#15191e] text-[14px]">
        Share
      </p>
    </button>
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
          fill="#F9FAFA"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ButtonPrimary({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#155fef] content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#1251d1] transition-colors cursor-pointer"
      data-name="Button primary"
    >
      <PlusIcon />
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f9fafa] text-[14px]">
        Add to
      </p>
    </button>
  );
}

function BookmarkIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.bookmark}
          stroke="#F9FAFA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ButtonSaveForLater({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
      data-name="Button save for later"
    >
      <BookmarkIcon />
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f9fafa] text-[14px]">
        Save for later
      </p>
    </button>
  );
}

function TrashIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.trash}
          stroke="#F9FAFA"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ButtonDelete({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(239,68,68,0.15)] content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[rgba(239,68,68,0.25)] transition-colors cursor-pointer"
      data-name="Button delete"
    >
      <TrashIcon />
      <p className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f9fafa] text-[14px]">
        Delete
      </p>
    </button>
  );
}

function Actions({
  onSelectAll,
  onShare,
  onAddTo,
  onSaveForLater,
  onDelete,
}: {
  onSelectAll?: () => void;
  onShare?: () => void;
  onAddTo?: () => void;
  onSaveForLater?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative shrink-0"
      data-name="Actions"
    >
      <ButtonSelectAll onClick={onSelectAll} />
      {onSaveForLater && <ButtonSaveForLater onClick={onSaveForLater} />}
      {onDelete && <ButtonDelete onClick={onDelete} />}
      <ButtonSecondary onClick={onShare} />
      <ButtonPrimary onClick={onAddTo} />
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
          fill="#F9FAFA"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[12px] relative rounded-[9999px] shrink-0 hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
      data-name="Button"
    >
      <CloseIcon />
    </button>
  );
}

function Close({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex h-full items-center px-[8px] py-0 relative shrink-0"
      data-name="Close"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#303d4f] border-l border-solid inset-0 pointer-events-none"
      />
      <CloseButton onClick={onClick} />
    </div>
  );
}

export function SelectionToast({
  selectedCount,
  onSelectAll,
  onShare,
  onAddTo,
  onSaveForLater,
  onDelete,
  onClose,
  isVisible,
}: SelectionToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 z-50 py-[16px]"
          style={{
            left: "calc(240px + 32px)", /* Account for sidebar width (240px) + content padding (32px) */
            right: "32px"
          }}
        >
          <div
            className="bg-[#1c2128] relative rounded-[12px] w-full"
            data-name="action toast/ Default"
          >
            <div className="content-stretch flex items-center relative rounded-[inherit] h-full">
              <div className="flex flex-row items-center self-stretch shrink-0">
                <ItemsSelected count={selectedCount} />
              </div>
              <div className="flex-1 flex justify-center">
                <Actions
                  onSelectAll={onSelectAll}
                  onShare={onShare}
                  onAddTo={onAddTo}
                  onSaveForLater={onSaveForLater}
                  onDelete={onDelete}
                />
              </div>
              <div className="flex flex-row items-center self-stretch shrink-0">
                <Close onClick={onClose} />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-[#303d4f] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(28,33,40,0.25)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
