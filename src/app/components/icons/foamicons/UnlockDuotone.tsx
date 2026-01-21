import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 7.5C9.3645 7.5 10.7295 7.59456 11.6875 7.68066C12.4394 7.74848 13 8.3846 13 9.13965V12.8604C13 13.6154 12.4394 14.2515 11.6875 14.3193C10.7295 14.4054 9.3645 14.5 8 14.5C6.6355 14.5 5.27052 14.4054 4.3125 14.3193C3.56056 14.2515 3 13.6154 3 12.8604V9.13965C3 8.3846 3.56056 7.74848 4.3125 7.68066C5.27052 7.59456 6.6355 7.5 8 7.5ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '3ain7y'
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
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rjhjoa'
    }
  ]
];

/**
 * @component @name UnlockDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNy41QzkuMzY0NSA3LjUgMTAuNzI5NSA3LjU5NDU2IDExLjY4NzUgNy42ODA2NkMxMi40Mzk0IDcuNzQ4NDggMTMgOC4zODQ2IDEzIDkuMTM5NjVWMTIuODYwNEMxMyAxMy42MTU0IDEyLjQzOTQgMTQuMjUxNSAxMS42ODc1IDE0LjMxOTNDMTAuNzI5NSAxNC40MDU0IDkuMzY0NSAxNC41IDggMTQuNUM2LjYzNTUgMTQuNSA1LjI3MDUyIDE0LjQwNTQgNC4zMTI1IDE0LjMxOTNDMy41NjA1NiAxNC4yNTE1IDMgMTMuNjE1NCAzIDEyLjg2MDRWOS4xMzk2NUMzIDguMzg0NiAzLjU2MDU2IDcuNzQ4NDggNC4zMTI1IDcuNjgwNjZDNS4yNzA1MiA3LjU5NDU2IDYuNjM1NSA3LjUgOCA3LjVaTTggMTBDNy40NDc3MiAxMCA3IDEwLjQ0NzcgNyAxMUM3IDExLjU1MjMgNy40NDc3MiAxMiA4IDEyQzguNTUyMjggMTIgOSAxMS41NTIzIDkgMTFDOSAxMC40NDc3IDguNTUyMjggMTAgOCAxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxwYXRoIGQ9Ik04IDcuNUM5LjM2NDUgNy41IDEwLjcyOTUgNy41OTQ1NiAxMS42ODc1IDcuNjgwNjZDMTIuNDM5NCA3Ljc0ODQ4IDEzIDguMzg0NiAxMyA5LjEzOTY1VjEyLjg2MDRDMTMgMTMuNjE1NCAxMi40Mzk0IDE0LjI1MTUgMTEuNjg3NSAxNC4zMTkzQzEwLjcyOTUgMTQuNDA1NCA5LjM2NDUgMTQuNSA4IDE0LjVDNi42MzU1IDE0LjUgNS4yNzA1MiAxNC40MDU0IDQuMzEyNSAxNC4zMTkzQzMuNTYwNTYgMTQuMjUxNSAzIDEzLjYxNTQgMyAxMi44NjA0VjkuMTM5NjVDMyA4LjM4NDYgMy41NjA1NiA3Ljc0ODQ4IDQuMzEyNSA3LjY4MDY2QzUuMjcwNTIgNy41OTQ1NiA2LjYzNTUgNy41IDggNy41WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNyAxMUM3IDEwLjQ0NzcgNy40NDc3MiAxMCA4IDEwQzguNTUyMjggMTAgOSAxMC40NDc3IDkgMTFDOSAxMS41NTIzIDguNTUyMjggMTIgOCAxMkM3LjQ0NzcyIDEyIDcgMTEuNTUyMyA3IDExWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNDE1MSA1LjMzMDEzTDkuMTY1MDkgMy4xNjUwNkM4LjQ3NDczIDEuOTY5MzMgNi45NDU3NiAxLjU1OTY0IDUuNzUwMDIgMi4yNUM0LjU1NDI5IDIuOTQwMzYgNC4xNDQ2IDQuNDY5MzMgNC44MzQ5NiA1LjY2NTA2TDUuODk0MzYgNy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjgiIGN5PSIxMSIgcj0iMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/unlock-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UnlockDuotone = createFoamicon('UnlockDuotone', __iconNode);
