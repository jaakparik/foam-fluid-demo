import { ChevronDown } from './foamicons/ChevronDown';

interface IconProps {
  isDark: boolean;
  size?: number;
}

export function ChevronIcon({ isDark, size = 20 }: IconProps) {
  return (
    <ChevronDown
      size={size}

      style={{ color: 'var(--fill-0, #8B94A2)' }}
    />
  );
}
