import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5L8 13.5Z',
      fill: 'currentColor',
      key: 'prhwad'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '5.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'qiqtx6'
    }
  ]
];

/**
 * @component @name EclipseFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTMuNUM0Ljk2MjQzIDEzLjUgMi41IDExLjAzNzYgMi41IDhDMi41IDQuOTYyNDMgNC45NjI0MyAyLjUgOCAyLjVMOCAxMy41WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSI1LjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/eclipse-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EclipseFill = createFoamicon('EclipseFill', __iconNode);
