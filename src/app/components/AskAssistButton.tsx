import { AskIcon } from "./icons/AskIcon";
import { useState, useEffect } from "react";

interface AskAssistButtonProps {
  onClick?: () => void;
}

export function AskAssistButton({
  onClick,
}: AskAssistButtonProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);

  // Auto-collapse after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
      setHasAutoCollapsed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Show text on hover after auto-collapse
  const handleMouseEnter = () => {
    if (hasAutoCollapsed) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasAutoCollapsed) {
      setIsExpanded(false);
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[32px] flex items-center justify-center rounded-[8px] transition-all duration-300 ease-in-out assist-button overflow-hidden"
      style={{
        background: "var(--nav-notification-badge)",
        width: isExpanded ? "108px" : "32px",
        gap: isExpanded ? "4px" : "0px",
        paddingLeft: isExpanded ? "8px" : "0px",
        paddingRight: isExpanded ? "8px" : "0px",
      }}
    >
      <AskIcon className="size-[20px] text-white shrink-0" />
      {isExpanded && (
        <span
          className="text-white font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap transition-opacity duration-300 ease-in-out"
          style={{
            opacity: isExpanded ? 1 : 0,
          }}
        >
          Ask Assist
        </span>
      )}
    </button>
  );
}