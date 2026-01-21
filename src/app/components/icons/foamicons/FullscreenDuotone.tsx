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
 * @component @name FullscreenDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjY2OTE1QzIuNSAzLjcwMjU4IDMuMTkxMSAyLjg3NjM0IDQuMTUwNDQgMi43NTgzNEM1LjE4ODgyIDIuNjMwNjIgNi41OTQ0MSAyLjUgOCAyLjVDOS40MDU1OSAyLjUgMTAuODExMiAyLjYzMDYyIDExLjg0OTYgMi43NTgzNEMxMi44MDg5IDIuODc2MzQgMTMuNSAzLjcwMjU4IDEzLjUgNC42NjkxNVYxMS4zMzA4QzEzLjUgMTIuMjk3NCAxMi44MDg5IDEzLjEyMzcgMTEuODQ5NiAxMy4yNDE3QzEwLjgxMTIgMTMuMzY5NCA5LjQwNTU5IDEzLjUgOCAxMy41QzYuNTk0NDEgMTMuNSA1LjE4ODgyIDEzLjM2OTQgNC4xNTA0NCAxMy4yNDE3QzMuMTkxMSAxMy4xMjM3IDIuNSAxMi4yOTc0IDIuNSAxMS4zMzA4VjQuNjY5MTVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41MDA0IDkuNDE4N0M0LjUwMDQgOS40MTg3IDQuNTAwNjMgMTAuNDYyNiA0LjUwMDU1IDExLjAwNzZDNC41MDA1MiAxMS4xOTM5IDQuNjA5MTcgMTEuMzU0IDQuNzkzMTkgMTEuMzgzMUM1LjMzNzY2IDExLjQ2OTIgNi4zNjk0NiAxMS41MTA2IDYuMzY5NDYgMTEuNTEwNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNDk5NiA5LjQxODdDMTEuNDk5NiA5LjQxODcgMTEuNDk5NCAxMC40NjI2IDExLjQ5OTUgMTEuMDA3NkMxMS40OTk1IDExLjE5MzkgMTEuMzkwOCAxMS4zNTQgMTEuMjA2OCAxMS4zODMxQzEwLjY2MjMgMTEuNDY5MiA5LjYzMDU0IDExLjUxMDYgOS42MzA1NCAxMS41MTA2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUwMDQgNi41ODEzQzQuNTAwNCA2LjU4MTMgNC41MDA2MyA1LjUzNzQxIDQuNTAwNTUgNC45OTI0MUM0LjUwMDUyIDQuODA2MTEgNC42MDkxNyA0LjY0NTk4IDQuNzkzMTkgNC42MTY4OUM1LjMzNzY2IDQuNTMwODIgNi4zNjk0NiA0LjQ4OTQzIDYuMzY5NDYgNC40ODk0MyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNDk5NiA2LjU4MTNDMTEuNDk5NiA2LjU4MTMgMTEuNDk5NCA1LjUzNzQxIDExLjQ5OTUgNC45OTI0MUMxMS40OTk1IDQuODA2MTEgMTEuMzkwOCA0LjY0NTk4IDExLjIwNjggNC42MTY4OUMxMC42NjIzIDQuNTMwODIgOS42MzA1NCA0LjQ4OTQzIDkuNjMwNTQgNC40ODk0MyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/fullscreen-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FullscreenDuotone = createFoamicon('FullscreenDuotone', __iconNode);
