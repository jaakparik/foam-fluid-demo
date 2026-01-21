import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M5.40012 14.5H10.5999C11.3883 14.5 12.0421 13.8897 12.0963 13.1032L12.7221 4.0297C12.7232 4.01297 12.7371 4 12.7539 4H3.28125C3.27834 4 3.27603 4.00247 3.27623 4.00537L3.90367 13.1032C3.95791 13.8897 4.61174 14.5 5.40012 14.5Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '4wxh41'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 4H3.28125M13.5 4H12.7539M3.28125 4H12.7539M3.28125 4C3.27834 4 3.27603 4.00247 3.27623 4.00537L3.90367 13.1032C3.95791 13.8897 4.61174 14.5 5.40012 14.5H10.5999C11.3883 14.5 12.0421 13.8897 12.0963 13.1032L12.7221 4.0297C12.7232 4.01297 12.7371 4 12.7539 4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd9hg1e'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 4V3.5C10.5 2.39543 9.60457 1.5 8.5 1.5H7.5C6.39543 1.5 5.5 2.39543 5.5 3.5V4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'lygiua'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12L10 6M6.5 12L6 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vfwkc4'
    }
  ]
];

/**
 * @component @name TrashDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDAwMTIgMTQuNUgxMC41OTk5QzExLjM4ODMgMTQuNSAxMi4wNDIxIDEzLjg4OTcgMTIuMDk2MyAxMy4xMDMyTDEyLjcyMjEgNC4wMjk3QzEyLjcyMzIgNC4wMTI5NyAxMi43MzcxIDQgMTIuNzUzOSA0SDMuMjgxMjVDMy4yNzgzNCA0IDMuMjc2MDMgNC4wMDI0NyAzLjI3NjIzIDQuMDA1MzdMMy45MDM2NyAxMy4xMDMyQzMuOTU3OTEgMTMuODg5NyA0LjYxMTc0IDE0LjUgNS40MDAxMiAxNC41WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPHBhdGggZD0iTTIuNSA0SDMuMjgxMjVNMTMuNSA0SDEyLjc1MzlNMy4yODEyNSA0SDEyLjc1MzlNMy4yODEyNSA0QzMuMjc4MzQgNCAzLjI3NjAzIDQuMDAyNDcgMy4yNzYyMyA0LjAwNTM3TDMuOTAzNjcgMTMuMTAzMkMzLjk1NzkxIDEzLjg4OTcgNC42MTE3NCAxNC41IDUuNDAwMTIgMTQuNUgxMC41OTk5QzExLjM4ODMgMTQuNSAxMi4wNDIxIDEzLjg4OTcgMTIuMDk2MyAxMy4xMDMyTDEyLjcyMjEgNC4wMjk3QzEyLjcyMzIgNC4wMTI5NyAxMi43MzcxIDQgMTIuNzUzOSA0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41IDRWMy41QzEwLjUgMi4zOTU0MyA5LjYwNDU3IDEuNSA4LjUgMS41SDcuNUM2LjM5NTQzIDEuNSA1LjUgMi4zOTU0MyA1LjUgMy41VjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuNSAxMkwxMCA2TTYuNSAxMkw2IDYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/trash-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TrashDuotone = createFoamicon('TrashDuotone', __iconNode);
