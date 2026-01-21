import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '5.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'qiqtx5'
    }
  ],
  [
    'path',
    {
      d: 'M10 9.50002C9.46924 9.97506 8.76835 10.2639 8 10.2639C7.23165 10.2639 6.53076 9.97506 6 9.50002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nis5k3'
    }
  ],
  [
    'circle',
    {
      cx: '6.25',
      cy: '6.75',
      r: '0.75',
      fill: 'currentColor',
      key: 'jnl0ux'
    }
  ],
  [
    'circle',
    {
      cx: '9.75',
      cy: '6.75',
      r: '0.75',
      fill: 'currentColor',
      key: 'lhgkls'
    }
  ]
];

/**
 * @component @name Smile
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjUuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgOS41MDAwMkM5LjQ2OTI0IDkuOTc1MDYgOC43NjgzNSAxMC4yNjM5IDggMTAuMjYzOUM3LjIzMTY1IDEwLjI2MzkgNi41MzA3NiA5Ljk3NTA2IDYgOS41MDAwMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI2LjI1IiBjeT0iNi43NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxjaXJjbGUgY3g9IjkuNzUiIGN5PSI2Ljc1IiByPSIwLjc1IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/smile
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Smile = createFoamicon('Smile', __iconNode);
