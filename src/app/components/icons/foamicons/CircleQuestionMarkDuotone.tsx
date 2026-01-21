import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'w97vay'
    }
  ],
  [
    'path',
    {
      d: 'M8.05452 8.86291C8.12044 7.91806 9.21944 7.27066 9.5132 6.95069C9.70825 6.73825 9.82337 6.47638 9.82337 6.19312C9.82337 5.48321 9.1003 4.90771 8.20834 4.90771C7.31638 4.90771 6.5933 5.48321 6.5933 6.19312',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'r7x1g7'
    }
  ],
  [
    'circle',
    {
      cx: '8.06641',
      cy: '10.457',
      r: '0.644531',
      fill: 'currentColor',
      key: 'jlozh7'
    }
  ]
];

/**
 * @component @name CircleQuestionMarkDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjA1NDUyIDguODYyOTFDOC4xMjA0NCA3LjkxODA2IDkuMjE5NDQgNy4yNzA2NiA5LjUxMzIgNi45NTA2OUM5LjcwODI1IDYuNzM4MjUgOS44MjMzNyA2LjQ3NjM4IDkuODIzMzcgNi4xOTMxMkM5LjgyMzM3IDUuNDgzMjEgOS4xMDAzIDQuOTA3NzEgOC4yMDgzNCA0LjkwNzcxQzcuMzE2MzggNC45MDc3MSA2LjU5MzMgNS40ODMyMSA2LjU5MzMgNi4xOTMxMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4LjA2NjQxIiBjeT0iMTAuNDU3IiByPSIwLjY0NDUzMSIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/circle-question-mark-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleQuestionMarkDuotone = createFoamicon('CircleQuestionMarkDuotone', __iconNode);
