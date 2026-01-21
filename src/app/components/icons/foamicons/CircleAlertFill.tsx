import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd9sdlm'
    }
  ],
  [
    'path',
    {
      d: 'M8 8.43986L8 4.75003',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'n1ai03'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '10.8623',
      r: '0.625',
      transform: 'rotate(-180 8 10.8623)',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: 'witnue'
    }
  ]
];

/**
 * @component @name CircleAlertFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCA4LjQzOTg2TDggNC43NTAwMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjgiIGN5PSIxMC44NjIzIiByPSIwLjYyNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA4IDEwLjg2MjMpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/circle-alert-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleAlertFill = createFoamicon('CircleAlertFill', __iconNode);
