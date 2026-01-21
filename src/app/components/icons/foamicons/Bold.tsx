import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.23624 7.99999H9.23624C9.94349 7.99999 10.6218 8.28094 11.1219 8.78104C11.622 9.28114 11.9029 9.95941 11.9029 10.6667C11.9029 11.3739 11.622 12.0522 11.1219 12.5523C10.6218 13.0524 9.94349 13.3333 9.23624 13.3333H4.90291C4.7261 13.3333 4.55653 13.2631 4.43151 13.1381C4.30648 13.013 4.23624 12.8435 4.23624 12.6667V3.33332C4.23624 3.15651 4.30648 2.98694 4.43151 2.86192C4.55653 2.73689 4.7261 2.66666 4.90291 2.66666H8.56958C9.27682 2.66666 9.9551 2.94761 10.4552 3.4477C10.9553 3.9478 11.2362 4.62608 11.2362 5.33332C11.2362 6.04057 10.9553 6.71884 10.4552 7.21894C9.9551 7.71904 9.27682 7.99999 8.56958 7.99999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6n9mth'
    }
  ]
];

/**
 * @component @name Bold
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjM2MjQgNy45OTk5OUg5LjIzNjI0QzkuOTQzNDkgNy45OTk5OSAxMC42MjE4IDguMjgwOTQgMTEuMTIxOSA4Ljc4MTA0QzExLjYyMiA5LjI4MTE0IDExLjkwMjkgOS45NTk0MSAxMS45MDI5IDEwLjY2NjdDMTEuOTAyOSAxMS4zNzM5IDExLjYyMiAxMi4wNTIyIDExLjEyMTkgMTIuNTUyM0MxMC42MjE4IDEzLjA1MjQgOS45NDM0OSAxMy4zMzMzIDkuMjM2MjQgMTMuMzMzM0g0LjkwMjkxQzQuNzI2MSAxMy4zMzMzIDQuNTU2NTMgMTMuMjYzMSA0LjQzMTUxIDEzLjEzODFDNC4zMDY0OCAxMy4wMTMgNC4yMzYyNCAxMi44NDM1IDQuMjM2MjQgMTIuNjY2N1YzLjMzMzMyQzQuMjM2MjQgMy4xNTY1MSA0LjMwNjQ4IDIuOTg2OTQgNC40MzE1MSAyLjg2MTkyQzQuNTU2NTMgMi43MzY4OSA0LjcyNjEgMi42NjY2NiA0LjkwMjkxIDIuNjY2NjZIOC41Njk1OEM5LjI3NjgyIDIuNjY2NjYgOS45NTUxIDIuOTQ3NjEgMTAuNDU1MiAzLjQ0NzdDMTAuOTU1MyAzLjk0NzggMTEuMjM2MiA0LjYyNjA4IDExLjIzNjIgNS4zMzMzMkMxMS4yMzYyIDYuMDQwNTcgMTAuOTU1MyA2LjcxODg0IDEwLjQ1NTIgNy4yMTg5NEM5Ljk1NTEgNy43MTkwNCA5LjI3NjgyIDcuOTk5OTkgOC41Njk1OCA3Ljk5OTk5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/bold
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Bold = createFoamicon('Bold', __iconNode);
