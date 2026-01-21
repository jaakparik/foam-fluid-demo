import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'mpqwsf'
    }
  ],
  [
    'path',
    {
      d: 'M8.05453 8.86291C8.12045 7.91806 9.21944 7.27066 9.5132 6.95069C9.70825 6.73825 9.82337 6.47638 9.82337 6.19312C9.82337 5.48321 9.1003 4.90771 8.20834 4.90771C7.31638 4.90771 6.5933 5.48321 6.5933 6.19312',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm02st5'
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
 * @component @name CircleQuestionMark
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguMDU0NTMgOC44NjI5MUM4LjEyMDQ1IDcuOTE4MDYgOS4yMTk0NCA3LjI3MDY2IDkuNTEzMiA2Ljk1MDY5QzkuNzA4MjUgNi43MzgyNSA5LjgyMzM3IDYuNDc2MzggOS44MjMzNyA2LjE5MzEyQzkuODIzMzcgNS40ODMyMSA5LjEwMDMgNC45MDc3MSA4LjIwODM0IDQuOTA3NzFDNy4zMTYzOCA0LjkwNzcxIDYuNTkzMyA1LjQ4MzIxIDYuNTkzMyA2LjE5MzEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjguMDY2NDEiIGN5PSIxMC40NTciIHI9IjAuNjQ0NTMxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/circle-question-mark
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleQuestionMark = createFoamicon('CircleQuestionMark', __iconNode);
