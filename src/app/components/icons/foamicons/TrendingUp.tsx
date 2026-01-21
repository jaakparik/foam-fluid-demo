import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M14 7.75V4.6C14 4.54477 13.9552 4.5 13.9 4.5H10.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1sqbla'
    }
  ],
  [
    'path',
    {
      d: 'M2.25 11.25L6.17929 7.32071C6.21834 7.28166 6.28166 7.28166 6.32071 7.32071L8.67929 9.67929C8.71834 9.71834 8.78166 9.71834 8.82071 9.67929L13.75 4.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'l3frjn'
    }
  ]
];

/**
 * @component @name TrendingUp
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDcuNzVWNC42QzE0IDQuNTQ0NzcgMTMuOTU1MiA0LjUgMTMuOSA0LjVIMTAuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuMjUgMTEuMjVMNi4xNzkyOSA3LjMyMDcxQzYuMjE4MzQgNy4yODE2NiA2LjI4MTY2IDcuMjgxNjYgNi4zMjA3MSA3LjMyMDcxTDguNjc5MjkgOS42NzkyOUM4LjcxODM0IDkuNzE4MzQgOC43ODE2NiA5LjcxODM0IDguODIwNzEgOS42NzkyOUwxMy43NSA0Ljc1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/trending-up
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TrendingUp = createFoamicon('TrendingUp', __iconNode);
