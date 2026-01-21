import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8.5 5.66667L10.8131 3.35355C11.0084 3.15829 11.325 3.15829 11.5202 3.35355L13.8333 5.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kxagk2'
    }
  ],
  [
    'path',
    {
      d: 'M11.1667 3.66675V12.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ipcbde'
    }
  ],
  [
    'path',
    {
      d: 'M7.83337 10.3333L5.52026 12.6464C5.325 12.8417 5.00842 12.8417 4.81315 12.6464L2.50004 10.3333',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'k5k5cz'
    }
  ],
  [
    'path',
    {
      d: 'M5.16663 12.3333L5.16663 3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'oxb72o'
    }
  ]
];

/**
 * @component @name ArrowDownUpFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNSA1LjY2NjY3TDEwLjgxMzEgMy4zNTM1NUMxMS4wMDg0IDMuMTU4MjkgMTEuMzI1IDMuMTU4MjkgMTEuNTIwMiAzLjM1MzU1TDEzLjgzMzMgNS42NjY2NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuMTY2NyAzLjY2Njc1VjEyLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcuODMzMzcgMTAuMzMzM0w1LjUyMDI2IDEyLjY0NjRDNS4zMjUgMTIuODQxNyA1LjAwODQyIDEyLjg0MTcgNC44MTMxNSAxMi42NDY0TDIuNTAwMDQgMTAuMzMzMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS4xNjY2MyAxMi4zMzMzTDUuMTY2NjMgMy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/arrow-down-up-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowDownUpFill = createFoamicon('ArrowDownUpFill', __iconNode);
