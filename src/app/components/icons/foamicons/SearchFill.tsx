import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12 7C12 8.38071 11.4404 9.63071 10.5355 10.5355C9.63071 11.4404 8.38071 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z',
      fill: 'currentColor',
      key: 'vhjz1q'
    }
  ],
  [
    'path',
    {
      d: 'M14 14L10.5355 10.5355M10.5355 10.5355C11.4404 9.63071 12 8.38071 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.38071 12 9.63071 11.4404 10.5355 10.5355Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gei9it'
    }
  ]
];

/**
 * @component @name SearchFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDdDMTIgOC4zODA3MSAxMS40NDA0IDkuNjMwNzEgMTAuNTM1NSAxMC41MzU1QzkuNjMwNzEgMTEuNDQwNCA4LjM4MDcxIDEyIDcgMTJDNC4yMzg1OCAxMiAyIDkuNzYxNDIgMiA3QzIgNC4yMzg1OCA0LjIzODU4IDIgNyAyQzkuNzYxNDIgMiAxMiA0LjIzODU4IDEyIDdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTE0IDE0TDEwLjUzNTUgMTAuNTM1NU0xMC41MzU1IDEwLjUzNTVDMTEuNDQwNCA5LjYzMDcxIDEyIDguMzgwNzEgMTIgN0MxMiA0LjIzODU4IDkuNzYxNDIgMiA3IDJDNC4yMzg1OCAyIDIgNC4yMzg1OCAyIDdDMiA5Ljc2MTQyIDQuMjM4NTggMTIgNyAxMkM4LjM4MDcxIDEyIDkuNjMwNzEgMTEuNDQwNCAxMC41MzU1IDEwLjUzNTVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/search-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SearchFill = createFoamicon('SearchFill', __iconNode);
