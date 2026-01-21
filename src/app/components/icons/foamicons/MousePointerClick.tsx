import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.98653 14.2836V6.17577V5.36499L14.0674 10.4459L9.59935 10.3624L6.98653 14.2836Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      key: '76c6jy'
    }
  ],
  [
    'path',
    {
      d: 'M5.36495 4.14866L4.14878 2.93248M6.98652 3.33787V1.71631M8.60808 4.14866L9.82426 2.93248M4.55417 5.77022H2.9326',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '72aaju'
    }
  ]
];

/**
 * @component @name MousePointerClick
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOTg2NTMgMTQuMjgzNlY2LjE3NTc3VjUuMzY0OTlMMTQuMDY3NCAxMC40NDU5TDkuNTk5MzUgMTAuMzYyNEw2Ljk4NjUzIDE0LjI4MzZaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS4zNjQ5NSA0LjE0ODY2TDQuMTQ4NzggMi45MzI0OE02Ljk4NjUyIDMuMzM3ODdWMS43MTYzMU04LjYwODA4IDQuMTQ4NjZMOS44MjQyNiAyLjkzMjQ4TTQuNTU0MTcgNS43NzAyMkgyLjkzMjYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/mouse-pointer-click
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MousePointerClick = createFoamicon('MousePointerClick', __iconNode);
