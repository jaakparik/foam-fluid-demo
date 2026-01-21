import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '6',
      y: '2',
      width: '8',
      height: '10',
      rx: '1',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yxm2rj'
    }
  ],
  [
    'path',
    {
      d: 'M8.45189 13.6945L5.55412 14.471C5.02065 14.6139 4.47231 14.2974 4.32937 13.7639L2.25882 6.03648C2.11588 5.50302 2.43246 4.95468 2.96593 4.81174L3.93185 4.55292',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f3bcaq'
    }
  ],
  [
    'path',
    {
      d: 'M10 5L10 9',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1tj5eb'
    }
  ],
  [
    'path',
    {
      d: 'M12 7H8',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'cb3jfo'
    }
  ]
];

/**
 * @component @name ContentPlusFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iMTAiIHJ4PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDUxODkgMTMuNjk0NUw1LjU1NDEyIDE0LjQ3MUM1LjAyMDY1IDE0LjYxMzkgNC40NzIzMSAxNC4yOTc0IDQuMzI5MzcgMTMuNzYzOUwyLjI1ODgyIDYuMDM2NDhDMi4xMTU4OCA1LjUwMzAyIDIuNDMyNDYgNC45NTQ2OCAyLjk2NTkzIDQuODExNzRMMy45MzE4NSA0LjU1MjkyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCA1TDEwIDkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgN0g4IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/content-plus-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ContentPlusFill = createFoamicon('ContentPlusFill', __iconNode);
