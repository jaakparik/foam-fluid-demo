import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.23624 7.99999H9.23624C9.94349 7.99999 10.6218 8.28094 11.1219 8.78104C11.622 9.28114 11.9029 9.95941 11.9029 10.6667C11.9029 11.3739 11.622 12.0522 11.1219 12.5523C10.6218 13.0524 9.94349 13.3333 9.23624 13.3333H4.90291C4.7261 13.3333 4.55653 13.2631 4.43151 13.1381C4.30648 13.013 4.23624 12.8435 4.23624 12.6667V7.99999ZM4.23624 7.99999V3.33332C4.23624 3.15651 4.30648 2.98694 4.43151 2.86192C4.55653 2.73689 4.7261 2.66666 4.90291 2.66666H8.56958C9.27682 2.66666 9.9551 2.94761 10.4552 3.4477C10.9553 3.9478 11.2362 4.62608 11.2362 5.33332C11.2362 6.04057 10.9553 6.71884 10.4552 7.21894C9.9551 7.71904 9.27682 7.99999 8.56958 7.99999',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'c6qxbr'
    }
  ]
];

/**
 * @component @name BoldDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjM2MjQgNy45OTk5OUg5LjIzNjI0QzkuOTQzNDkgNy45OTk5OSAxMC42MjE4IDguMjgwOTQgMTEuMTIxOSA4Ljc4MTA0QzExLjYyMiA5LjI4MTE0IDExLjkwMjkgOS45NTk0MSAxMS45MDI5IDEwLjY2NjdDMTEuOTAyOSAxMS4zNzM5IDExLjYyMiAxMi4wNTIyIDExLjEyMTkgMTIuNTUyM0MxMC42MjE4IDEzLjA1MjQgOS45NDM0OSAxMy4zMzMzIDkuMjM2MjQgMTMuMzMzM0g0LjkwMjkxQzQuNzI2MSAxMy4zMzMzIDQuNTU2NTMgMTMuMjYzMSA0LjQzMTUxIDEzLjEzODFDNC4zMDY0OCAxMy4wMTMgNC4yMzYyNCAxMi44NDM1IDQuMjM2MjQgMTIuNjY2N1Y3Ljk5OTk5Wk00LjIzNjI0IDcuOTk5OTlWMy4zMzMzMkM0LjIzNjI0IDMuMTU2NTEgNC4zMDY0OCAyLjk4Njk0IDQuNDMxNTEgMi44NjE5MkM0LjU1NjUzIDIuNzM2ODkgNC43MjYxIDIuNjY2NjYgNC45MDI5MSAyLjY2NjY2SDguNTY5NThDOS4yNzY4MiAyLjY2NjY2IDkuOTU1MSAyLjk0NzYxIDEwLjQ1NTIgMy40NDc3QzEwLjk1NTMgMy45NDc4IDExLjIzNjIgNC42MjYwOCAxMS4yMzYyIDUuMzMzMzJDMTEuMjM2MiA2LjA0MDU3IDEwLjk1NTMgNi43MTg4NCAxMC40NTUyIDcuMjE4OTRDOS45NTUxIDcuNzE5MDQgOS4yNzY4MiA3Ljk5OTk5IDguNTY5NTggNy45OTk5OSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/bold-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BoldDuotone = createFoamicon('BoldDuotone', __iconNode);
