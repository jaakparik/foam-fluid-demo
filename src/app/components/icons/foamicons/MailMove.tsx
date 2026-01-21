import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.5L6.73353 7.96379C7.47026 8.56657 8.52974 8.56657 9.26648 7.96379L13.5 4.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nwwoju'
    }
  ],
  [
    'path',
    {
      d: 'M2 12.5455C2 12.5455 5 13 8 13C9.78381 13 11.5676 12.8393 12.7208 12.709C13.4577 12.6257 14 11.9973 14 11.2556V4.74439C14 4.00274 13.4577 3.37428 12.7208 3.29101C11.5676 3.16071 9.78381 3 8 3C5.66332 3 3.32664 3.27576 2.40757 3.39771C2.17273 3.42886 2 3.62964 2 3.86653C2 4.01034 2.06459 4.14653 2.17594 4.23753L3.78296 5.55078',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'n0gguj'
    }
  ],
  [
    'path',
    {
      d: 'M1 8H2.91187',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'igemeh'
    }
  ],
  [
    'path',
    {
      d: 'M1 10H5.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7lek59'
    }
  ]
];

/**
 * @component @name MailMove
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjVMNi43MzM1MyA3Ljk2Mzc5QzcuNDcwMjYgOC41NjY1NyA4LjUyOTc0IDguNTY2NTcgOS4yNjY0OCA3Ljk2Mzc5TDEzLjUgNC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDEyLjU0NTVDMiAxMi41NDU1IDUgMTMgOCAxM0M5Ljc4MzgxIDEzIDExLjU2NzYgMTIuODM5MyAxMi43MjA4IDEyLjcwOUMxMy40NTc3IDEyLjYyNTcgMTQgMTEuOTk3MyAxNCAxMS4yNTU2VjQuNzQ0MzlDMTQgNC4wMDI3NCAxMy40NTc3IDMuMzc0MjggMTIuNzIwOCAzLjI5MTAxQzExLjU2NzYgMy4xNjA3MSA5Ljc4MzgxIDMgOCAzQzUuNjYzMzIgMyAzLjMyNjY0IDMuMjc1NzYgMi40MDc1NyAzLjM5NzcxQzIuMTcyNzMgMy40Mjg4NiAyIDMuNjI5NjQgMiAzLjg2NjUzQzIgNC4wMTAzNCAyLjA2NDU5IDQuMTQ2NTMgMi4xNzU5NCA0LjIzNzUzTDMuNzgyOTYgNS41NTA3OCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMSA4SDIuOTExODciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEgMTBINS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/mail-move
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MailMove = createFoamicon('MailMove', __iconNode);
