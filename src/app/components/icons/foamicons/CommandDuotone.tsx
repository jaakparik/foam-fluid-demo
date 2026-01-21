import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3 4.75C3 3.7835 3.7835 3 4.75 3V3C5.7165 3 6.5 3.7835 6.5 4.75V6.5H4.75C3.7835 6.5 3 5.7165 3 4.75V4.75Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '397r7t'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 4.75C9.5 3.7835 10.2835 3 11.25 3V3C12.2165 3 13 3.7835 13 4.75V4.75C13 5.7165 12.2165 6.5 11.25 6.5H9.5V4.75Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'uxdw8f'
    }
  ],
  [
    'path',
    {
      d: 'M3 11.25C3 10.2835 3.7835 9.5 4.75 9.5H6.5V11.25C6.5 12.2165 5.7165 13 4.75 13V13C3.7835 13 3 12.2165 3 11.25V11.25Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8m4mzg'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 9.5H11.25C12.2165 9.5 13 10.2835 13 11.25V11.25C13 12.2165 12.2165 13 11.25 13V13C10.2835 13 9.5 12.2165 9.5 11.25V9.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'goobuj'
    }
  ],
  [
    'rect',
    {
      x: '6.5',
      y: '6.5',
      width: '3',
      height: '3',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'odg9o'
    }
  ]
];

/**
 * @component @name CommandDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgNC43NUMzIDMuNzgzNSAzLjc4MzUgMyA0Ljc1IDNWM0M1LjcxNjUgMyA2LjUgMy43ODM1IDYuNSA0Ljc1VjYuNUg0Ljc1QzMuNzgzNSA2LjUgMyA1LjcxNjUgMyA0Ljc1VjQuNzVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjUgNC43NUM5LjUgMy43ODM1IDEwLjI4MzUgMyAxMS4yNSAzVjNDMTIuMjE2NSAzIDEzIDMuNzgzNSAxMyA0Ljc1VjQuNzVDMTMgNS43MTY1IDEyLjIxNjUgNi41IDExLjI1IDYuNUg5LjVWNC43NVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgMTEuMjVDMyAxMC4yODM1IDMuNzgzNSA5LjUgNC43NSA5LjVINi41VjExLjI1QzYuNSAxMi4yMTY1IDUuNzE2NSAxMyA0Ljc1IDEzVjEzQzMuNzgzNSAxMyAzIDEyLjIxNjUgMyAxMS4yNVYxMS4yNVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuNSA5LjVIMTEuMjVDMTIuMjE2NSA5LjUgMTMgMTAuMjgzNSAxMyAxMS4yNVYxMS4yNUMxMyAxMi4yMTY1IDEyLjIxNjUgMTMgMTEuMjUgMTNWMTNDMTAuMjgzNSAxMyA5LjUgMTIuMjE2NSA5LjUgMTEuMjVWOS41WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSI2LjUiIHk9IjYuNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/command-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CommandDuotone = createFoamicon('CommandDuotone', __iconNode);
