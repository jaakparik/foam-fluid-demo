import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'w97vay'
    }
  ],
  [
    'path',
    {
      d: 'M6.18006 9.20677C6.18006 10.0275 6.99338 10.6928 7.99667 10.6928C8.99995 10.6928 9.81327 10.0275 9.81327 9.20677C9.81327 8.38604 8.99995 7.7207 7.99667 7.7207',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'amtmop'
    }
  ],
  [
    'path',
    {
      d: 'M9.81327 6.24155C9.81327 5.42463 8.99995 4.76239 7.99667 4.76239C6.99338 4.76239 6.18006 5.42463 6.18006 6.24155C6.18006 7.05846 6.99338 7.7207 7.99667 7.7207',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nx2wqg'
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
 * @component @name CircleDollarSignDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02LjE4MDA2IDkuMjA2NzdDNi4xODAwNiAxMC4wMjc1IDYuOTkzMzggMTAuNjkyOCA3Ljk5NjY3IDEwLjY5MjhDOC45OTk5NSAxMC42OTI4IDkuODEzMjcgMTAuMDI3NSA5LjgxMzI3IDkuMjA2NzdDOS44MTMyNyA4LjM4NjA0IDguOTk5OTUgNy43MjA3IDcuOTk2NjcgNy43MjA3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjgxMzI3IDYuMjQxNTVDOS44MTMyNyA1LjQyNDYzIDguOTk5OTUgNC43NjIzOSA3Ljk5NjY3IDQuNzYyMzlDNi45OTMzOCA0Ljc2MjM5IDYuMTgwMDYgNS40MjQ2MyA2LjE4MDA2IDYuMjQxNTVDNi4xODAwNiA3LjA1ODQ2IDYuOTkzMzggNy43MjA3IDcuOTk2NjcgNy43MjA3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03Ljk5OTY2IDMuOTY5MzZWMTIuMDMwNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/circle-dollar-sign-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleDollarSignDuotone = createFoamicon('CircleDollarSignDuotone', __iconNode);
