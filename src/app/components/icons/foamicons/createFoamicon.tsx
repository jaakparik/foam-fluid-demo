import { forwardRef, createElement } from 'react';
import { Icon } from './Icon';
import type { IconProps, IconNode, FoamIcon } from './types';

/**
 * Factory function to create a Foamicon component from an icon node definition.
 * @param name - The display name of the icon (PascalCase)
 * @param iconNode - The SVG element definitions for the icon
 * @returns A forwardRef React component for the icon
 */
export const createFoamicon = (name: string, iconNode: IconNode): FoamIcon => {
  const Component = forwardRef<SVGSVGElement, IconProps>((props, ref) =>
    createElement(Icon, {
      ref,
      iconNode,
      iconName: toKebabCase(name),
      ...props,
    })
  );

  Component.displayName = name;

  return Component;
};

/**
 * Converts a PascalCase string to kebab-case.
 */
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
