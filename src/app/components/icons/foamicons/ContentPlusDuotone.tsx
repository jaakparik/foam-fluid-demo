import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '6',
      y: '2',
      width: '8',
      height: '10',
      rx: '1',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'lqpmml'
    }
  ],
  [
    'path',
    {
      d: 'M8.45189 13.6945L5.55412 14.471C5.02065 14.6139 4.47231 14.2974 4.32937 13.7639L2.25882 6.03648C2.11588 5.50302 2.43246 4.95468 2.96593 4.81174L3.93185 4.55292',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f3bcaq'
    }
  ],
  [
    'path',
    {
      d: 'M10 5L10 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'augdms'
    }
  ],
  [
    'path',
    {
      d: 'M12 7H8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'brmtoj'
    }
  ]
];

/**
 * @component @name ContentPlusDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iMTAiIHJ4PSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC40NTE4OSAxMy42OTQ1TDUuNTU0MTIgMTQuNDcxQzUuMDIwNjUgMTQuNjEzOSA0LjQ3MjMxIDE0LjI5NzQgNC4zMjkzNyAxMy43NjM5TDIuMjU4ODIgNi4wMzY0OEMyLjExNTg4IDUuNTAzMDIgMi40MzI0NiA0Ljk1NDY4IDIuOTY1OTMgNC44MTE3NEwzLjkzMTg1IDQuNTUyOTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDVMMTAgOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIgN0g4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/content-plus-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ContentPlusDuotone = createFoamicon('ContentPlusDuotone', __iconNode);
