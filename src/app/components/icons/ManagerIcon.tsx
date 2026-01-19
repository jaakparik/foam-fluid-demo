import { User } from 'foamicons';

interface ManagerIconProps {
  className?: string;
  isDark?: boolean;
}

export function ManagerIcon({ className = "", isDark = false }: ManagerIconProps) {
  const strokeColor = isDark ? "#b7bdc7" : "#54657d";
  
  return (
    <User
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: strokeColor }}
    />
  );
}
