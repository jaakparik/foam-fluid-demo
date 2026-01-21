import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '5.5',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '2hp0ms'
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
 * @component @name FrownDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjUuNSIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDEwLjI2MzlDOS40NjkyNCA5Ljc4ODg1IDguNzY4MzUgOS41IDggOS41QzcuMjMxNjUgOS41IDYuNTMwNzYgOS43ODg4NSA2IDEwLjI2MzkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iNi4yNSIgY3k9IjYuNzUiIHI9IjAuNzUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8Y2lyY2xlIGN4PSI5Ljc1IiBjeT0iNi43NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/frown-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FrownDuotone = createFoamicon('FrownDuotone', __iconNode);
