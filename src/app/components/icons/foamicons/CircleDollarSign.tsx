import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mpqwsf'
    }
  ],
  [
    'path',
    {
      d: 'M6.18006 9.20677C6.18006 10.0275 6.99339 10.6928 7.99667 10.6928C8.99995 10.6928 9.81327 10.0275 9.81327 9.20677C9.81327 8.38604 8.99995 7.7207 7.99667 7.7207',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8dr9l2'
    }
  ],
  [
    'path',
    {
      d: 'M9.81327 6.24155C9.81327 5.42463 8.99995 4.76239 7.99667 4.76239C6.99339 4.76239 6.18006 5.42463 6.18006 6.24155C6.18006 7.05846 6.99339 7.7207 7.99667 7.7207',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd0xx1i'
    }
  ],
  [
    'path',
    {
      d: 'M7.99966 3.96936V12.0306',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6c5zap'
    }
  ]
];

/**
 * @component @name CircleDollarSign
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMTgwMDYgOS4yMDY3N0M2LjE4MDA2IDEwLjAyNzUgNi45OTMzOSAxMC42OTI4IDcuOTk2NjcgMTAuNjkyOEM4Ljk5OTk1IDEwLjY5MjggOS44MTMyNyAxMC4wMjc1IDkuODEzMjcgOS4yMDY3N0M5LjgxMzI3IDguMzg2MDQgOC45OTk5NSA3LjcyMDcgNy45OTY2NyA3LjcyMDciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuODEzMjcgNi4yNDE1NUM5LjgxMzI3IDUuNDI0NjMgOC45OTk5NSA0Ljc2MjM5IDcuOTk2NjcgNC43NjIzOUM2Ljk5MzM5IDQuNzYyMzkgNi4xODAwNiA1LjQyNDYzIDYuMTgwMDYgNi4yNDE1NUM2LjE4MDA2IDcuMDU4NDYgNi45OTMzOSA3LjcyMDcgNy45OTY2NyA3LjcyMDciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTcuOTk5NjYgMy45NjkzNlYxMi4wMzA2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/circle-dollar-sign
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleDollarSign = createFoamicon('CircleDollarSign', __iconNode);
