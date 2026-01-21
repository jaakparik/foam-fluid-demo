import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.3251 2.29834L3.06451 12.5588',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'c4a36j'
    }
  ],
  [
    'path',
    {
      d: 'M4.10645 4.87109V3.57109C4.10645 3.46064 4.19599 3.37109 4.30645 3.37109H7.85645M11.6064 4.87109V3.57109C11.6064 3.46064 11.5169 3.37109 11.4064 3.37109H7.85645M7.85645 3.37109V11.3711M7.85645 11.3711H9.10645M7.85645 11.3711H6.10645',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8wwci6'
    }
  ]
];

/**
 * @component @name RemoveFormattingFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMyNTEgMi4yOTgzNEwzLjA2NDUxIDEyLjU1ODgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuMTA2NDUgNC44NzEwOVYzLjU3MTA5QzQuMTA2NDUgMy40NjA2NCA0LjE5NTk5IDMuMzcxMDkgNC4zMDY0NSAzLjM3MTA5SDcuODU2NDVNMTEuNjA2NCA0Ljg3MTA5VjMuNTcxMDlDMTEuNjA2NCAzLjQ2MDY0IDExLjUxNjkgMy4zNzEwOSAxMS40MDY0IDMuMzcxMDlINy44NTY0NU03Ljg1NjQ1IDMuMzcxMDlWMTEuMzcxMU03Ljg1NjQ1IDExLjM3MTFIOS4xMDY0NU03Ljg1NjQ1IDExLjM3MTFINi4xMDY0NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/remove-formatting-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const RemoveFormattingFill = createFoamicon('RemoveFormattingFill', __iconNode);
