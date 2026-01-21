import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.5 4H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3uprjr'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 8H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'w6s09a'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 12H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7n8er6'
    }
  ],
  [
    'path',
    {
      d: 'M2.66667 1.92004H3.33334V4.75342',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ydc63s'
    }
  ],
  [
    'path',
    {
      d: 'M2.66667 4.75342H4.00001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jicyr1'
    }
  ],
  [
    'path',
    {
      d: 'M4.33333 9.33342H2.26666C2.26666 8.66675 4 8.30343 4 7.25343C4.00002 7.05241 3.93947 6.85606 3.82623 6.68997C3.713 6.52389 3.55233 6.39578 3.36521 6.32237C3.17808 6.24896 2.97317 6.23365 2.7772 6.27843C2.58124 6.32321 2.56418 6.38759 2.42752 6.535',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'y5t1e2'
    }
  ],
  [
    'path',
    {
      d: 'M2.77721 12.2508C3 12.2508 4 12.2878 4 11.5122C4.00003 11.3637 3.93947 11.2187 3.82623 11.096C3.713 10.9733 3.55234 10.8787 3.36521 10.8245C3.17808 10.7702 2.97317 10.7589 2.77721 10.792C2.58125 10.8251 2.55769 10.8798 2.42103 10.9887',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'zdynle'
    }
  ],
  [
    'path',
    {
      d: 'M2.7772 12.2541C3 12.2541 4 12.2104 4 13.1289C4.00002 13.3047 3.93947 13.4765 3.82623 13.6218C3.713 13.7671 3.55233 13.8791 3.36521 13.9434C3.17808 14.0076 2.97317 14.021 2.7772 13.9818C2.58124 13.9426 2.40333 13.8527 2.26666 13.7237',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yvibw3'
    }
  ]
];

/**
 * @component @name ListOrderedFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNSA0SDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjUgOEgxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi41IDEySDEzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjY2NjY3IDEuOTIwMDRIMy4zMzMzNFY0Ljc1MzQyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjY2NjY3IDQuNzUzNDJINC4wMDAwMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC4zMzMzMyA5LjMzMzQySDIuMjY2NjZDMi4yNjY2NiA4LjY2Njc1IDQgOC4zMDM0MyA0IDcuMjUzNDNDNC4wMDAwMiA3LjA1MjQxIDMuOTM5NDcgNi44NTYwNiAzLjgyNjIzIDYuNjg5OTdDMy43MTMgNi41MjM4OSAzLjU1MjMzIDYuMzk1NzggMy4zNjUyMSA2LjMyMjM3QzMuMTc4MDggNi4yNDg5NiAyLjk3MzE3IDYuMjMzNjUgMi43NzcyIDYuMjc4NDNDMi41ODEyNCA2LjMyMzIxIDIuNTY0MTggNi4zODc1OSAyLjQyNzUyIDYuNTM1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjc3NzIxIDEyLjI1MDhDMyAxMi4yNTA4IDQgMTIuMjg3OCA0IDExLjUxMjJDNC4wMDAwMyAxMS4zNjM3IDMuOTM5NDcgMTEuMjE4NyAzLjgyNjIzIDExLjA5NkMzLjcxMyAxMC45NzMzIDMuNTUyMzQgMTAuODc4NyAzLjM2NTIxIDEwLjgyNDVDMy4xNzgwOCAxMC43NzAyIDIuOTczMTcgMTAuNzU4OSAyLjc3NzIxIDEwLjc5MkMyLjU4MTI1IDEwLjgyNTEgMi41NTc2OSAxMC44Nzk4IDIuNDIxMDMgMTAuOTg4NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi43NzcyIDEyLjI1NDFDMyAxMi4yNTQxIDQgMTIuMjEwNCA0IDEzLjEyODlDNC4wMDAwMiAxMy4zMDQ3IDMuOTM5NDcgMTMuNDc2NSAzLjgyNjIzIDEzLjYyMThDMy43MTMgMTMuNzY3MSAzLjU1MjMzIDEzLjg3OTEgMy4zNjUyMSAxMy45NDM0QzMuMTc4MDggMTQuMDA3NiAyLjk3MzE3IDE0LjAyMSAyLjc3NzIgMTMuOTgxOEMyLjU4MTI0IDEzLjk0MjYgMi40MDMzMyAxMy44NTI3IDIuMjY2NjYgMTMuNzIzNyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/list-ordered-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ListOrderedFill = createFoamicon('ListOrderedFill', __iconNode);
