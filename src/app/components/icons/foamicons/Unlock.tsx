import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.4151 5.33013L9.16509 3.16506C8.47473 1.96933 6.94576 1.55964 5.75002 2.25C4.55429 2.94036 4.1446 4.46933 4.83496 5.66506L5.89436 7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'o4nxyd'
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
 * @component @name Unlock
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjQxNTEgNS4zMzAxM0w5LjE2NTA5IDMuMTY1MDZDOC40NzQ3MyAxLjk2OTMzIDYuOTQ1NzYgMS41NTk2NCA1Ljc1MDAyIDIuMjVDNC41NTQyOSAyLjk0MDM2IDQuMTQ0NiA0LjQ2OTMzIDQuODM0OTYgNS42NjUwNkw1Ljg5NDM2IDcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iMTEiIHI9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgOS4xMzkzN0MzIDguMzg0MTcgMy41NjA4MSA3Ljc0ODQ5IDQuMzEyOTggNy42ODA4OUM1LjI3MSA3LjU5NDc5IDYuNjM1NSA3LjUgOCA3LjVDOS4zNjQ1IDcuNSAxMC43MjkgNy41OTQ3OSAxMS42ODcgNy42ODA4OUMxMi40MzkyIDcuNzQ4NDkgMTMgOC4zODQxNyAxMyA5LjEzOTM3VjEyLjg2MDZDMTMgMTMuNjE1OCAxMi40MzkyIDE0LjI1MTUgMTEuNjg3IDE0LjMxOTFDMTAuNzI5IDE0LjQwNTIgOS4zNjQ1IDE0LjUgOCAxNC41QzYuNjM1NSAxNC41IDUuMjcxIDE0LjQwNTIgNC4zMTI5OCAxNC4zMTkxQzMuNTYwODEgMTQuMjUxNSAzIDEzLjYxNTggMyAxMi44NjA2VjkuMTM5MzdaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/unlock
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Unlock = createFoamicon('Unlock', __iconNode);
