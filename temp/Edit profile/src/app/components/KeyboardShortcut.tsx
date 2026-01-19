interface KeyboardShortcutProps {
  isDark: boolean;
}

export function KeyboardShortcut({ isDark }: KeyboardShortcutProps) {
  return (
    <div className="flex gap-[4px] items-center shrink-0">
      <div
        className="h-[16px] flex items-center justify-center px-[2px] rounded-[2px]"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{
            color: 'var(--search-text-default)',
          }}
        >
          ⌘
        </div>
      </div>
      <div
        className="size-[16px] flex items-center justify-center px-[2px] rounded-[2px]"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{
            color: 'var(--search-text-default)',
          }}
        >
          K
        </div>
      </div>
    </div>
  );
}
