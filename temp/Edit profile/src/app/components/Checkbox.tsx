import React, { useState } from "react";

interface CheckboxProps {
  size?: "small" | "large";
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  customBg?: string;
}

function Checkmark({
  size,
  checked,
  isPressed,
}: {
  size: "small" | "large";
  checked: boolean;
  isPressed: boolean;
}) {
  const getCheckmarkColor = () => {
    if (checked) return "#ffffff";
    if (isPressed) return "rgb(21, 95, 239)";
    return "rgb(139, 148, 162)";
  };

  const svgSize = size === "large" ? "size-5" : "size-3";

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
      <svg
        className={`block ${svgSize} transition-transform duration-200 group-hover:scale-125`}
        viewBox="0 0 24 24"
        fill="none"
        stroke={getCheckmarkColor()}
        strokeWidth={size === "large" ? "4" : "3"}
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}

export function Checkbox({
  size = "large",
  checked = false,
  onChange,
  className = "",
  disabled = false,
  customBg,
}: CheckboxProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const checkboxSize =
    size === "large" ? "size-[28px]" : "size-[16px]";
  const hitAreaSize =
    size === "large" ? "size-[40px]" : "size-[32px]";
  const hitAreaRadius =
    size === "large" ? "rounded-[12px]" : "rounded-[8px]";
  const borderWidth =
    size === "large" ? "border-2" : "border-[1.5px]";
  const checkboxRadius =
    size === "large" ? "rounded-[8px]" : "rounded-[4px]";

  // Hit area: no hover bg, only subtle active flash
  const getHitAreaBackground = () => {
    return "active:bg-[rgba(0,0,0,0.10)]";
  };

  // Get checkbox background and border based on state
  const getCheckboxStyle = () => {
    // Checked (blue, darker on hover, grows)
    const bgChecked =
      "bg-[rgb(21,95,239)] hover:bg-[rgba(21,95,239)]";
    const borderChecked = "border-none";
    const hoverScaleChecked =
      "transition-transform duration-200 hover:scale-110";

    // Pressed
    const bgPressed = customBg ? "" : "bg-transparent";
    const borderPressed = "border-[rgb(21,95,239)]";

    // Default unchecked - no background, use pill-border-hover (or customBg if provided)
    const bgDefault = customBg ? "" : "bg-transparent";
    const borderDefault = "";

    const hoverScale =
      "transition-transform duration-200 hover:scale-110";

    if (checked) {
      return `${bgChecked} ${borderChecked} ${hoverScaleChecked}`;
    }
    if (isPressed) {
      return `${bgPressed} ${borderPressed}`;
    }
    return `${bgDefault} ${borderDefault} ${hoverScale}`;
  };

  const shouldShowCheckmark = checked || isPressed;

  // Get border color based on state
  const getBorderColor = () => {
    if (checked) return "transparent";
    if (isPressed) return "rgb(21, 95, 239)";
    return "var(--filter-pill-border-hover)";
  };

  // Get background color based on state
  const getBackgroundColor = () => {
    if (checked) return undefined; // Use CSS class
    if (customBg) return customBg;
    return undefined; // Use CSS class
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-200 ${hitAreaSize} ${hitAreaRadius} ${getHitAreaBackground()} ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* inner box exactly the size of the checkbox */}
      <div
        className={`relative ${checkboxSize} ${checkboxRadius}`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={`
            absolute inset-0
            ${checkboxRadius}
            cursor-pointer
            appearance-none
            ${borderWidth}
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[rgb(21,95,239)] focus:ring-offset-0
            z-0
            ${getCheckboxStyle()}
          `}
          style={{ 
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
          }}
          onKeyDown={(e) => {
            if (e.key === " ") {
              handleMouseDown();
              setTimeout(handleMouseUp, 100);
            }
          }}
          disabled={disabled}
        />
        {shouldShowCheckmark && (
          <Checkmark
            size={size}
            checked={checked}
            isPressed={isPressed}
          />
        )}
      </div>
    </div>
  );
}