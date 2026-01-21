import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '7',
      cy: '5.82275',
      r: '1.32275',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4qsxsr'
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
  ],
  [
    'path',
    {
      d: 'M9.48454 11.3205C9.34554 10.0714 8.2862 9.1001 7 9.1001C5.7138 9.1001 4.65446 10.0714 4.51546 11.3205',
      stroke: 'currentColor',
      key: 'qpdukg'
    }
  ]
];

/**
 * @component @name SearchUser
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjUuODIyNzUiIHI9IjEuMzIyNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDE0TDEwLjUzNTUgMTAuNTM1NU0xMC41MzU1IDEwLjUzNTVDMTEuNDQwNCA5LjYzMDcxIDEyIDguMzgwNzEgMTIgN0MxMiA0LjIzODU4IDkuNzYxNDIgMiA3IDJDNC4yMzg1OCAyIDIgNC4yMzg1OCAyIDdDMiA5Ljc2MTQyIDQuMjM4NTggMTIgNyAxMkM4LjM4MDcxIDEyIDkuNjMwNzEgMTEuNDQwNCAxMC41MzU1IDEwLjUzNTVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjQ4NDU0IDExLjMyMDVDOS4zNDU1NCAxMC4wNzE0IDguMjg2MiA5LjEwMDEgNyA5LjEwMDFDNS43MTM4IDkuMTAwMSA0LjY1NDQ2IDEwLjA3MTQgNC41MTU0NiAxMS4zMjA1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/search-user
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SearchUser = createFoamicon('SearchUser', __iconNode);
