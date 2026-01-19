interface TabButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, icon, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 ${
        isActive ? "bg-[rgba(58,73,95,0.1)]" : ""
      }`}
      style={{
        border: "none",
        cursor: "pointer",
        background: isActive ? "rgba(58,73,95,0.1)" : "transparent",
      }}
    >
      {icon}
      <p
        className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] whitespace-pre"
        style={{
          color: isActive ? "#15191e" : "#54657d",
        }}
      >
        {label}
      </p>
    </button>
  );
}
