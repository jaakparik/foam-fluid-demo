import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 1.5V2.5M8 13.5V14.5M11.5 11.5L12.5 12.5M3.5 3.5L4.5 4.5M1.5 8H2.5M3.5 12.5L4.5 11.5M14.5 8H13.5M12.5 3.5L11.5 4.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'tq615n'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '2.5',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'q40si0'
    }
  ]
];

/**
 * @component @name SunDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMS41VjIuNU04IDEzLjVWMTQuNU0xMS41IDExLjVMMTIuNSAxMi41TTMuNSAzLjVMNC41IDQuNU0xLjUgOEgyLjVNMy41IDEyLjVMNC41IDExLjVNMTQuNSA4SDEzLjVNMTIuNSAzLjVMMTEuNSA0LjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjIuNSIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/sun-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SunDuotone = createFoamicon('SunDuotone', __iconNode);
