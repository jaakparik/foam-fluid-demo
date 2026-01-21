import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6pxmyr'
    }
  ],
  [
    'path',
    {
      d: 'M5.35418 11C4.52375 10.2671 4 9.19469 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 9.11849 11.5409 10.1298 10.8009 10.8557',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'umdn1o'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 12.6904C13.7327 11.5075 14.5 9.84336 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 9.84336 2.26733 11.5075 3.5 12.6904',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '32ez4c'
    }
  ]
];

/**
 * @component @name HotspotFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS4zNTQxOCAxMUM0LjUyMzc1IDEwLjI2NzEgNCA5LjE5NDY5IDQgOEM0IDUuNzkwODYgNS43OTA4NiA0IDggNEMxMC4yMDkxIDQgMTIgNS43OTA4NiAxMiA4QzEyIDkuMTE4NDkgMTEuNTQwOSAxMC4xMjk4IDEwLjgwMDkgMTAuODU1NyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNSAxMi42OTA0QzEzLjczMjcgMTEuNTA3NSAxNC41IDkuODQzMzYgMTQuNSA4QzE0LjUgNC40MTAxNSAxMS41ODk5IDEuNSA4IDEuNUM0LjQxMDE1IDEuNSAxLjUgNC40MTAxNSAxLjUgOEMxLjUgOS44NDMzNiAyLjI2NzMzIDExLjUwNzUgMy41IDEyLjY5MDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/hotspot-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const HotspotFill = createFoamicon('HotspotFill', __iconNode);
