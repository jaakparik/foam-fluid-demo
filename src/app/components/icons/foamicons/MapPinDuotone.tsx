import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '9akvrd'
    }
  ],
  [
    'path',
    {
      d: 'M13 6.90909C13 9.60241 10.5121 12.0243 9.0462 13.2176C8.42954 13.7196 7.57046 13.7196 6.9538 13.2176C5.4879 12.0243 3 9.60241 3 6.90909C3 5.60712 3.52678 4.35847 4.46447 3.43784C5.40215 2.51721 6.67392 2 8 2C9.32608 2 10.5979 2.51721 11.5355 3.43784C12.4732 4.35847 13 5.60712 13 6.90909Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'y02ceq'
    }
  ]
];

/**
 * @component @name MapPinDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggOUM5LjEwNDU3IDkgMTAgOC4xMDQ1NyAxMCA3QzEwIDUuODk1NDMgOS4xMDQ1NyA1IDggNUM2Ljg5NTQzIDUgNiA1Ljg5NTQzIDYgN0M2IDguMTA0NTcgNi44OTU0MyA5IDggOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA2LjkwOTA5QzEzIDkuNjAyNDEgMTAuNTEyMSAxMi4wMjQzIDkuMDQ2MiAxMy4yMTc2QzguNDI5NTQgMTMuNzE5NiA3LjU3MDQ2IDEzLjcxOTYgNi45NTM4IDEzLjIxNzZDNS40ODc5IDEyLjAyNDMgMyA5LjYwMjQxIDMgNi45MDkwOUMzIDUuNjA3MTIgMy41MjY3OCA0LjM1ODQ3IDQuNDY0NDcgMy40Mzc4NEM1LjQwMjE1IDIuNTE3MjEgNi42NzM5MiAyIDggMkM5LjMyNjA4IDIgMTAuNTk3OSAyLjUxNzIxIDExLjUzNTUgMy40Mzc4NEMxMi40NzMyIDQuMzU4NDcgMTMgNS42MDcxMiAxMyA2LjkwOTA5WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/map-pin-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MapPinDuotone = createFoamicon('MapPinDuotone', __iconNode);
