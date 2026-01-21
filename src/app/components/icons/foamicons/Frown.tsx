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
      d: 'M10 10.2639C9.46924 9.78885 8.76835 9.5 8 9.5C7.23165 9.5 6.53076 9.78885 6 10.2639',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'h2tpam'
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
 * @component @name Frown
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjUuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMTAuMjYzOUM5LjQ2OTI0IDkuNzg4ODUgOC43NjgzNSA5LjUgOCA5LjVDNy4yMzE2NSA5LjUgNi41MzA3NiA5Ljc4ODg1IDYgMTAuMjYzOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI2LjI1IiBjeT0iNi43NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxjaXJjbGUgY3g9IjkuNzUiIGN5PSI2Ljc1IiByPSIwLjc1IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/frown
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Frown = createFoamicon('Frown', __iconNode);
