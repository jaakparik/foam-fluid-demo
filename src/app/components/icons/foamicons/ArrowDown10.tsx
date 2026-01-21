import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.66675 11L5.35364 13.3131C5.15837 13.5083 4.84179 13.5083 4.64653 13.3131L2.33341 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '6i2axc'
    }
  ],
  [
    'path',
    {
      d: 'M5 13L5 2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9q2irf'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 2.83H11.8C11.9105 2.83 12 2.91954 12 3.03V6.83M12 6.83H13.5M12 6.83H10.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ufhpz2'
    }
  ],
  [
    'rect',
    {
      x: '10',
      y: '9',
      width: '3.5',
      height: '4.5',
      rx: '1.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'cwpmd'
    }
  ]
];

/**
 * @component @name ArrowDown10
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NzUgMTFMNS4zNTM2NCAxMy4zMTMxQzUuMTU4MzcgMTMuNTA4MyA0Ljg0MTc5IDEzLjUwODMgNC42NDY1MyAxMy4zMTMxTDIuMzMzNDEgMTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUgMTNMNSAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41IDIuODNIMTEuOEMxMS45MTA1IDIuODMgMTIgMi45MTk1NCAxMiAzLjAzVjYuODNNMTIgNi44M0gxMy41TTEyIDYuODNIMTAuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIxMCIgeT0iOSIgd2lkdGg9IjMuNSIgaGVpZ2h0PSI0LjUiIHJ4PSIxLjc1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/arrow-down10
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowDown10 = createFoamicon('ArrowDown10', __iconNode);
