import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.02087C2.5 3.2021 3.15565 2.53499 3.97435 2.52549C5.02654 2.51329 6.51327 2.5 8 2.5C9.48673 2.5 10.9735 2.51329 12.0256 2.52549C12.8444 2.53499 13.5 3.2021 13.5 4.02087V11.9791C13.5 12.7979 12.8444 13.465 12.0256 13.4745C10.9735 13.4867 9.48673 13.5 8 13.5C6.51327 13.5 5.02654 13.4867 3.97435 13.4745C3.15565 13.465 2.5 12.7979 2.5 11.9791V4.02087Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e1n8kg'
    }
  ]
];

/**
 * @component @name SquareDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjAyMDg3QzIuNSAzLjIwMjEgMy4xNTU2NSAyLjUzNDk5IDMuOTc0MzUgMi41MjU0OUM1LjAyNjU0IDIuNTEzMjkgNi41MTMyNyAyLjUgOCAyLjVDOS40ODY3MyAyLjUgMTAuOTczNSAyLjUxMzI5IDEyLjAyNTYgMi41MjU0OUMxMi44NDQ0IDIuNTM0OTkgMTMuNSAzLjIwMjEgMTMuNSA0LjAyMDg3VjExLjk3OTFDMTMuNSAxMi43OTc5IDEyLjg0NDQgMTMuNDY1IDEyLjAyNTYgMTMuNDc0NUMxMC45NzM1IDEzLjQ4NjcgOS40ODY3MyAxMy41IDggMTMuNUM2LjUxMzI3IDEzLjUgNS4wMjY1NCAxMy40ODY3IDMuOTc0MzUgMTMuNDc0NUMzLjE1NTY1IDEzLjQ2NSAyLjUgMTIuNzk3OSAyLjUgMTEuOTc5MVY0LjAyMDg3WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/square-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SquareDuotone = createFoamicon('SquareDuotone', __iconNode);
