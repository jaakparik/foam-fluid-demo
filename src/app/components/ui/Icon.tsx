import { forwardRef, SVGProps } from 'react';

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  icon: React.ComponentType<any>;
  size?: number | string;
  strokeWidth?: number | string;
}

export const Icon = forwardRef<SVGSVGElement, IconWrapperProps>(
  ({ icon: IconComponent, size = 16, strokeWidth, className, ...props }, ref) => {
    const defaultStrokeWidth = 'var(--icon-stroke-width)';
    
    return (
      <IconComponent
        ref={ref}
        size={size}
        strokeWidth={strokeWidth || defaultStrokeWidth}
        className={className}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
