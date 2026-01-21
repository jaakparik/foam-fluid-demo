import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.25 7.75C11.9574 8.92444 12.7917 10.5497 13.3543 11.6796C13.6688 12.3112 13.2374 13.0502 12.5329 13.0897C11.256 13.1614 9.39596 13.25 8 13.25C6.60404 13.25 4.74404 13.1614 3.46706 13.0897C2.76259 13.0502 2.33116 12.3112 2.64567 11.6796C3.20829 10.5497 4.04258 8.92444 4.75 7.75C5.45152 6.58536 6.49354 5.09165 7.20742 4.09313C7.59827 3.54644 8.40173 3.54644 8.79258 4.09313C9.50646 5.09165 10.5485 6.58536 11.25 7.75Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1x9an2'
    }
  ],
  [
    'path',
    {
      d: 'M8 9V11.4873',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gm48gl'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '6.875',
      r: '0.625',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: 'dh6zfu'
    }
  ]
];

/**
 * @component @name AlertFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjI1IDcuNzVDMTEuOTU3NCA4LjkyNDQ0IDEyLjc5MTcgMTAuNTQ5NyAxMy4zNTQzIDExLjY3OTZDMTMuNjY4OCAxMi4zMTEyIDEzLjIzNzQgMTMuMDUwMiAxMi41MzI5IDEzLjA4OTdDMTEuMjU2IDEzLjE2MTQgOS4zOTU5NiAxMy4yNSA4IDEzLjI1QzYuNjA0MDQgMTMuMjUgNC43NDQwNCAxMy4xNjE0IDMuNDY3MDYgMTMuMDg5N0MyLjc2MjU5IDEzLjA1MDIgMi4zMzExNiAxMi4zMTEyIDIuNjQ1NjcgMTEuNjc5NkMzLjIwODI5IDEwLjU0OTcgNC4wNDI1OCA4LjkyNDQ0IDQuNzUgNy43NUM1LjQ1MTUyIDYuNTg1MzYgNi40OTM1NCA1LjA5MTY1IDcuMjA3NDIgNC4wOTMxM0M3LjU5ODI3IDMuNTQ2NDQgOC40MDE3MyAzLjU0NjQ0IDguNzkyNTggNC4wOTMxM0M5LjUwNjQ2IDUuMDkxNjUgMTAuNTQ4NSA2LjU4NTM2IDExLjI1IDcuNzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggOVYxMS40ODczIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iOCIgY3k9IjYuODc1IiByPSIwLjYyNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/alert-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const AlertFill = createFoamicon('AlertFill', __iconNode);
