import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.66915C2.5 3.70258 3.1911 2.87634 4.15044 2.75834C5.18882 2.63062 6.59441 2.5 8 2.5C9.40559 2.5 10.8112 2.63062 11.8496 2.75834C12.8089 2.87634 13.5 3.70258 13.5 4.66915V11.3308C13.5 12.2974 12.8089 13.1237 11.8496 13.2417C10.8112 13.3694 9.40559 13.5 8 13.5C6.59441 13.5 5.18882 13.3694 4.15044 13.2417C3.1911 13.1237 2.5 12.2974 2.5 11.3308V4.66915Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'tnfru1'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 11V7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7s762f'
    }
  ],
  [
    'path',
    {
      d: 'M8 11V5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4p2gwz'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 11V9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'qr8tkf'
    }
  ]
];

/**
 * @component @name ChartColumnSquareDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjY2OTE1QzIuNSAzLjcwMjU4IDMuMTkxMSAyLjg3NjM0IDQuMTUwNDQgMi43NTgzNEM1LjE4ODgyIDIuNjMwNjIgNi41OTQ0MSAyLjUgOCAyLjVDOS40MDU1OSAyLjUgMTAuODExMiAyLjYzMDYyIDExLjg0OTYgMi43NTgzNEMxMi44MDg5IDIuODc2MzQgMTMuNSAzLjcwMjU4IDEzLjUgNC42NjkxNVYxMS4zMzA4QzEzLjUgMTIuMjk3NCAxMi44MDg5IDEzLjEyMzcgMTEuODQ5NiAxMy4yNDE3QzEwLjgxMTIgMTMuMzY5NCA5LjQwNTU5IDEzLjUgOCAxMy41QzYuNTk0NDEgMTMuNSA1LjE4ODgyIDEzLjM2OTQgNC4xNTA0NCAxMy4yNDE3QzMuMTkxMSAxMy4xMjM3IDIuNSAxMi4yOTc0IDIuNSAxMS4zMzA4VjQuNjY5MTVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS41IDExVjcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAxMVY1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41IDExVjkuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/chart-column-square-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ChartColumnSquareDuotone = createFoamicon('ChartColumnSquareDuotone', __iconNode);
