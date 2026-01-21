import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.66666 10.9998L3.35355 7.68664C3.15829 7.49138 3.15829 7.1748 3.35355 6.97954L6.66666 3.66642',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'co4cgq'
    }
  ],
  [
    'path',
    {
      d: 'M3.66667 7.33325L8.99653 7.33325C11.1409 7.33325 12.9038 9.02422 12.9931 11.1667L13 11.3333',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hgtp0y'
    }
  ]
];

/**
 * @component @name Reply
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNjY2NjYgMTAuOTk5OEwzLjM1MzU1IDcuNjg2NjRDMy4xNTgyOSA3LjQ5MTM4IDMuMTU4MjkgNy4xNzQ4IDMuMzUzNTUgNi45Nzk1NEw2LjY2NjY2IDMuNjY2NDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMuNjY2NjcgNy4zMzMyNUw4Ljk5NjUzIDcuMzMzMjVDMTEuMTQwOSA3LjMzMzI1IDEyLjkwMzggOS4wMjQyMiAxMi45OTMxIDExLjE2NjdMMTMgMTEuMzMzMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/reply
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Reply = createFoamicon('Reply', __iconNode);
