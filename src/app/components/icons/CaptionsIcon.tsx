import { MessageSquareDuotone } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function CaptionsIcon({ isDark, isActive }: IconProps) {
  return (
    <MessageSquareDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
