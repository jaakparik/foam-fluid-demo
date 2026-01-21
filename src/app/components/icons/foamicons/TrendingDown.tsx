import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M14 8V11.15C14 11.2052 13.9552 11.25 13.9 11.25H10.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ffgcst'
    }
  ],
  [
    'path',
    {
      d: 'M2.25 4.5L6.17929 8.42929C6.21834 8.46834 6.28166 8.46834 6.32071 8.42929L8.67929 6.07071C8.71834 6.03166 8.78166 6.03166 8.82071 6.07071L13.75 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7ear09'
    }
  ]
];

/**
 * @component @name TrendingDown
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDhWMTEuMTVDMTQgMTEuMjA1MiAxMy45NTUyIDExLjI1IDEzLjkgMTEuMjVIMTAuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuMjUgNC41TDYuMTc5MjkgOC40MjkyOUM2LjIxODM0IDguNDY4MzQgNi4yODE2NiA4LjQ2ODM0IDYuMzIwNzEgOC40MjkyOUw4LjY3OTI5IDYuMDcwNzFDOC43MTgzNCA2LjAzMTY2IDguNzgxNjYgNi4wMzE2NiA4LjgyMDcxIDYuMDcwNzFMMTMuNzUgMTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/trending-down
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TrendingDown = createFoamicon('TrendingDown', __iconNode);
