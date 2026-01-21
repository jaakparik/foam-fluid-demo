import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.98653 14.2836V6.17577V5.36499L14.0674 10.4459L9.59935 10.3624L6.98653 14.2836Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'k216kp'
    }
  ],
  [
    'path',
    {
      d: 'M5.36495 4.14878L4.14878 2.93261M6.98652 3.338V1.71643M8.60808 4.14878L9.82426 2.93261M4.55417 5.77035H2.9326',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm23r4b'
    }
  ]
];

/**
 * @component @name MousePointerClickDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOTg2NTMgMTQuMjgzNlY2LjE3NTc3VjUuMzY0OTlMMTQuMDY3NCAxMC40NDU5TDkuNTk5MzUgMTAuMzYyNEw2Ljk4NjUzIDE0LjI4MzZaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMzY0OTUgNC4xNDg3OEw0LjE0ODc4IDIuOTMyNjFNNi45ODY1MiAzLjMzOFYxLjcxNjQzTTguNjA4MDggNC4xNDg3OEw5LjgyNDI2IDIuOTMyNjFNNC41NTQxNyA1Ljc3MDM1SDIuOTMyNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/mouse-pointer-click-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MousePointerClickDuotone = createFoamicon('MousePointerClickDuotone', __iconNode);
