import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M1.5 4.79111C1.5 4.28711 1.87445 3.86309 2.37584 3.81187C3.56 3.69088 5.78 3.5 8 3.5C10.22 3.5 12.44 3.69088 13.6242 3.81187C14.1255 3.8631 14.5 4.28711 14.5 4.79111V11.2089C14.5 11.7129 14.1255 12.1369 13.6242 12.1881C12.44 12.3091 10.22 12.5 8 12.5C5.78 12.5 3.56 12.3091 2.37584 12.1881C1.87445 12.1369 1.5 11.7129 1.5 11.2089V4.79111Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'he9gsv'
    }
  ],
  [
    'path',
    {
      d: 'M4 4V12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'lez9yk'
    }
  ],
  [
    'path',
    {
      d: 'M2 6H3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xsmlra'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7vtjl3'
    }
  ],
  [
    'path',
    {
      d: 'M2 10H3.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8p50vt'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 6H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mo7n5i'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 8H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'uv39ql'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 10H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'q9gzpn'
    }
  ],
  [
    'path',
    {
      d: 'M12 4V12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 's1lubs'
    }
  ],
  [
    'path',
    {
      d: 'M12 12V4C12.0095 3.81541 11.8701 3.6568 11.6858 3.64355C10.5951 3.56521 9.29754 3.5 8 3.5C6.70246 3.5 5.40492 3.56521 4.3142 3.64355C4.12985 3.6568 3.99048 3.81541 4 4V12C3.99048 12.1846 4.12985 12.3432 4.3142 12.3564C5.40492 12.4348 6.70246 12.5 8 12.5C9.29754 12.5 10.5951 12.4348 11.6858 12.3564C11.8702 12.3432 12.0095 12.1846 12 12Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'wzk5ja'
    }
  ],
  [
    'path',
    {
      d: 'M6.09808 6.36603C6.09808 5.98113 6.51474 5.74056 6.84808 5.93301L9.84808 7.66506C10.1814 7.85751 10.1814 8.33864 9.84808 8.53109L6.84808 10.2631C6.51474 10.4556 6.09808 10.215 6.09808 9.83013L6.09808 6.36603Z',
      fill: 'currentColor',
      key: 'dpbvip'
    }
  ]
];

/**
 * @component @name ReelDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA0Ljc5MTExQzEuNSA0LjI4NzExIDEuODc0NDUgMy44NjMwOSAyLjM3NTg0IDMuODExODdDMy41NiAzLjY5MDg4IDUuNzggMy41IDggMy41QzEwLjIyIDMuNSAxMi40NCAzLjY5MDg4IDEzLjYyNDIgMy44MTE4N0MxNC4xMjU1IDMuODYzMSAxNC41IDQuMjg3MTEgMTQuNSA0Ljc5MTExVjExLjIwODlDMTQuNSAxMS43MTI5IDE0LjEyNTUgMTIuMTM2OSAxMy42MjQyIDEyLjE4ODFDMTIuNDQgMTIuMzA5MSAxMC4yMiAxMi41IDggMTIuNUM1Ljc4IDEyLjUgMy41NiAxMi4zMDkxIDIuMzc1ODQgMTIuMTg4MUMxLjg3NDQ1IDEyLjEzNjkgMS41IDExLjcxMjkgMS41IDExLjIwODlWNC43OTExMVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQgNFYxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiA2SDMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiA4SDMuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiAxMEgzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyLjUgNkgxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSA4SDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMi41IDEwSDE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiA0VjEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxMlY0QzEyLjAwOTUgMy44MTU0MSAxMS44NzAxIDMuNjU2OCAxMS42ODU4IDMuNjQzNTVDMTAuNTk1MSAzLjU2NTIxIDkuMjk3NTQgMy41IDggMy41QzYuNzAyNDYgMy41IDUuNDA0OTIgMy41NjUyMSA0LjMxNDIgMy42NDM1NUM0LjEyOTg1IDMuNjU2OCAzLjk5MDQ4IDMuODE1NDEgNCA0VjEyQzMuOTkwNDggMTIuMTg0NiA0LjEyOTg1IDEyLjM0MzIgNC4zMTQyIDEyLjM1NjRDNS40MDQ5MiAxMi40MzQ4IDYuNzAyNDYgMTIuNSA4IDEyLjVDOS4yOTc1NCAxMi41IDEwLjU5NTEgMTIuNDM0OCAxMS42ODU4IDEyLjM1NjRDMTEuODcwMiAxMi4zNDMyIDEyLjAwOTUgMTIuMTg0NiAxMiAxMloiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxwYXRoIGQ9Ik02LjA5ODA4IDYuMzY2MDNDNi4wOTgwOCA1Ljk4MTEzIDYuNTE0NzQgNS43NDA1NiA2Ljg0ODA4IDUuOTMzMDFMOS44NDgwOCA3LjY2NTA2QzEwLjE4MTQgNy44NTc1MSAxMC4xODE0IDguMzM4NjQgOS44NDgwOCA4LjUzMTA5TDYuODQ4MDggMTAuMjYzMUM2LjUxNDc0IDEwLjQ1NTYgNi4wOTgwOCAxMC4yMTUgNi4wOTgwOCA5LjgzMDEzTDYuMDk4MDggNi4zNjYwM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/reel-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ReelDuotone = createFoamicon('ReelDuotone', __iconNode);
