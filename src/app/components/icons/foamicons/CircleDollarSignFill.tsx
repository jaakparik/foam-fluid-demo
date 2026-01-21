import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd9sdlm'
    }
  ],
  [
    'path',
    {
      d: 'M6.18007 9.20677C6.18007 10.0275 6.99339 10.6928 7.99667 10.6928C8.99996 10.6928 9.81328 10.0275 9.81328 9.20677C9.81328 8.38604 8.99996 7.7207 7.99667 7.7207',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '32xphm'
    }
  ],
  [
    'path',
    {
      d: 'M9.81328 6.24155C9.81328 5.42463 8.99996 4.76239 7.99667 4.76239C6.99339 4.76239 6.18007 5.42463 6.18007 6.24155C6.18007 7.05846 6.99339 7.7207 7.99667 7.7207',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'crkp93'
    }
  ],
  [
    'path',
    {
      d: 'M7.99966 3.96936V12.0306',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'enq9fu'
    }
  ]
];

/**
 * @component @name CircleDollarSignFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNi4xODAwNyA5LjIwNjc3QzYuMTgwMDcgMTAuMDI3NSA2Ljk5MzM5IDEwLjY5MjggNy45OTY2NyAxMC42OTI4QzguOTk5OTYgMTAuNjkyOCA5LjgxMzI4IDEwLjAyNzUgOS44MTMyOCA5LjIwNjc3QzkuODEzMjggOC4zODYwNCA4Ljk5OTk2IDcuNzIwNyA3Ljk5NjY3IDcuNzIwNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjgxMzI4IDYuMjQxNTVDOS44MTMyOCA1LjQyNDYzIDguOTk5OTYgNC43NjIzOSA3Ljk5NjY3IDQuNzYyMzlDNi45OTMzOSA0Ljc2MjM5IDYuMTgwMDcgNS40MjQ2MyA2LjE4MDA3IDYuMjQxNTVDNi4xODAwNyA3LjA1ODQ2IDYuOTkzMzkgNy43MjA3IDcuOTk2NjcgNy43MjA3IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcuOTk5NjYgMy45NjkzNlYxMi4wMzA2IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/circle-dollar-sign-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleDollarSignFill = createFoamicon('CircleDollarSignFill', __iconNode);
