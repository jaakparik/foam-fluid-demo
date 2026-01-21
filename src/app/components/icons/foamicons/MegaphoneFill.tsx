import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 6.7726C2 6.31753 2.30725 5.91985 2.74758 5.80498L12.2476 3.32672C12.8812 3.16144 13.5 3.63955 13.5 4.29434V10.7057C13.5 11.3605 12.8812 11.8386 12.2476 11.6733L2.74758 9.19502C2.30725 9.08015 2 8.68247 2 8.2274V6.7726Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'l5nqbu'
    }
  ],
  [
    'path',
    {
      d: 'M9 11V11.25C9 12.2165 8.2165 13 7.25 13H7C5.89543 13 5 12.1046 5 11V10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'pntarh'
    }
  ]
];

/**
 * @component @name MegaphoneFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNi43NzI2QzIgNi4zMTc1MyAyLjMwNzI1IDUuOTE5ODUgMi43NDc1OCA1LjgwNDk4TDEyLjI0NzYgMy4zMjY3MkMxMi44ODEyIDMuMTYxNDQgMTMuNSAzLjYzOTU1IDEzLjUgNC4yOTQzNFYxMC43MDU3QzEzLjUgMTEuMzYwNSAxMi44ODEyIDExLjgzODYgMTIuMjQ3NiAxMS42NzMzTDIuNzQ3NTggOS4xOTUwMkMyLjMwNzI1IDkuMDgwMTUgMiA4LjY4MjQ3IDIgOC4yMjc0VjYuNzcyNloiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOSAxMVYxMS4yNUM5IDEyLjIxNjUgOC4yMTY1IDEzIDcuMjUgMTNIN0M1Ljg5NTQzIDEzIDUgMTIuMTA0NiA1IDExVjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/megaphone-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MegaphoneFill = createFoamicon('MegaphoneFill', __iconNode);
