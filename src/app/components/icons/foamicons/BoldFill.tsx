import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.23624 7.99999H9.23624C9.94348 7.99999 10.6218 8.28094 11.1219 8.78104C11.622 9.28114 11.9029 9.95941 11.9029 10.6667C11.9029 11.3739 11.622 12.0522 11.1219 12.5523C10.6218 13.0524 9.94348 13.3333 9.23624 13.3333H4.9029C4.72609 13.3333 4.55652 13.2631 4.4315 13.1381C4.30647 13.013 4.23624 12.8435 4.23624 12.6667V7.99999ZM4.23624 7.99999V3.33332C4.23624 3.15651 4.30647 2.98694 4.4315 2.86192C4.55652 2.73689 4.72609 2.66666 4.9029 2.66666H8.56957C9.27681 2.66666 9.95509 2.94761 10.4552 3.4477C10.9553 3.9478 11.2362 4.62608 11.2362 5.33332C11.2362 6.04057 10.9553 6.71884 10.4552 7.21894C9.95509 7.71904 9.27681 7.99999 8.56957 7.99999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rbgql7'
    }
  ]
];

/**
 * @component @name BoldFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjM2MjQgNy45OTk5OUg5LjIzNjI0QzkuOTQzNDggNy45OTk5OSAxMC42MjE4IDguMjgwOTQgMTEuMTIxOSA4Ljc4MTA0QzExLjYyMiA5LjI4MTE0IDExLjkwMjkgOS45NTk0MSAxMS45MDI5IDEwLjY2NjdDMTEuOTAyOSAxMS4zNzM5IDExLjYyMiAxMi4wNTIyIDExLjEyMTkgMTIuNTUyM0MxMC42MjE4IDEzLjA1MjQgOS45NDM0OCAxMy4zMzMzIDkuMjM2MjQgMTMuMzMzM0g0LjkwMjlDNC43MjYwOSAxMy4zMzMzIDQuNTU2NTIgMTMuMjYzMSA0LjQzMTUgMTMuMTM4MUM0LjMwNjQ3IDEzLjAxMyA0LjIzNjI0IDEyLjg0MzUgNC4yMzYyNCAxMi42NjY3VjcuOTk5OTlaTTQuMjM2MjQgNy45OTk5OVYzLjMzMzMyQzQuMjM2MjQgMy4xNTY1MSA0LjMwNjQ3IDIuOTg2OTQgNC40MzE1IDIuODYxOTJDNC41NTY1MiAyLjczNjg5IDQuNzI2MDkgMi42NjY2NiA0LjkwMjkgMi42NjY2Nkg4LjU2OTU3QzkuMjc2ODEgMi42NjY2NiA5Ljk1NTA5IDIuOTQ3NjEgMTAuNDU1MiAzLjQ0NzdDMTAuOTU1MyAzLjk0NzggMTEuMjM2MiA0LjYyNjA4IDExLjIzNjIgNS4zMzMzMkMxMS4yMzYyIDYuMDQwNTcgMTAuOTU1MyA2LjcxODg0IDEwLjQ1NTIgNy4yMTg5NEM5Ljk1NTA5IDcuNzE5MDQgOS4yNzY4MSA3Ljk5OTk5IDguNTY5NTcgNy45OTk5OSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/bold-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BoldFill = createFoamicon('BoldFill', __iconNode);
