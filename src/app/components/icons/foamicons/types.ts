import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

/**
 * Represents the structure of an SVG icon's child elements.
 * Each tuple contains the element tag name and its attributes.
 */
export type IconNode = [elementName: string, attrs: Record<string, string | Record<string, string>>][];

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon size (width and height)
   * @default 16
   */
  size?: number | string;
  /**
   * Stroke width
   * @default 1
   */
  strokeWidth?: number | string;
  /**
   * When true, keeps the stroke width constant regardless of icon size.
   * Uses the formula: strokeWidth * (defaultSize / size)
   * @default false
   */
  absoluteStrokeWidth?: boolean;
  /**
   * Icon color (stroke color)
   * @default 'currentColor'
   */
  color?: string;
}

/**
 * Type alias for a Foamicon component
 */
export type FoamIcon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
