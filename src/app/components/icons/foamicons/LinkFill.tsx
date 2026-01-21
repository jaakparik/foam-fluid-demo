import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.88 8.13L12.7553 7.25171C13.8576 6.14562 13.856 4.35585 12.7518 3.25165C11.6463 2.14611 9.85384 2.14612 8.74831 3.25168L7.88001 4.12M8.12 11.88L7.24996 12.7501C6.14539 13.8547 4.35448 13.8547 3.24989 12.7501C2.1453 11.6455 2.14531 9.85464 3.24991 8.75007L4.12 7.87999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wvbucb'
    }
  ],
  [
    'path',
    {
      d: 'M9.84372 6.15613L5.84372 10.1561',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '50gc27'
    }
  ]
];

/**
 * @component @name LinkFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg4IDguMTNMMTIuNzU1MyA3LjI1MTcxQzEzLjg1NzYgNi4xNDU2MiAxMy44NTYgNC4zNTU4NSAxMi43NTE4IDMuMjUxNjVDMTEuNjQ2MyAyLjE0NjExIDkuODUzODQgMi4xNDYxMiA4Ljc0ODMxIDMuMjUxNjhMNy44ODAwMSA0LjEyTTguMTIgMTEuODhMNy4yNDk5NiAxMi43NTAxQzYuMTQ1MzkgMTMuODU0NyA0LjM1NDQ4IDEzLjg1NDcgMy4yNDk4OSAxMi43NTAxQzIuMTQ1MyAxMS42NDU1IDIuMTQ1MzEgOS44NTQ2NCAzLjI0OTkxIDguNzUwMDdMNC4xMiA3Ljg3OTk5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05Ljg0MzcyIDYuMTU2MTNMNS44NDM3MiAxMC4xNTYxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/link-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LinkFill = createFoamicon('LinkFill', __iconNode);
