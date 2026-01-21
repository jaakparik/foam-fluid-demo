import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '5.67676',
      cy: '4.52344',
      r: '1.72656',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'eglna4'
    }
  ],
  [
    'circle',
    {
      cx: '11.2344',
      cy: '4.92725',
      r: '1.32275',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8t4ss1'
    }
  ],
  [
    'path',
    {
      d: 'M13.9141 11.7166V11.1028C13.9141 9.56816 12.769 8.24902 11.2344 8.24902C10.984 8.24902 10.7593 8.26215 10.5593 8.28351C9.69289 8.37604 9.04573 9.00709 8.57854 9.74259C8.56356 9.76616 8.56084 9.7955 8.57122 9.82143L9.03857 10.989C9.24959 11.5162 9.74002 11.8832 10.3072 11.9102C10.6047 11.9243 10.9195 11.9336 11.2344 11.9336C12.4245 11.9336 13.6147 11.8014 13.8658 11.7719C13.8939 11.7686 13.9141 11.7449 13.9141 11.7166Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'notv20'
    }
  ],
  [
    'path',
    {
      d: 'M2.08594 12.0742C2.08594 10.0177 3.62032 8.25 5.67685 8.25C7.73337 8.25 9.26776 10.0177 9.26776 12.0742V12.8967C9.26776 12.9346 9.24067 12.9664 9.20304 12.9708C8.8666 13.0104 7.27172 13.1875 5.67685 13.1875C4.08197 13.1875 2.48709 13.0104 2.15066 12.9708C2.11302 12.9664 2.08594 12.9346 2.08594 12.8967V12.0742Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ag9qgl'
    }
  ]
];

/**
 * @component @name UsersFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNS42NzY3NiIgY3k9IjQuNTIzNDQiIHI9IjEuNzI2NTYiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIxMS4yMzQ0IiBjeT0iNC45MjcyNSIgcj0iMS4zMjI3NSIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy45MTQxIDExLjcxNjZWMTEuMTAyOEMxMy45MTQxIDkuNTY4MTYgMTIuNzY5IDguMjQ5MDIgMTEuMjM0NCA4LjI0OTAyQzEwLjk4NCA4LjI0OTAyIDEwLjc1OTMgOC4yNjIxNSAxMC41NTkzIDguMjgzNTFDOS42OTI4OSA4LjM3NjA0IDkuMDQ1NzMgOS4wMDcwOSA4LjU3ODU0IDkuNzQyNTlDOC41NjM1NiA5Ljc2NjE2IDguNTYwODQgOS43OTU1IDguNTcxMjIgOS44MjE0M0w5LjAzODU3IDEwLjk4OUM5LjI0OTU5IDExLjUxNjIgOS43NDAwMiAxMS44ODMyIDEwLjMwNzIgMTEuOTEwMkMxMC42MDQ3IDExLjkyNDMgMTAuOTE5NSAxMS45MzM2IDExLjIzNDQgMTEuOTMzNkMxMi40MjQ1IDExLjkzMzYgMTMuNjE0NyAxMS44MDE0IDEzLjg2NTggMTEuNzcxOUMxMy44OTM5IDExLjc2ODYgMTMuOTE0MSAxMS43NDQ5IDEzLjkxNDEgMTEuNzE2NloiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi4wODU5NCAxMi4wNzQyQzIuMDg1OTQgMTAuMDE3NyAzLjYyMDMyIDguMjUgNS42NzY4NSA4LjI1QzcuNzMzMzcgOC4yNSA5LjI2Nzc2IDEwLjAxNzcgOS4yNjc3NiAxMi4wNzQyVjEyLjg5NjdDOS4yNjc3NiAxMi45MzQ2IDkuMjQwNjcgMTIuOTY2NCA5LjIwMzA0IDEyLjk3MDhDOC44NjY2IDEzLjAxMDQgNy4yNzE3MiAxMy4xODc1IDUuNjc2ODUgMTMuMTg3NUM0LjA4MTk3IDEzLjE4NzUgMi40ODcwOSAxMy4wMTA0IDIuMTUwNjYgMTIuOTcwOEMyLjExMzAyIDEyLjk2NjQgMi4wODU5NCAxMi45MzQ2IDIuMDg1OTQgMTIuODk2N1YxMi4wNzQyWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/users-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UsersFill = createFoamicon('UsersFill', __iconNode);
