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
      fill: 'currentColor',
      stroke: 'currentColor',
      key: 'j8oguu'
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
 * @component @name CopyFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjciIGhlaWdodD0iOSIgcng9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTUuNSA0SDVDNC40NDc3MiA0IDQgNC40NDc3MiA0IDVWMTJDNCAxMi41NTIzIDQuNDQ3NzIgMTMgNSAxM0gxMEMxMC41NTIzIDEzIDExIDEyLjU1MjMgMTEgMTJWMTEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/copy-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CopyFill = createFoamicon('CopyFill', __iconNode);
