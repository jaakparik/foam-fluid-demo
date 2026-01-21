import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M5.10663 11L3.12133 12.9853',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '832tbe'
    }
  ],
  [
    'path',
    {
      d: 'M3 8.15674L5.88804 7.72834C6.14434 7.69032 6.34438 7.48699 6.37821 7.23009C6.48199 6.44205 6.74655 5.68372 7.1555 5.00215L7.9979 3.59814C8.33262 3.04028 9.10248 2.94551 9.5625 3.40553L12.701 6.54399C13.161 7.00401 13.0662 7.77387 12.5083 8.10859L11.1043 8.95099C10.4228 9.35994 9.66444 9.6245 8.87639 9.72827C8.6195 9.7621 8.41617 9.96214 8.37815 10.2185L7.94975 13.1065L3 8.15674Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '97z5qw'
    }
  ]
];

/**
 * @component @name PinFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTA2NjMgMTFMMy4xMjEzMyAxMi45ODUzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDguMTU2NzRMNS44ODgwNCA3LjcyODM0QzYuMTQ0MzQgNy42OTAzMiA2LjM0NDM4IDcuNDg2OTkgNi4zNzgyMSA3LjIzMDA5QzYuNDgxOTkgNi40NDIwNSA2Ljc0NjU1IDUuNjgzNzIgNy4xNTU1IDUuMDAyMTVMNy45OTc5IDMuNTk4MTRDOC4zMzI2MiAzLjA0MDI4IDkuMTAyNDggMi45NDU1MSA5LjU2MjUgMy40MDU1M0wxMi43MDEgNi41NDM5OUMxMy4xNjEgNy4wMDQwMSAxMy4wNjYyIDcuNzczODcgMTIuNTA4MyA4LjEwODU5TDExLjEwNDMgOC45NTA5OUMxMC40MjI4IDkuMzU5OTQgOS42NjQ0NCA5LjYyNDUgOC44NzYzOSA5LjcyODI3QzguNjE5NSA5Ljc2MjEgOC40MTYxNyA5Ljk2MjE0IDguMzc4MTUgMTAuMjE4NUw3Ljk0OTc1IDEzLjEwNjVMMyA4LjE1Njc0WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/pin-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const PinFill = createFoamicon('PinFill', __iconNode);
