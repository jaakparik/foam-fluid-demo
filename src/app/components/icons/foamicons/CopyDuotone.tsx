import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '6',
      y: '2',
      width: '7',
      height: '9',
      rx: '1',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '8dtsp0'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 4H5C4.44772 4 4 4.44772 4 5V12C4 12.5523 4.44772 13 5 13H10C10.5523 13 11 12.5523 11 12V11.5',
      stroke: 'currentColor',
      key: 't532k5'
    }
  ]
];

/**
 * @component @name CopyDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjciIGhlaWdodD0iOSIgcng9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNNS41IDRINUM0LjQ0NzcyIDQgNCA0LjQ0NzcyIDQgNVYxMkM0IDEyLjU1MjMgNC40NDc3MiAxMyA1IDEzSDEwQzEwLjU1MjMgMTMgMTEgMTIuNTUyMyAxMSAxMlYxMS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/copy-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CopyDuotone = createFoamicon('CopyDuotone', __iconNode);
