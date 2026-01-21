import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 6.90909C13 9.60241 10.5121 12.0243 9.0462 13.2176C8.42954 13.7196 7.57046 13.7196 6.9538 13.2176C5.4879 12.0243 3 9.60241 3 6.90909C3 5.60712 3.52678 4.35847 4.46447 3.43784C5.40215 2.51721 6.67392 2 8 2C9.32608 2 10.5979 2.51721 11.5355 3.43784C12.4732 4.35847 13 5.60712 13 6.90909Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'y02cep'
    }
  ],
  [
    'path',
    {
      d: 'M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5ir0gt'
    }
  ]
];

/**
 * @component @name MapPin
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDYuOTA5MDlDMTMgOS42MDI0MSAxMC41MTIxIDEyLjAyNDMgOS4wNDYyIDEzLjIxNzZDOC40Mjk1NCAxMy43MTk2IDcuNTcwNDYgMTMuNzE5NiA2Ljk1MzggMTMuMjE3NkM1LjQ4NzkgMTIuMDI0MyAzIDkuNjAyNDEgMyA2LjkwOTA5QzMgNS42MDcxMiAzLjUyNjc4IDQuMzU4NDcgNC40NjQ0NyAzLjQzNzg0QzUuNDAyMTUgMi41MTcyMSA2LjY3MzkyIDIgOCAyQzkuMzI2MDggMiAxMC41OTc5IDIuNTE3MjEgMTEuNTM1NSAzLjQzNzg0QzEyLjQ3MzIgNC4zNTg0NyAxMyA1LjYwNzEyIDEzIDYuOTA5MDlaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDlDOS4xMDQ1NyA5IDEwIDguMTA0NTcgMTAgN0MxMCA1Ljg5NTQzIDkuMTA0NTcgNSA4IDVDNi44OTU0MyA1IDYgNS44OTU0MyA2IDdDNiA4LjEwNDU3IDYuODk1NDMgOSA4IDlaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/map-pin
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MapPin = createFoamicon('MapPin', __iconNode);
