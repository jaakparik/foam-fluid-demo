import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.66675 10.9998L5.35364 13.313C5.15837 13.5082 4.84179 13.5082 4.64653 13.313L2.33341 10.9998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vovna6'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5 2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9q2irf'
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
 * @component @name ArrowDownYTFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NzUgMTAuOTk5OEw1LjM1MzY0IDEzLjMxM0M1LjE1ODM3IDEzLjUwODIgNC44NDE3OSAxMy41MDgyIDQuNjQ2NTMgMTMuMzEzTDIuMzMzNDEgMTAuOTk5OCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSAxM0w1IDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDIuNUwxMS43NSA1TTExLjc1IDVMMTMuNSAyLjVNMTEuNzUgNVY3TTEwIDkuNUgxMS43NU0xMy41IDkuNUgxMS43NU0xMS43NSA5LjVWMTMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/arrow-down-ytfill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowDownYTFill = createFoamicon('ArrowDownYTFill', __iconNode);
