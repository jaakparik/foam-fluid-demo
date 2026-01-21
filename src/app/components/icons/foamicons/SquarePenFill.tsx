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
      d: 'M12.0707 3.07071L13.4293 4.42929C13.4683 4.46834 13.4683 4.53166 13.4293 4.57071L12.5707 5.42929C12.5317 5.46834 12.4683 5.46834 12.4293 5.42929L11.0707 4.07071C11.0317 4.03166 11.0317 3.96834 11.0707 3.92929L11.9293 3.07071C11.9683 3.03166 12.0317 3.03166 12.0707 3.07071Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '33eha7'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 10.9V9.54142C5.5 9.5149 5.51054 9.48946 5.52929 9.47071L9.42929 5.57071C9.46834 5.53166 9.53166 5.53166 9.57071 5.57071L10.9293 6.92929C10.9683 6.96834 10.9683 7.03166 10.9293 7.07071L7.02929 10.9707C7.01054 10.9895 6.9851 11 6.95858 11H5.6C5.54477 11 5.5 10.9552 5.5 10.9Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hdpwau'
    }
  ]
];

/**
 * @component @name SquarePenFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMkg0QzIuODk1NDMgMiAyIDIuODk1NDMgMiA0VjEyQzIgMTMuMTA0NiAyLjg5NTQzIDE0IDQgMTRIMTJDMTMuMTA0NiAxNCAxNCAxMy4xMDQ2IDE0IDEyVjgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyLjA3MDcgMy4wNzA3MUwxMy40MjkzIDQuNDI5MjlDMTMuNDY4MyA0LjQ2ODM0IDEzLjQ2ODMgNC41MzE2NiAxMy40MjkzIDQuNTcwNzFMMTIuNTcwNyA1LjQyOTI5QzEyLjUzMTcgNS40NjgzNCAxMi40NjgzIDUuNDY4MzQgMTIuNDI5MyA1LjQyOTI5TDExLjA3MDcgNC4wNzA3MUMxMS4wMzE3IDQuMDMxNjYgMTEuMDMxNyAzLjk2ODM0IDExLjA3MDcgMy45MjkyOUwxMS45MjkzIDMuMDcwNzFDMTEuOTY4MyAzLjAzMTY2IDEyLjAzMTcgMy4wMzE2NiAxMi4wNzA3IDMuMDcwNzFaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuNSAxMC45VjkuNTQxNDJDNS41IDkuNTE0OSA1LjUxMDU0IDkuNDg5NDYgNS41MjkyOSA5LjQ3MDcxTDkuNDI5MjkgNS41NzA3MUM5LjQ2ODM0IDUuNTMxNjYgOS41MzE2NiA1LjUzMTY2IDkuNTcwNzEgNS41NzA3MUwxMC45MjkzIDYuOTI5MjlDMTAuOTY4MyA2Ljk2ODM0IDEwLjk2ODMgNy4wMzE2NiAxMC45MjkzIDcuMDcwNzFMNy4wMjkyOSAxMC45NzA3QzcuMDEwNTQgMTAuOTg5NSA2Ljk4NTEgMTEgNi45NTg1OCAxMUg1LjZDNS41NDQ3NyAxMSA1LjUgMTAuOTU1MiA1LjUgMTAuOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/square-pen-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SquarePenFill = createFoamicon('SquarePenFill', __iconNode);
