import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M15 8C15 9.66667 11.866 13 8 13C4.13401 13 1 9.66667 1 8C1 6.33333 4.13401 3 8 3C11.866 3 15 6.33333 15 8Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kyhq26'
    }
  ],
  [
    'circle',
    {
      cx: '8',
      cy: '8',
      r: '2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '51bw8s'
    }
  ],
  [
    'path',
    {
      d: 'M8 3C11.866 3 15 6.33333 15 8C15 9.66667 11.866 13 8 13C4.13401 13 1 9.66667 1 8C1 6.33333 4.13401 3 8 3ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'e9d8ep'
    }
  ]
];

/**
 * @component @name EyeDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDhDMTUgOS42NjY2NyAxMS44NjYgMTMgOCAxM0M0LjEzNDAxIDEzIDEgOS42NjY2NyAxIDhDMSA2LjMzMzMzIDQuMTM0MDEgMyA4IDNDMTEuODY2IDMgMTUgNi4zMzMzMyAxNSA4WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAzQzExLjg2NiAzIDE1IDYuMzMzMzMgMTUgOEMxNSA5LjY2NjY3IDExLjg2NiAxMyA4IDEzQzQuMTM0MDEgMTMgMSA5LjY2NjY3IDEgOEMxIDYuMzMzMzMgNC4xMzQwMSAzIDggM1pNOCA2QzYuODk1NDMgNiA2IDYuODk1NDMgNiA4QzYgOS4xMDQ1NyA2Ljg5NTQzIDEwIDggMTBDOS4xMDQ1NyAxMCAxMCA5LjEwNDU3IDEwIDhDMTAgNi44OTU0MyA5LjEwNDU3IDYgOCA2WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/eye-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const EyeDuotone = createFoamicon('EyeDuotone', __iconNode);
