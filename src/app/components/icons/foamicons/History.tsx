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
      d: 'M6.00003 5.3103L3.65515 5.31028C3.37901 5.31027 3.15515 5.08642 3.15515 4.81028L3.15515 2.49997',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'blfzke'
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
 * @component @name History
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNS4yNVY4LjI1SDkuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMDAwMDMgNS4zMTAzTDMuNjU1MTUgNS4zMTAyOEMzLjM3OTAxIDUuMzEwMjcgMy4xNTUxNSA1LjA4NjQyIDMuMTU1MTUgNC44MTAyOEwzLjE1NTE1IDIuNDk5OTciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNSA4QzIuNSAxMS4wMzc2IDQuOTYyNDMgMTMuNSA4IDEzLjVDMTEuMDM3NiAxMy41IDEzLjUgMTEuMDM3NiAxMy41IDhDMTMuNSA0Ljk2MjQzIDExLjAzNzYgMi41IDggMi41QzYuMTM5ODQgMi41IDQuNDk1MzcgMy40MjM0NSAzLjUgNC44MzY5MiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/history
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const History = createFoamicon('History', __iconNode);
