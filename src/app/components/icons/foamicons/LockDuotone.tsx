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
    'path',
    {
      d: 'M3 9.13937C3 8.38417 3.56081 7.74849 4.31298 7.68089C5.271 7.59479 6.6355 7.5 8 7.5C9.3645 7.5 10.729 7.59479 11.687 7.68089C12.4392 7.74849 13 8.38417 13 9.13937V12.8606C13 13.6158 12.4392 14.2515 11.687 14.3191C10.729 14.4052 9.3645 14.5 8 14.5C6.6355 14.5 5.271 14.4052 4.31298 14.3191C3.56081 14.2515 3 13.6158 3 12.8606V9.13937Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hcpaml'
    }
  ],
  [
    'path',
    {
      d: 'M8 7.5C9.3645 7.5 10.7295 7.59456 11.6875 7.68066C12.4394 7.74848 13 8.3846 13 9.13965V12.8604C13 13.6154 12.4394 14.2515 11.6875 14.3193C10.7295 14.4054 9.3645 14.5 8 14.5C6.6355 14.5 5.27052 14.4054 4.3125 14.3193C3.56056 14.2515 3 13.6154 3 12.8604V9.13965C3 8.3846 3.56056 7.74848 4.3125 7.68066C5.27052 7.59456 6.6355 7.5 8 7.5ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '3ain80'
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
      key: 'rjhjo9'
    }
  ]
];

/**
 * @component @name LockDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjMzMzUgNy41VjUuNUMxMC4zMzM1IDQuMTE5MjkgOS4yMTQyMSAzIDcuODMzNSAzQzYuNDUyNzggMyA1LjMzMzUgNC4xMTkyOSA1LjMzMzUgNS41VjcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyA5LjEzOTM3QzMgOC4zODQxNyAzLjU2MDgxIDcuNzQ4NDkgNC4zMTI5OCA3LjY4MDg5QzUuMjcxIDcuNTk0NzkgNi42MzU1IDcuNSA4IDcuNUM5LjM2NDUgNy41IDEwLjcyOSA3LjU5NDc5IDExLjY4NyA3LjY4MDg5QzEyLjQzOTIgNy43NDg0OSAxMyA4LjM4NDE3IDEzIDkuMTM5MzdWMTIuODYwNkMxMyAxMy42MTU4IDEyLjQzOTIgMTQuMjUxNSAxMS42ODcgMTQuMzE5MUMxMC43MjkgMTQuNDA1MiA5LjM2NDUgMTQuNSA4IDE0LjVDNi42MzU1IDE0LjUgNS4yNzEgMTQuNDA1MiA0LjMxMjk4IDE0LjMxOTFDMy41NjA4MSAxNC4yNTE1IDMgMTMuNjE1OCAzIDEyLjg2MDZWOS4xMzkzN1oiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggNy41QzkuMzY0NSA3LjUgMTAuNzI5NSA3LjU5NDU2IDExLjY4NzUgNy42ODA2NkMxMi40Mzk0IDcuNzQ4NDggMTMgOC4zODQ2IDEzIDkuMTM5NjVWMTIuODYwNEMxMyAxMy42MTU0IDEyLjQzOTQgMTQuMjUxNSAxMS42ODc1IDE0LjMxOTNDMTAuNzI5NSAxNC40MDU0IDkuMzY0NSAxNC41IDggMTQuNUM2LjYzNTUgMTQuNSA1LjI3MDUyIDE0LjQwNTQgNC4zMTI1IDE0LjMxOTNDMy41NjA1NiAxNC4yNTE1IDMgMTMuNjE1NCAzIDEyLjg2MDRWOS4xMzk2NUMzIDguMzg0NiAzLjU2MDU2IDcuNzQ4NDggNC4zMTI1IDcuNjgwNjZDNS4yNzA1MiA3LjU5NDU2IDYuNjM1NSA3LjUgOCA3LjVaTTggMTBDNy40NDc3MiAxMCA3IDEwLjQ0NzcgNyAxMUM3IDExLjU1MjMgNy40NDc3MiAxMiA4IDEyQzguNTUyMjggMTIgOSAxMS41NTIzIDkgMTFDOSAxMC40NDc3IDguNTUyMjggMTAgOCAxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxjaXJjbGUgY3g9IjgiIGN5PSIxMSIgcj0iMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/lock-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LockDuotone = createFoamicon('LockDuotone', __iconNode);
