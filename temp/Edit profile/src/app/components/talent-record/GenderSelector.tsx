import { useState } from "react";
import { Pencil, Check } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

interface GenderSelectorProps {
  selectedGender: string;
  onChange: (newGender: string) => void;
}

const genderOptions = ["Female", "Male", "Other"];

export function GenderSelector({
  selectedGender,
  onChange,
}: GenderSelectorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (gender: string) => {
    onChange(gender);
    setIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div
          className="relative inline-flex items-center gap-1 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="px-2 py-1 rounded-[4px] transition-all"
            style={{
              background: isHovering
                ? "rgba(0,0,0,0.03)"
                : "transparent",
            }}
          >
            <p className="text-sm">{selectedGender}</p>
          </div>
          {isHovering && (
            <div
              className="p-1 rounded-[4px] transition-opacity hover:opacity-70"
              style={{
                color: "#54657d",
              }}
            >
              <Pencil size={14} />
            </div>
          )}
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          forceMount={isOpen ? undefined : false}
          className="rounded-[8px] shadow-lg"
          style={{
            border: "1px solid var(--card-border-subtle)",
            background: "#ffffff",
            minWidth: "140px",
          }}
          side="bottom"
          sideOffset={5}
          align="start"
        >
          <div className="flex flex-col p-1">
            {genderOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="flex items-center justify-between px-3 py-2 rounded-[4px] transition-colors hover:bg-[rgba(0,0,0,0.03)] cursor-pointer"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                <span className="text-sm">{option}</span>
                {selectedGender === option && (
                  <Check
                    size={16}
                    style={{ color: "#54657d", strokeWidth: 2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}