import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.78787 4.21213L5.51213 6.48787C5.32314 6.67686 5.45699 7 5.72426 7H10.2757C10.543 7 10.6769 6.67686 10.4879 6.48787L8.21213 4.21213C8.09497 4.09497 7.90503 4.09497 7.78787 4.21213Z',
      fill: 'currentColor',
      key: '1o8qmi'
    }
  ],
  [
    'path',
    {
      d: 'M8.21213 11.7879L10.4879 9.51213C10.6769 9.32314 10.543 9 10.2757 9L5.72426 9C5.45699 9 5.32314 9.32314 5.51213 9.51213L7.78787 11.7879C7.90503 11.905 8.09497 11.905 8.21213 11.7879Z',
      fill: 'currentColor',
      key: 'mn6pqp'
    }
  ]
];

/**
 * @component @name TriangleDownUpDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzg3ODcgNC4yMTIxM0w1LjUxMjEzIDYuNDg3ODdDNS4zMjMxNCA2LjY3Njg2IDUuNDU2OTkgNyA1LjcyNDI2IDdIMTAuMjc1N0MxMC41NDMgNyAxMC42NzY5IDYuNjc2ODYgMTAuNDg3OSA2LjQ4Nzg3TDguMjEyMTMgNC4yMTIxM0M4LjA5NDk3IDQuMDk0OTcgNy45MDUwMyA0LjA5NDk3IDcuNzg3ODcgNC4yMTIxM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNOC4yMTIxMyAxMS43ODc5TDEwLjQ4NzkgOS41MTIxM0MxMC42NzY5IDkuMzIzMTQgMTAuNTQzIDkgMTAuMjc1NyA5TDUuNzI0MjYgOUM1LjQ1Njk5IDkgNS4zMjMxNCA5LjMyMzE0IDUuNTEyMTMgOS41MTIxM0w3Ljc4Nzg3IDExLjc4NzlDNy45MDUwMyAxMS45MDUgOC4wOTQ5NyAxMS45MDUgOC4yMTIxMyAxMS43ODc5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/triangle-down-up-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const TriangleDownUpDuotone = createFoamicon('TriangleDownUpDuotone', __iconNode);
