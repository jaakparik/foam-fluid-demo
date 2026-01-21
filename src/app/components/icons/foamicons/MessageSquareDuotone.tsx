import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.79566 5.34648C2.79566 4.24191 3.69175 3.34886 4.79447 3.28506C5.71423 3.23184 6.59712 3.16333 8.23235 3.16333C9.96834 3.16333 10.9226 3.24054 12.0012 3.2947C13.1044 3.35009 14.0005 4.24191 14.0005 5.34648V9.60515C14.0005 10.7097 13.1051 11.6051 12.0005 11.6051H8.73895C8.42048 11.6051 8.12106 11.7568 7.93268 12.0136L6.36241 14.1539C6.24808 14.3097 6.00115 14.2289 6.00115 14.0356V11.8051C6.00115 11.6947 5.91161 11.6051 5.80115 11.6051H4.79566C3.69109 11.6051 2.79566 10.7097 2.79566 9.60515V5.34648Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'k4zi6i'
    }
  ]
];

/**
 * @component @name MessageSquareDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNzk1NjYgNS4zNDY0OEMyLjc5NTY2IDQuMjQxOTEgMy42OTE3NSAzLjM0ODg2IDQuNzk0NDcgMy4yODUwNkM1LjcxNDIzIDMuMjMxODQgNi41OTcxMiAzLjE2MzMzIDguMjMyMzUgMy4xNjMzM0M5Ljk2ODM0IDMuMTYzMzMgMTAuOTIyNiAzLjI0MDU0IDEyLjAwMTIgMy4yOTQ3QzEzLjEwNDQgMy4zNTAwOSAxNC4wMDA1IDQuMjQxOTEgMTQuMDAwNSA1LjM0NjQ4VjkuNjA1MTVDMTQuMDAwNSAxMC43MDk3IDEzLjEwNTEgMTEuNjA1MSAxMi4wMDA1IDExLjYwNTFIOC43Mzg5NUM4LjQyMDQ4IDExLjYwNTEgOC4xMjEwNiAxMS43NTY4IDcuOTMyNjggMTIuMDEzNkw2LjM2MjQxIDE0LjE1MzlDNi4yNDgwOCAxNC4zMDk3IDYuMDAxMTUgMTQuMjI4OSA2LjAwMTE1IDE0LjAzNTZWMTEuODA1MUM2LjAwMTE1IDExLjY5NDcgNS45MTE2MSAxMS42MDUxIDUuODAxMTUgMTEuNjA1MUg0Ljc5NTY2QzMuNjkxMDkgMTEuNjA1MSAyLjc5NTY2IDEwLjcwOTcgMi43OTU2NiA5LjYwNTE1VjUuMzQ2NDhaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/message-square-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MessageSquareDuotone = createFoamicon('MessageSquareDuotone', __iconNode);
