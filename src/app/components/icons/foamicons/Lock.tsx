import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.3335 7.5V5.5C10.3335 4.11929 9.21421 3 7.8335 3C6.45278 3 5.3335 4.11929 5.3335 5.5V7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '74q2ky'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '11',
      r: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rjhjo7'
    }
  ],
  [
    'path',
    {
      d: 'M3 9.13937C3 8.38417 3.56081 7.74849 4.31298 7.68089C5.271 7.59479 6.6355 7.5 8 7.5C9.3645 7.5 10.729 7.59479 11.687 7.68089C12.4392 7.74849 13 8.38417 13 9.13937V12.8606C13 13.6158 12.4392 14.2515 11.687 14.3191C10.729 14.4052 9.3645 14.5 8 14.5C6.6355 14.5 5.271 14.4052 4.31298 14.3191C3.56081 14.2515 3 13.6158 3 12.8606V9.13937Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hcpamk'
    }
  ]
];

/**
 * @component @name Lock
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjMzMzUgNy41VjUuNUMxMC4zMzM1IDQuMTE5MjkgOS4yMTQyMSAzIDcuODMzNSAzQzYuNDUyNzggMyA1LjMzMzUgNC4xMTkyOSA1LjMzMzUgNS41VjcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iMTEiIHI9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgOS4xMzkzN0MzIDguMzg0MTcgMy41NjA4MSA3Ljc0ODQ5IDQuMzEyOTggNy42ODA4OUM1LjI3MSA3LjU5NDc5IDYuNjM1NSA3LjUgOCA3LjVDOS4zNjQ1IDcuNSAxMC43MjkgNy41OTQ3OSAxMS42ODcgNy42ODA4OUMxMi40MzkyIDcuNzQ4NDkgMTMgOC4zODQxNyAxMyA5LjEzOTM3VjEyLjg2MDZDMTMgMTMuNjE1OCAxMi40MzkyIDE0LjI1MTUgMTEuNjg3IDE0LjMxOTFDMTAuNzI5IDE0LjQwNTIgOS4zNjQ1IDE0LjUgOCAxNC41QzYuNjM1NSAxNC41IDUuMjcxIDE0LjQwNTIgNC4zMTI5OCAxNC4zMTkxQzMuNTYwODEgMTQuMjUxNSAzIDEzLjYxNTggMyAxMi44NjA2VjkuMTM5MzdaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/lock
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Lock = createFoamicon('Lock', __iconNode);
