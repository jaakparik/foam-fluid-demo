import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.33341 4.66667L4.64653 2.35355C4.84179 2.15829 5.15837 2.15829 5.35363 2.35355L7.66675 4.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rf2mfh'
    }
  ],
  [
    'path',
    {
      d: 'M5.00016 2.6665L5.00016 13.6665',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'g06fc9'
    }
  ],
  [
    'path',
    {
      d: 'M10 2.5L11.75 5M11.75 5L13.5 2.5M11.75 5V7M10 9.5H11.75M13.5 9.5H11.75M11.75 9.5V13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2fttn4'
    }
  ]
];

/**
 * @component @name ArrowUpYTDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzMzNDEgNC42NjY2N0w0LjY0NjUzIDIuMzUzNTVDNC44NDE3OSAyLjE1ODI5IDUuMTU4MzcgMi4xNTgyOSA1LjM1MzYzIDIuMzUzNTVMNy42NjY3NSA0LjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjAwMDE2IDIuNjY2NUw1LjAwMDE2IDEzLjY2NjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDIuNUwxMS43NSA1TTExLjc1IDVMMTMuNSAyLjVNMTEuNzUgNVY3TTEwIDkuNUgxMS43NU0xMy41IDkuNUgxMS43NU0xMS43NSA5LjVWMTMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/arrow-up-ytduotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowUpYTDuotone = createFoamicon('ArrowUpYTDuotone', __iconNode);
