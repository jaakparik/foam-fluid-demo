import { FilterPopover } from '@/app/components/FilterPopover';
import { useState, useRef, useLayoutEffect } from 'react';
import ButtonSecondary from '@/imports/ButtonSecondary';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, right: 24 });

  useLayoutEffect(() => {
    if (isOpen && buttonRef.current && popoverRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPopoverPosition({
        top: buttonRect.bottom + window.scrollY + 8,
        right: 24, // Fixed 24px from right edge
      });
    }
  }, [isOpen]);

  return (
    <div className="flex items-center justify-end min-h-screen bg-gray-100 p-8">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-[24px] w-[32px] h-[32px]"
      >
        <ButtonSecondary />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popover */}
          <div 
            className="fixed z-50" 
            style={{ 
              top: `${popoverPosition.top}px`, 
              right: `${popoverPosition.right}px`
            }}
            ref={popoverRef}
          >
            <FilterPopover />
          </div>
        </>
      )}
    </div>
  );
}