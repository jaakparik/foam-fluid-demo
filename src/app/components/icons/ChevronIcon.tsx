import { ChevronDownDuotone } from 'foamicons';

interface IconProps {
  isDark: boolean;
  size?: number;
}

export function ChevronIcon({ isDark, size = 20 }: IconProps) {
  return (
    <ChevronDownDuotone
      size={size}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: 'var(--fill-0, #8B94A2)' }}
    />
  );
}
