import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '7',
      cy: '5.82275',
      r: '1.32275',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'oytpre'
    }
  ],
  [
    'path',
    {
      d: 'M14 14L10.5355 10.5355M10.5355 10.5355C11.4404 9.63071 12 8.38071 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.38071 12 9.63071 11.4404 10.5355 10.5355Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gei9it'
    }
  ],
  [
    'path',
    {
      d: 'M7 9.1001C8.28476 9.1001 9.34317 10.0692 9.48407 11.3163C9.48437 11.319 9.4858 11.3214 9.488 11.3229C9.49357 11.3267 9.49326 11.335 9.48741 11.3383C8.75483 11.7593 7.90553 12 7 12C6.09566 12 5.24739 11.7599 4.51546 11.34V11.3205C4.65446 10.0714 5.7138 9.1001 7 9.1001Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'nmc3ru'
    }
  ],
  [
    'path',
    {
      d: 'M4.51546 11.3205C4.65446 10.0714 5.7138 9.1001 7 9.1001C8.28476 9.1001 9.34317 10.0692 9.48407 11.3163C9.48437 11.319 9.4858 11.3214 9.488 11.3229C9.49357 11.3267 9.49326 11.335 9.48741 11.3383C8.75483 11.7593 7.90553 12 7 12C6.09566 12 5.24739 11.7599 4.51546 11.34M4.51546 11.3205V11.34M4.51546 11.3205C4.52046 11.3205 4.52358 11.3259 4.52108 11.3303L4.51546 11.34',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xfn7o5'
    }
  ]
];

/**
 * @component @name SearchUserDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjUuODIyNzUiIHI9IjEuMzIyNzUiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxNEwxMC41MzU1IDEwLjUzNTVNMTAuNTM1NSAxMC41MzU1QzExLjQ0MDQgOS42MzA3MSAxMiA4LjM4MDcxIDEyIDdDMTIgNC4yMzg1OCA5Ljc2MTQyIDIgNyAyQzQuMjM4NTggMiAyIDQuMjM4NTggMiA3QzIgOS43NjE0MiA0LjIzODU4IDEyIDcgMTJDOC4zODA3MSAxMiA5LjYzMDcxIDExLjQ0MDQgMTAuNTM1NSAxMC41MzU1WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNyA5LjEwMDFDOC4yODQ3NiA5LjEwMDEgOS4zNDMxNyAxMC4wNjkyIDkuNDg0MDcgMTEuMzE2M0M5LjQ4NDM3IDExLjMxOSA5LjQ4NTggMTEuMzIxNCA5LjQ4OCAxMS4zMjI5QzkuNDkzNTcgMTEuMzI2NyA5LjQ5MzI2IDExLjMzNSA5LjQ4NzQxIDExLjMzODNDOC43NTQ4MyAxMS43NTkzIDcuOTA1NTMgMTIgNyAxMkM2LjA5NTY2IDEyIDUuMjQ3MzkgMTEuNzU5OSA0LjUxNTQ2IDExLjM0VjExLjMyMDVDNC42NTQ0NiAxMC4wNzE0IDUuNzEzOCA5LjEwMDEgNyA5LjEwMDFaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNNC41MTU0NiAxMS4zMjA1QzQuNjU0NDYgMTAuMDcxNCA1LjcxMzggOS4xMDAxIDcgOS4xMDAxQzguMjg0NzYgOS4xMDAxIDkuMzQzMTcgMTAuMDY5MiA5LjQ4NDA3IDExLjMxNjNDOS40ODQzNyAxMS4zMTkgOS40ODU4IDExLjMyMTQgOS40ODggMTEuMzIyOUM5LjQ5MzU3IDExLjMyNjcgOS40OTMyNiAxMS4zMzUgOS40ODc0MSAxMS4zMzgzQzguNzU0ODMgMTEuNzU5MyA3LjkwNTUzIDEyIDcgMTJDNi4wOTU2NiAxMiA1LjI0NzM5IDExLjc1OTkgNC41MTU0NiAxMS4zNE00LjUxNTQ2IDExLjMyMDVWMTEuMzRNNC41MTU0NiAxMS4zMjA1QzQuNTIwNDYgMTEuMzIwNSA0LjUyMzU4IDExLjMyNTkgNC41MjEwOCAxMS4zMzAzTDQuNTE1NDYgMTEuMzQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/search-user-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SearchUserDuotone = createFoamicon('SearchUserDuotone', __iconNode);
