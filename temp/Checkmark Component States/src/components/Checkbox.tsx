import { useState } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox@1.1.4';
import svgPaths from '../imports/svg-xmuamb6xwn';

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Checkbox({ checked: controlledChecked, onCheckedChange, disabled = false }: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleCheckedChange = (newChecked: boolean) => {
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    onCheckedChange?.(newChecked);
  };

  // Determine which visual state to show
  const getCheckboxClasses = () => {
    if (isChecked) {
      return "bg-[#155fef]";
    }
    return "bg-white";
  };

  const getBorderClasses = () => {
    if (isChecked) {
      return null; // No border when checked
    }
    if (isHovered || isPressed) {
      return "border-2 border-[#155fef] border-solid";
    }
    return "border-2 border-[#3a495f] border-solid";
  };

  const getHitAreaClasses = () => {
    if (isPressed) {
      return "bg-[rgba(21,95,239,0.1)]";
    }
    if (isHovered) {
      return "bg-[rgba(21,95,239,0.05)]";
    }
    return "";
  };

  const showCheckmark = isChecked || (isPressed && !isChecked);

  return (
    <div
      className={`box-border content-stretch flex items-center justify-center p-[16px] rounded-[1000px] select-none transition-colors ${getHitAreaClasses()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <CheckboxPrimitive.Root
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        disabled={disabled}
        className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px] outline-none border-none"
        style={{
          backgroundColor: isChecked ? '#155fef' : 'white',
        }}
      >
        {!isChecked && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[8px] ${getBorderClasses()}`}
          />
        )}
        <CheckboxPrimitive.Indicator className="relative shrink-0 size-[24px]" forceMount>
          {showCheckmark && (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <path
                  d={svgPaths.p3fd9100}
                  fill={isChecked ? "#F3F5F6" : "#155FEF"}
                />
              </g>
            </svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  );
}
