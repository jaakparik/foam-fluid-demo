import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.0596 3.31191C9.40844 3.11459 8.7168 3 8 3C4.13401 3 1 6.33333 1 8C1 8.7316 1.60388 9.78435 2.60847 10.7353M11.9704 4.17702C13.8006 5.29999 15 6.96893 15 8C15 9.66667 11.866 13 8 13C6.66349 13 5.41446 12.6016 4.35216 12.0114M4.35216 12.0114C4.31469 11.9906 4.27747 11.9696 4.24047 11.9483L4.35216 12.0114Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6o5w9n'
    }
  ],
  [
    'path',
    {
      d: 'M6.08844 7.41004C6.06944 7.47169 6.05333 7.53461 6.04029 7.59865L6.08844 7.41004ZM6.08844 7.41004C6.29472 6.74093 6.84265 6.22165 7.52854 6.05591M9.50083 6.67805C9.81152 7.0305 10 7.49325 10 8.00002C10 9.10459 9.10457 10 8 10C7.49772 10 7.03868 9.81486 6.68742 9.50908',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f5k7a1'
    }
  ],
  [
    'path',
    {
      d: 'M13.6667 2.5L2.5 13.67',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'b7wzx0'
    }
  ]
];

/**
 * @component @name EyeOff
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjA1OTYgMy4zMTE5MUM5LjQwODQ0IDMuMTE0NTkgOC43MTY4IDMgOCAzQzQuMTM0MDEgMyAxIDYuMzMzMzMgMSA4QzEgOC43MzE2IDEuNjAzODggOS43ODQzNSAyLjYwODQ3IDEwLjczNTNNMTEuOTcwNCA0LjE3NzAyQzEzLjgwMDYgNS4yOTk5OSAxNSA2Ljk2ODkzIDE1IDhDMTUgOS42NjY2NyAxMS44NjYgMTMgOCAxM0M2LjY2MzQ5IDEzIDUuNDE0NDYgMTIuNjAxNiA0LjM1MjE2IDEyLjAxMTRNNC4zNTIxNiAxMi4wMTE0QzQuMzE0NjkgMTEuOTkwNiA0LjI3NzQ3IDExLjk2OTYgNC4yNDA0NyAxMS45NDgzTDQuMzUyMTYgMTIuMDExNFoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMDg4NDQgNy40MTAwNEM2LjA2OTQ0IDcuNDcxNjkgNi4wNTMzMyA3LjUzNDYxIDYuMDQwMjkgNy41OTg2NUw2LjA4ODQ0IDcuNDEwMDRaTTYuMDg4NDQgNy40MTAwNEM2LjI5NDcyIDYuNzQwOTMgNi44NDI2NSA2LjIyMTY1IDcuNTI4NTQgNi4wNTU5MU05LjUwMDgzIDYuNjc4MDVDOS44MTE1MiA3LjAzMDUgMTAgNy40OTMyNSAxMCA4LjAwMDAyQzEwIDkuMTA0NTkgOS4xMDQ1NyAxMCA4IDEwQzcuNDk3NzIgMTAgNy4wMzg2OCA5LjgxNDg2IDYuNjg3NDIgOS41MDkwOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNjY2NyAyLjVMMi41IDEzLjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/eye-off
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EyeOff = createFoamicon('EyeOff', __iconNode);
