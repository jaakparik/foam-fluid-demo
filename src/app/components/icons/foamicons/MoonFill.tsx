import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 8C13 11.0376 10.5376 13.5 7.5 13.5C5.18833 13.5 3.56619 12.2471 2.54991 10.3809C2.47092 10.2358 4.73028 10.4917 6.67043 7.55378C8.46276 4.04302 6.50413 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ikwh5b'
    }
  ]
];

/**
 * @component @name MoonFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDhDMTMgMTEuMDM3NiAxMC41Mzc2IDEzLjUgNy41IDEzLjVDNS4xODgzMyAxMy41IDMuNTY2MTkgMTIuMjQ3MSAyLjU0OTkxIDEwLjM4MDlDMi40NzA5MiAxMC4yMzU4IDQuNzMwMjggMTAuNDkxNyA2LjY3MDQzIDcuNTUzNzhDOC40NjI3NiA0LjA0MzAyIDYuNTA0MTMgMi41IDcuNSAyLjVDMTAuNTM3NiAyLjUgMTMgNC45NjI0MyAxMyA4WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/moon-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MoonFill = createFoamicon('MoonFill', __iconNode);
