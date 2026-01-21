import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.3251 2.29834L3.06451 12.5588',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'c4a36j'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 5.5V4.2C4.5 4.08954 4.58954 4 4.7 4H8.25M12 5.5V4.2C12 4.08954 11.9105 4 11.8 4H8.25M8.25 4V12M8.25 12H9.5M8.25 12H6.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'to2n6v'
    }
  ]
];

/**
 * @component @name RemoveFormatting
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMyNTEgMi4yOTgzNEwzLjA2NDUxIDEyLjU1ODgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuNSA1LjVWNC4yQzQuNSA0LjA4OTU0IDQuNTg5NTQgNCA0LjcgNEg4LjI1TTEyIDUuNVY0LjJDMTIgNC4wODk1NCAxMS45MTA1IDQgMTEuOCA0SDguMjVNOC4yNSA0VjEyTTguMjUgMTJIOS41TTguMjUgMTJINi41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/remove-formatting
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const RemoveFormatting = createFoamicon('RemoveFormatting', __iconNode);
