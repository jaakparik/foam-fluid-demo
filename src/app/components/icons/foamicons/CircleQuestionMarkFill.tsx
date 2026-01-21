import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '6',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'd9sdlm'
    }
  ],
  [
    'path',
    {
      d: 'M8.05453 8.86291C8.12045 7.91806 9.21944 7.27066 9.51321 6.95069C9.70825 6.73825 9.82338 6.47638 9.82338 6.19312C9.82338 5.48321 9.1003 4.90771 8.20834 4.90771C7.31638 4.90771 6.59331 5.48321 6.59331 6.19312',
      stroke: 'var(--foamicon-secondary-color, currentColor)',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '48p6l6'
    }
  ],
  [
    'circle',
    {
      cx: '8.06641',
      cy: '10.457',
      r: '0.644531',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      key: '67thqm'
    }
  ]
];

/**
 * @component @name CircleQuestionMarkFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjYiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wNTQ1MyA4Ljg2MjkxQzguMTIwNDUgNy45MTgwNiA5LjIxOTQ0IDcuMjcwNjYgOS41MTMyMSA2Ljk1MDY5QzkuNzA4MjUgNi43MzgyNSA5LjgyMzM4IDYuNDc2MzggOS44MjMzOCA2LjE5MzEyQzkuODIzMzggNS40ODMyMSA5LjEwMDMgNC45MDc3MSA4LjIwODM0IDQuOTA3NzFDNy4zMTYzOCA0LjkwNzcxIDYuNTkzMzEgNS40ODMyMSA2LjU5MzMxIDYuMTkzMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4LjA2NjQxIiBjeT0iMTAuNDU3IiByPSIwLjY0NDUzMSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/circle-question-mark-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CircleQuestionMarkFill = createFoamicon('CircleQuestionMarkFill', __iconNode);
