import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 5.25V8.25H9.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '881y6q'
    }
  ],
  [
    'path',
    {
      d: 'M6.00003 5.3103L3.65514 5.31028C3.379 5.31027 3.15515 5.08642 3.15515 4.81028L3.15515 2.49997',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1h9ia8'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C6.13984 2.5 4.49537 3.42345 3.5 4.83692',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'im5sg5'
    }
  ]
];

/**
 * @component @name HistoryDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNS4yNVY4LjI1SDkuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMDAwMDMgNS4zMTAzTDMuNjU1MTQgNS4zMTAyOEMzLjM3OSA1LjMxMDI3IDMuMTU1MTUgNS4wODY0MiAzLjE1NTE1IDQuODEwMjhMMy4xNTUxNSAyLjQ5OTk3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjUgOEMyLjUgMTEuMDM3NiA0Ljk2MjQzIDEzLjUgOCAxMy41QzExLjAzNzYgMTMuNSAxMy41IDExLjAzNzYgMTMuNSA4QzEzLjUgNC45NjI0MyAxMS4wMzc2IDIuNSA4IDIuNUM2LjEzOTg0IDIuNSA0LjQ5NTM3IDMuNDIzNDUgMy41IDQuODM2OTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/history-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const HistoryDuotone = createFoamicon('HistoryDuotone', __iconNode);
