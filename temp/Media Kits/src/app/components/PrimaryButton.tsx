import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  icon,
  className = "",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center h-[32px] w-[32px] justify-center rounded-[8px] transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        background: "var(--primary-button-bg)",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background =
            "var(--primary-button-bg-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background =
            "var(--primary-button-bg)";
        }
      }}
    >
      {icon && (
        <div
          className="size-[20px] shrink-0"
          style={{ color: "var(--primary-button-icon)" }}
        >
          {icon}
        </div>
      )}
    </button>
  );
}