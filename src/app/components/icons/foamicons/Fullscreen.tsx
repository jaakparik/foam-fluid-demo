import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.66915C2.5 3.70258 3.1911 2.87634 4.15044 2.75834C5.18882 2.63062 6.59441 2.5 8 2.5C9.40559 2.5 10.8112 2.63062 11.8496 2.75834C12.8089 2.87634 13.5 3.70258 13.5 4.66915V11.3308C13.5 12.2974 12.8089 13.1237 11.8496 13.2417C10.8112 13.3694 9.40559 13.5 8 13.5C6.59441 13.5 5.18882 13.3694 4.15044 13.2417C3.1911 13.1237 2.5 12.2974 2.5 11.3308V4.66915Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vedvlo'
    }
  ],
  [
    'path',
    {
      d: 'M4.5004 9.4187C4.5004 9.4187 4.50063 10.4626 4.50055 11.0076C4.50052 11.1939 4.60917 11.354 4.79319 11.3831C5.33766 11.4692 6.36946 11.5106 6.36946 11.5106',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'qz4err'
    }
  ],
  [
    'path',
    {
      d: 'M11.4996 9.4187C11.4996 9.4187 11.4994 10.4626 11.4995 11.0076C11.4995 11.1939 11.3908 11.354 11.2068 11.3831C10.6623 11.4692 9.63054 11.5106 9.63054 11.5106',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'py1d7p'
    }
  ],
  [
    'path',
    {
      d: 'M4.5004 6.5813C4.5004 6.5813 4.50063 5.53741 4.50055 4.99241C4.50052 4.80611 4.60917 4.64598 4.79319 4.61689C5.33766 4.53082 6.36946 4.48943 6.36946 4.48943',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: '7tlkmj'
    }
  ],
  [
    'path',
    {
      d: 'M11.4996 6.5813C11.4996 6.5813 11.4994 5.53741 11.4995 4.99241C11.4995 4.80611 11.3908 4.64598 11.2068 4.61689C10.6623 4.53082 9.63054 4.48943 9.63054 4.48943',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'u3oumh'
    }
  ]
];

/**
 * @component @name Fullscreen
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjY2OTE1QzIuNSAzLjcwMjU4IDMuMTkxMSAyLjg3NjM0IDQuMTUwNDQgMi43NTgzNEM1LjE4ODgyIDIuNjMwNjIgNi41OTQ0MSAyLjUgOCAyLjVDOS40MDU1OSAyLjUgMTAuODExMiAyLjYzMDYyIDExLjg0OTYgMi43NTgzNEMxMi44MDg5IDIuODc2MzQgMTMuNSAzLjcwMjU4IDEzLjUgNC42NjkxNVYxMS4zMzA4QzEzLjUgMTIuMjk3NCAxMi44MDg5IDEzLjEyMzcgMTEuODQ5NiAxMy4yNDE3QzEwLjgxMTIgMTMuMzY5NCA5LjQwNTU5IDEzLjUgOCAxMy41QzYuNTk0NDEgMTMuNSA1LjE4ODgyIDEzLjM2OTQgNC4xNTA0NCAxMy4yNDE3QzMuMTkxMSAxMy4xMjM3IDIuNSAxMi4yOTc0IDIuNSAxMS4zMzA4VjQuNjY5MTVaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUwMDQgOS40MTg3QzQuNTAwNCA5LjQxODcgNC41MDA2MyAxMC40NjI2IDQuNTAwNTUgMTEuMDA3NkM0LjUwMDUyIDExLjE5MzkgNC42MDkxNyAxMS4zNTQgNC43OTMxOSAxMS4zODMxQzUuMzM3NjYgMTEuNDY5MiA2LjM2OTQ2IDExLjUxMDYgNi4zNjk0NiAxMS41MTA2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS40OTk2IDkuNDE4N0MxMS40OTk2IDkuNDE4NyAxMS40OTk0IDEwLjQ2MjYgMTEuNDk5NSAxMS4wMDc2QzExLjQ5OTUgMTEuMTkzOSAxMS4zOTA4IDExLjM1NCAxMS4yMDY4IDExLjM4MzFDMTAuNjYyMyAxMS40NjkyIDkuNjMwNTQgMTEuNTEwNiA5LjYzMDU0IDExLjUxMDYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTQuNTAwNCA2LjU4MTNDNC41MDA0IDYuNTgxMyA0LjUwMDYzIDUuNTM3NDEgNC41MDA1NSA0Ljk5MjQxQzQuNTAwNTIgNC44MDYxMSA0LjYwOTE3IDQuNjQ1OTggNC43OTMxOSA0LjYxNjg5QzUuMzM3NjYgNC41MzA4MiA2LjM2OTQ2IDQuNDg5NDMgNi4zNjk0NiA0LjQ4OTQzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS40OTk2IDYuNTgxM0MxMS40OTk2IDYuNTgxMyAxMS40OTk0IDUuNTM3NDEgMTEuNDk5NSA0Ljk5MjQxQzExLjQ5OTUgNC44MDYxMSAxMS4zOTA4IDQuNjQ1OTggMTEuMjA2OCA0LjYxNjg5QzEwLjY2MjMgNC41MzA4MiA5LjYzMDU0IDQuNDg5NDMgOS42MzA1NCA0LjQ4OTQzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/fullscreen
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Fullscreen = createFoamicon('Fullscreen', __iconNode);
