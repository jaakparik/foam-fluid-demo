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
      d: 'M10 10.2639C9.46924 9.78885 8.76835 9.5 8 9.5C7.23165 9.5 6.53076 9.78885 6 10.2639',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ij2xfh'
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
 * @component @name FrownFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjUuNSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxMC4yNjM5QzkuNDY5MjQgOS43ODg4NSA4Ljc2ODM1IDkuNSA4IDkuNUM3LjIzMTY1IDkuNSA2LjUzMDc2IDkuNzg4ODUgNiAxMC4yNjM5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iNi4yNSIgY3k9IjYuNzUiIHI9IjAuNzUiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjkuNzUiIGN5PSI2Ljc1IiByPSIwLjc1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/frown-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FrownFill = createFoamicon('FrownFill', __iconNode);
