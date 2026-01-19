import { useState, useCallback } from "react";

// Checkmark SVG path
const checkmarkPath =
  "M17.6568 7.75735C18.0474 8.14788 18.0474 8.78104 17.6568 9.17157L10.5858 16.2426C10.1953 16.6332 9.56213 16.6332 9.17161 16.2426L6.34318 13.4142C5.95266 13.0237 5.95266 12.3905 6.34318 12C6.73371 11.6095 7.36687 11.6095 7.7574 12L9.87872 14.1213L16.2426 7.75735C16.6331 7.36683 17.2663 7.36683 17.6568 7.75735Z";

interface ContentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  isDark?: boolean;
}

export function ContentCheckbox({
  checked,
  onCheckedChange,
  disabled = false,
  isDark = false,
}: ContentCheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!disabled) {
      onCheckedChange(!checked);
    }
  }, [checked, disabled, onCheckedChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.key === " " || e.key === "Enter") && !disabled) {
      e.preventDefault();
      onCheckedChange(!checked);
    }
  }, [checked, disabled, onCheckedChange]);

  const getBorderClasses = () => {
    if (checked) {
      return ""; // No border when checked
    }
    if (isHovered) {
      return "border-2 border-[#155fef] border-solid";
    }
    return isDark
      ? "border-2 border-[#6f7d90] border-solid"
      : "border-2 border-[#3a495f] border-solid";
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`box-border content-stretch flex items-center justify-center p-[16px] rounded-[1000px] select-none cursor-pointer ${isHovered ? "bg-[rgba(21,95,239,0.05)]" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div
        className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px] outline-none border-none"
        style={{
          backgroundColor: checked
            ? "#155fef"
            : isDark
              ? "rgba(21, 25, 30, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
        }}
      >
        {!checked && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[8px] ${getBorderClasses()}`}
          />
        )}
        {checked && (
          <svg
            className="block size-[24px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d={checkmarkPath}
              fill="#F3F5F6"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
