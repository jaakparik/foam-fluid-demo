import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.33341 4.66667L4.64653 2.35355C4.84179 2.15829 5.15837 2.15829 5.35364 2.35355L7.66675 4.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bzdlm4'
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
      d: 'M13.5 9.5H12C10.8954 9.5 10 10.3954 10 11.5C10 12.6046 10.8954 13.5 12 13.5H13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ts8hl5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 2.5H11C10.4477 2.5 10 2.94772 10 3.5C10 4.05228 10.4477 4.5 11 4.5H12.5C13.0523 4.5 13.5 4.94772 13.5 5.5C13.5 6.05228 13.0523 6.5 12.5 6.5H10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rkgdvu'
    }
  ]
];

/**
 * @component @name ArrowUpSC
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzMzNDEgNC42NjY2N0w0LjY0NjUzIDIuMzUzNTVDNC44NDE3OSAyLjE1ODI5IDUuMTU4MzcgMi4xNTgyOSA1LjM1MzY0IDIuMzUzNTVMNy42NjY3NSA0LjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjAwMDE2IDIuNjY2NUw1LjAwMDE2IDEzLjY2NjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgOS41SDEyQzEwLjg5NTQgOS41IDEwIDEwLjM5NTQgMTAgMTEuNUMxMCAxMi42MDQ2IDEwLjg5NTQgMTMuNSAxMiAxMy41SDEzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgMi41SDExQzEwLjQ0NzcgMi41IDEwIDIuOTQ3NzIgMTAgMy41QzEwIDQuMDUyMjggMTAuNDQ3NyA0LjUgMTEgNC41SDEyLjVDMTMuMDUyMyA0LjUgMTMuNSA0Ljk0NzcyIDEzLjUgNS41QzEzLjUgNi4wNTIyOCAxMy4wNTIzIDYuNSAxMi41IDYuNUgxMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/arrow-up-sc
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowUpSC = createFoamicon('ArrowUpSC', __iconNode);
