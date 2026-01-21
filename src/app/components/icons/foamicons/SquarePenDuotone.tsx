import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'io90oz'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 10.9V9.54142C5.5 9.5149 5.51054 9.48946 5.52929 9.47071L11.9293 3.07071C11.9683 3.03166 12.0317 3.03166 12.0707 3.07071L13.4293 4.42929C13.4683 4.46834 13.4683 4.53166 13.4293 4.57071L7.02929 10.9707C7.01054 10.9895 6.9851 11 6.95858 11H5.6C5.54477 11 5.5 10.9552 5.5 10.9Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '76x2rz'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 5L11.5 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'u77486'
    }
  ]
];

/**
 * @component @name SquarePenDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMkg0QzIuODk1NDMgMiAyIDIuODk1NDMgMiA0VjEyQzIgMTMuMTA0NiAyLjg5NTQzIDE0IDQgMTRIMTJDMTMuMTA0NiAxNCAxNCAxMy4xMDQ2IDE0IDEyVjgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuNSAxMC45VjkuNTQxNDJDNS41IDkuNTE0OSA1LjUxMDU0IDkuNDg5NDYgNS41MjkyOSA5LjQ3MDcxTDExLjkyOTMgMy4wNzA3MUMxMS45NjgzIDMuMDMxNjYgMTIuMDMxNyAzLjAzMTY2IDEyLjA3MDcgMy4wNzA3MUwxMy40MjkzIDQuNDI5MjlDMTMuNDY4MyA0LjQ2ODM0IDEzLjQ2ODMgNC41MzE2NiAxMy40MjkzIDQuNTcwNzFMNy4wMjkyOSAxMC45NzA3QzcuMDEwNTQgMTAuOTg5NSA2Ljk4NTEgMTEgNi45NTg1OCAxMUg1LjZDNS41NDQ3NyAxMSA1LjUgMTAuOTU1MiA1LjUgMTAuOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41IDVMMTEuNSA2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/square-pen-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SquarePenDuotone = createFoamicon('SquarePenDuotone', __iconNode);
