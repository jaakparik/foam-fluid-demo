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
 * @component @name ArrowDownSCFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NzUgMTAuOTk5OEw1LjM1MzY0IDEzLjMxM0M1LjE1ODM3IDEzLjUwODIgNC44NDE3OSAxMy41MDgyIDQuNjQ2NTMgMTMuMzEzTDIuMzMzNDEgMTAuOTk5OCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSAxM0w1IDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgOS41SDEyQzEwLjg5NTQgOS41IDEwIDEwLjM5NTQgMTAgMTEuNUMxMCAxMi42MDQ2IDEwLjg5NTQgMTMuNSAxMiAxMy41SDEzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgMi41SDExQzEwLjQ0NzcgMi41IDEwIDIuOTQ3NzIgMTAgMy41QzEwIDQuMDUyMjggMTAuNDQ3NyA0LjUgMTEgNC41SDEyLjVDMTMuMDUyMyA0LjUgMTMuNSA0Ljk0NzcyIDEzLjUgNS41QzEzLjUgNi4wNTIyOCAxMy4wNTIzIDYuNSAxMi41IDYuNUgxMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/arrow-down-scfill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowDownSCFill = createFoamicon('ArrowDownSCFill', __iconNode);
