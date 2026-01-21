import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.88 8.12988L12.7553 7.25159C13.8576 6.1455 13.856 4.35572 12.7518 3.25153C11.6463 2.14598 9.85384 2.146 8.74831 3.25156L7.88001 4.11988M8.12 11.8799L7.24996 12.75C6.14539 13.8546 4.35448 13.8546 3.24989 12.75C2.1453 11.6454 2.14531 9.85452 3.24991 8.74994L4.12 7.87987',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'sbs6xb'
    }
  ],
  [
    'path',
    {
      d: 'M9.84372 6.15601L5.84372 10.156',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'czh5bp'
    }
  ],
  [
    'path',
    {
      d: 'M10 14V12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ml99w1'
    }
  ],
  [
    'path',
    {
      d: 'M12 10L14 10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5gsaw7'
    }
  ],
  [
    'path',
    {
      d: 'M6 2L6 4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wrf12o'
    }
  ],
  [
    'path',
    {
      d: 'M4 6L2 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'urubm9'
    }
  ]
];

/**
 * @component @name UnlinkFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg4IDguMTI5ODhMMTIuNzU1MyA3LjI1MTU5QzEzLjg1NzYgNi4xNDU1IDEzLjg1NiA0LjM1NTcyIDEyLjc1MTggMy4yNTE1M0MxMS42NDYzIDIuMTQ1OTggOS44NTM4NCAyLjE0NiA4Ljc0ODMxIDMuMjUxNTZMNy44ODAwMSA0LjExOTg4TTguMTIgMTEuODc5OUw3LjI0OTk2IDEyLjc1QzYuMTQ1MzkgMTMuODU0NiA0LjM1NDQ4IDEzLjg1NDYgMy4yNDk4OSAxMi43NUMyLjE0NTMgMTEuNjQ1NCAyLjE0NTMxIDkuODU0NTIgMy4yNDk5MSA4Ljc0OTk0TDQuMTIgNy44Nzk4NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS44NDM3MiA2LjE1NjAxTDUuODQzNzIgMTAuMTU2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxNFYxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgMTBMMTQgMTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYgMkw2IDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQgNkwyIDYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/unlink-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UnlinkFill = createFoamicon('UnlinkFill', __iconNode);
