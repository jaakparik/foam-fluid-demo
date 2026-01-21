import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 8C13 11.0376 10.5376 13.5 7.5 13.5C5.18834 13.5 3.56619 12.2471 2.54992 10.3809C2.47093 10.2358 4.73028 10.4917 6.67044 7.55378C8.46277 4.04302 6.50413 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd8km2d'
    }
  ]
];

/**
 * @component @name Moon
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDhDMTMgMTEuMDM3NiAxMC41Mzc2IDEzLjUgNy41IDEzLjVDNS4xODgzNCAxMy41IDMuNTY2MTkgMTIuMjQ3MSAyLjU0OTkyIDEwLjM4MDlDMi40NzA5MyAxMC4yMzU4IDQuNzMwMjggMTAuNDkxNyA2LjY3MDQ0IDcuNTUzNzhDOC40NjI3NyA0LjA0MzAyIDYuNTA0MTMgMi41IDcuNSAyLjVDMTAuNTM3NiAyLjUgMTMgNC45NjI0MyAxMyA4WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/moon
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Moon = createFoamicon('Moon', __iconNode);
