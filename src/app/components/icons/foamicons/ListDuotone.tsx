import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M5.75 4H13.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'scuiwg'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 8H13.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jhb2cz'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 12H13.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'y6bojh'
    }
  ],
  [
    'circle',
    {
      cx: '3',
      cy: '4',
      r: '0.75',
      fill: 'currentColor',
      key: 'x3630w'
    }
  ],
  [
    'circle',
    {
      cx: '3',
      cy: '8',
      r: '0.75',
      fill: 'currentColor',
      key: 'yjeer'
    }
  ],
  [
    'circle',
    {
      cx: '3',
      cy: '12',
      r: '0.75',
      fill: 'currentColor',
      key: 'baspxl'
    }
  ]
];

/**
 * @component @name ListDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgNEgxMy4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS43NSA4SDEzLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01Ljc1IDEySDEzLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjMiIGN5PSI0IiByPSIwLjc1IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPGNpcmNsZSBjeD0iMyIgY3k9IjgiIHI9IjAuNzUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMTIiIHI9IjAuNzUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/list-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ListDuotone = createFoamicon('ListDuotone', __iconNode);
