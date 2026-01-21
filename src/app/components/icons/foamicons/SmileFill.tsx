import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '5.5',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4e5q8w'
    }
  ],
  [
    'path',
    {
      d: 'M10 9.50002C9.46924 9.97506 8.76835 10.2639 8 10.2639C7.23165 10.2639 6.53076 9.97506 6 9.50002',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rzumlu'
    }
  ],
  [
    'circle',
    {
      cx: '6.25',
      cy: '6.75',
      r: '0.75',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: 'b3q5du'
    }
  ],
  [
    'circle',
    {
      cx: '9.75',
      cy: '6.75',
      r: '0.75',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: 'qvuxkr'
    }
  ]
];

/**
 * @component @name SmileFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjUuNSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCA5LjUwMDAyQzkuNDY5MjQgOS45NzUwNiA4Ljc2ODM1IDEwLjI2MzkgOCAxMC4yNjM5QzcuMjMxNjUgMTAuMjYzOSA2LjUzMDc2IDkuOTc1MDYgNiA5LjUwMDAyIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iNi4yNSIgY3k9IjYuNzUiIHI9IjAuNzUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjkuNzUiIGN5PSI2Ljc1IiByPSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/smile-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SmileFill = createFoamicon('SmileFill', __iconNode);
