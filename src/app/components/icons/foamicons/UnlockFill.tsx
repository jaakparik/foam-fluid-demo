import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 7.5C9.3645 7.5 10.7295 7.59456 11.6875 7.68066C12.4394 7.74848 13 8.3846 13 9.13965V12.8604C13 13.6154 12.4394 14.2515 11.6875 14.3193C10.7295 14.4054 9.3645 14.5 8 14.5C6.6355 14.5 5.27052 14.4054 4.3125 14.3193C3.56056 14.2515 3 13.6154 3 12.8604V9.13965C3 8.3846 3.56056 7.74848 4.3125 7.68066C5.27052 7.59456 6.6355 7.5 8 7.5ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10Z',
      fill: 'currentColor',
      key: '4o6qqw'
    }
  ],
  [
    'path',
    {
      d: 'M8 7.5C9.3645 7.5 10.7295 7.59456 11.6875 7.68066C12.4394 7.74848 13 8.3846 13 9.13965V12.8604C13 13.6154 12.4394 14.2515 11.6875 14.3193C10.7295 14.4054 9.3645 14.5 8 14.5C6.6355 14.5 5.27052 14.4054 4.3125 14.3193C3.56056 14.2515 3 13.6154 3 12.8604V9.13965C3 8.3846 3.56056 7.74848 4.3125 7.68066C5.27052 7.59456 6.6355 7.5 8 7.5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'fj0r3m'
    }
  ],
  [
    'path',
    {
      d: 'M7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1cscgf'
    }
  ],
  [
    'path',
    {
      d: 'M10.4151 5.33013L9.16509 3.16506C8.47473 1.96933 6.94576 1.55964 5.75002 2.25C4.55429 2.94036 4.1446 4.46933 4.83496 5.66506L5.89436 7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'o4nxyg'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '11',
      r: '1',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kkejsx'
    }
  ]
];

/**
 * @component @name UnlockFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNy41QzkuMzY0NSA3LjUgMTAuNzI5NSA3LjU5NDU2IDExLjY4NzUgNy42ODA2NkMxMi40Mzk0IDcuNzQ4NDggMTMgOC4zODQ2IDEzIDkuMTM5NjVWMTIuODYwNEMxMyAxMy42MTU0IDEyLjQzOTQgMTQuMjUxNSAxMS42ODc1IDE0LjMxOTNDMTAuNzI5NSAxNC40MDU0IDkuMzY0NSAxNC41IDggMTQuNUM2LjYzNTUgMTQuNSA1LjI3MDUyIDE0LjQwNTQgNC4zMTI1IDE0LjMxOTNDMy41NjA1NiAxNC4yNTE1IDMgMTMuNjE1NCAzIDEyLjg2MDRWOS4xMzk2NUMzIDguMzg0NiAzLjU2MDU2IDcuNzQ4NDggNC4zMTI1IDcuNjgwNjZDNS4yNzA1MiA3LjU5NDU2IDYuNjM1NSA3LjUgOCA3LjVaTTggMTBDNy40NDc3MiAxMCA3IDEwLjQ0NzcgNyAxMUM3IDExLjU1MjMgNy40NDc3MiAxMiA4IDEyQzguNTUyMjggMTIgOSAxMS41NTIzIDkgMTFDOSAxMC40NDc3IDguNTUyMjggMTAgOCAxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNOCA3LjVDOS4zNjQ1IDcuNSAxMC43Mjk1IDcuNTk0NTYgMTEuNjg3NSA3LjY4MDY2QzEyLjQzOTQgNy43NDg0OCAxMyA4LjM4NDYgMTMgOS4xMzk2NVYxMi44NjA0QzEzIDEzLjYxNTQgMTIuNDM5NCAxNC4yNTE1IDExLjY4NzUgMTQuMzE5M0MxMC43Mjk1IDE0LjQwNTQgOS4zNjQ1IDE0LjUgOCAxNC41QzYuNjM1NSAxNC41IDUuMjcwNTIgMTQuNDA1NCA0LjMxMjUgMTQuMzE5M0MzLjU2MDU2IDE0LjI1MTUgMyAxMy42MTU0IDMgMTIuODYwNFY5LjEzOTY1QzMgOC4zODQ2IDMuNTYwNTYgNy43NDg0OCA0LjMxMjUgNy42ODA2NkM1LjI3MDUyIDcuNTk0NTYgNi42MzU1IDcuNSA4IDcuNVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcgMTFDNyAxMC40NDc3IDcuNDQ3NzIgMTAgOCAxMEM4LjU1MjI4IDEwIDkgMTAuNDQ3NyA5IDExQzkgMTEuNTUyMyA4LjU1MjI4IDEyIDggMTJDNy40NDc3MiAxMiA3IDExLjU1MjMgNyAxMVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjQxNTEgNS4zMzAxM0w5LjE2NTA5IDMuMTY1MDZDOC40NzQ3MyAxLjk2OTMzIDYuOTQ1NzYgMS41NTk2NCA1Ljc1MDAyIDIuMjVDNC41NTQyOSAyLjk0MDM2IDQuMTQ0NiA0LjQ2OTMzIDQuODM0OTYgNS42NjUwNkw1Ljg5NDM2IDcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iMTEiIHI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/unlock-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UnlockFill = createFoamicon('UnlockFill', __iconNode);
