import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.79565 5.34648C2.79565 4.24191 3.69174 3.34886 4.79447 3.28506C5.71423 3.23184 6.59712 3.16333 8.23234 3.16333C9.96833 3.16333 10.9226 3.24054 12.0012 3.2947C13.1044 3.35009 14.0005 4.24191 14.0005 5.34648V9.60515C14.0005 10.7097 13.1051 11.6051 12.0005 11.6051H8.73894C8.42048 11.6051 8.12105 11.7568 7.93267 12.0136L6.3624 14.1539C6.24807 14.3097 6.00114 14.2289 6.00114 14.0356V11.8051C6.00114 11.6947 5.9116 11.6051 5.80114 11.6051H4.79565C3.69108 11.6051 2.79565 10.7097 2.79565 9.60515V5.34648Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5tomtv'
    }
  ]
];

/**
 * @component @name MessageSquareFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNzk1NjUgNS4zNDY0OEMyLjc5NTY1IDQuMjQxOTEgMy42OTE3NCAzLjM0ODg2IDQuNzk0NDcgMy4yODUwNkM1LjcxNDIzIDMuMjMxODQgNi41OTcxMiAzLjE2MzMzIDguMjMyMzQgMy4xNjMzM0M5Ljk2ODMzIDMuMTYzMzMgMTAuOTIyNiAzLjI0MDU0IDEyLjAwMTIgMy4yOTQ3QzEzLjEwNDQgMy4zNTAwOSAxNC4wMDA1IDQuMjQxOTEgMTQuMDAwNSA1LjM0NjQ4VjkuNjA1MTVDMTQuMDAwNSAxMC43MDk3IDEzLjEwNTEgMTEuNjA1MSAxMi4wMDA1IDExLjYwNTFIOC43Mzg5NEM4LjQyMDQ4IDExLjYwNTEgOC4xMjEwNSAxMS43NTY4IDcuOTMyNjcgMTIuMDEzNkw2LjM2MjQgMTQuMTUzOUM2LjI0ODA3IDE0LjMwOTcgNi4wMDExNCAxNC4yMjg5IDYuMDAxMTQgMTQuMDM1NlYxMS44MDUxQzYuMDAxMTQgMTEuNjk0NyA1LjkxMTYgMTEuNjA1MSA1LjgwMTE0IDExLjYwNTFINC43OTU2NUMzLjY5MTA4IDExLjYwNTEgMi43OTU2NSAxMC43MDk3IDIuNzk1NjUgOS42MDUxNVY1LjM0NjQ4WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/message-square-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MessageSquareFill = createFoamicon('MessageSquareFill', __iconNode);
