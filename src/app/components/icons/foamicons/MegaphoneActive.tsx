import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.44745 12.4475C2.12567 12.1257 2.06173 11.6272 2.29186 11.2346L6.63315 3.8289C6.96429 3.26401 7.73996 3.1645 8.20296 3.62751L12.0759 7.50048C12.5389 7.96348 12.4394 8.73914 11.8745 9.07028L4.46881 13.4116C4.07623 13.6417 3.57776 13.5778 3.25598 13.256L2.44745 12.4475Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3godfr'
    }
  ],
  [
    'path',
    {
      d: 'M9.53553 10.707L9.71231 10.8838C10.3957 11.5672 10.3957 12.6753 9.71231 13.3587L9.53553 13.5355C8.75449 14.3165 7.48816 14.3165 6.70711 13.5355L6 12.8284',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2ncx9p'
    }
  ],
  [
    'path',
    {
      d: 'M11.957 3.70715L12.957 2.70715',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'k0vz2g'
    }
  ],
  [
    'path',
    {
      d: 'M12.7499 5.20711L14.1641 5.20711',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bhrho6'
    }
  ],
  [
    'path',
    {
      d: 'M10.4571 2.91426L10.4571 1.50005',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '12nylv'
    }
  ]
];

/**
 * @component @name MegaphoneActive
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNDQ3NDUgMTIuNDQ3NUMyLjEyNTY3IDEyLjEyNTcgMi4wNjE3MyAxMS42MjcyIDIuMjkxODYgMTEuMjM0Nkw2LjYzMzE1IDMuODI4OUM2Ljk2NDI5IDMuMjY0MDEgNy43Mzk5NiAzLjE2NDUgOC4yMDI5NiAzLjYyNzUxTDEyLjA3NTkgNy41MDA0OEMxMi41Mzg5IDcuOTYzNDggMTIuNDM5NCA4LjczOTE0IDExLjg3NDUgOS4wNzAyOEw0LjQ2ODgxIDEzLjQxMTZDNC4wNzYyMyAxMy42NDE3IDMuNTc3NzYgMTMuNTc3OCAzLjI1NTk4IDEzLjI1NkwyLjQ0NzQ1IDEyLjQ0NzVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjUzNTUzIDEwLjcwN0w5LjcxMjMxIDEwLjg4MzhDMTAuMzk1NyAxMS41NjcyIDEwLjM5NTcgMTIuNjc1MyA5LjcxMjMxIDEzLjM1ODdMOS41MzU1MyAxMy41MzU1QzguNzU0NDkgMTQuMzE2NSA3LjQ4ODE2IDE0LjMxNjUgNi43MDcxMSAxMy41MzU1TDYgMTIuODI4NCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuOTU3IDMuNzA3MTVMMTIuOTU3IDIuNzA3MTUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyLjc0OTkgNS4yMDcxMUwxNC4xNjQxIDUuMjA3MTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjQ1NzEgMi45MTQyNkwxMC40NTcxIDEuNTAwMDUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/megaphone-active
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MegaphoneActive = createFoamicon('MegaphoneActive', __iconNode);
