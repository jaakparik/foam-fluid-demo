import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12.2426 12.2426C9.89949 14.5858 6.10051 14.5858 3.75736 12.2426C1.41421 9.89949 1.41421 6.1005 3.75736 3.75735M12.2426 12.2426C14.5858 9.89949 14.5858 6.1005 12.2426 3.75735C9.89949 1.4142 6.10051 1.4142 3.75736 3.75735M12.2426 12.2426L3.75736 3.75735',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5twfxo'
    }
  ]
];

/**
 * @component @name Ban
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjI0MjYgMTIuMjQyNkM5Ljg5OTQ5IDE0LjU4NTggNi4xMDA1MSAxNC41ODU4IDMuNzU3MzYgMTIuMjQyNkMxLjQxNDIxIDkuODk5NDkgMS40MTQyMSA2LjEwMDUgMy43NTczNiAzLjc1NzM1TTEyLjI0MjYgMTIuMjQyNkMxNC41ODU4IDkuODk5NDkgMTQuNTg1OCA2LjEwMDUgMTIuMjQyNiAzLjc1NzM1QzkuODk5NDkgMS40MTQyIDYuMTAwNTEgMS40MTQyIDMuNzU3MzYgMy43NTczNU0xMi4yNDI2IDEyLjI0MjZMMy43NTczNiAzLjc1NzM1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/ban
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Ban = createFoamicon('Ban', __iconNode);
