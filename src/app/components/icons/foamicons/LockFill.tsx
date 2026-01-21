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
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 's4qdlm'
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
      key: 'kkejsv'
    }
  ]
];

/**
 * @component @name LockFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjMzMzUgNy41VjUuNUMxMC4zMzM1IDQuMTE5MjkgOS4yMTQyMSAzIDcuODMzNSAzQzYuNDUyNzggMyA1LjMzMzUgNC4xMTkyOSA1LjMzMzUgNS41VjcuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyA5LjEzOTM3QzMgOC4zODQxNyAzLjU2MDgxIDcuNzQ4NDkgNC4zMTI5OCA3LjY4MDg5QzUuMjcxIDcuNTk0NzkgNi42MzU1IDcuNSA4IDcuNUM5LjM2NDUgNy41IDEwLjcyOSA3LjU5NDc5IDExLjY4NyA3LjY4MDg5QzEyLjQzOTIgNy43NDg0OSAxMyA4LjM4NDE3IDEzIDkuMTM5MzdWMTIuODYwNkMxMyAxMy42MTU4IDEyLjQzOTIgMTQuMjUxNSAxMS42ODcgMTQuMzE5MUMxMC43MjkgMTQuNDA1MiA5LjM2NDUgMTQuNSA4IDE0LjVDNi42MzU1IDE0LjUgNS4yNzEgMTQuNDA1MiA0LjMxMjk4IDE0LjMxOTFDMy41NjA4MSAxNC4yNTE1IDMgMTMuNjE1OCAzIDEyLjg2MDZWOS4xMzkzN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iMTEiIHI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/lock-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LockFill = createFoamicon('LockFill', __iconNode);
