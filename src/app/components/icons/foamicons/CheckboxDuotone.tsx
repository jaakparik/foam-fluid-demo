import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.5 4.5L8.12275 9.87725C7.91239 10.0876 7.56601 10.0689 7.37957 9.83705L5.5 7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vtwmww'
    }
  ],
  [
    'path',
    {
      d: 'M13 8C13 9.91468 12.7334 11.5361 12.6085 12.1904C12.5722 12.3806 12.4251 12.5262 12.235 12.5629C11.5375 12.6972 9.76875 13 8 13C6.23125 13 4.46249 12.6972 3.76503 12.5629C3.57488 12.5262 3.42776 12.3806 3.39146 12.1904C3.26662 11.5361 3 9.91468 3 8C3 6.08532 3.26662 4.46393 3.39146 3.80965C3.42776 3.61943 3.57488 3.47376 3.76503 3.43715C4.46249 3.30284 6.23125 3 8 3C9.22265 3 10.4453 3.1447 11.3141 3.27842',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e5tlry'
    }
  ]
];

/**
 * @component @name CheckboxDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjUgNC41TDguMTIyNzUgOS44NzcyNUM3LjkxMjM5IDEwLjA4NzYgNy41NjYwMSAxMC4wNjg5IDcuMzc5NTcgOS44MzcwNUw1LjUgNy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMyA4QzEzIDkuOTE0NjggMTIuNzMzNCAxMS41MzYxIDEyLjYwODUgMTIuMTkwNEMxMi41NzIyIDEyLjM4MDYgMTIuNDI1MSAxMi41MjYyIDEyLjIzNSAxMi41NjI5QzExLjUzNzUgMTIuNjk3MiA5Ljc2ODc1IDEzIDggMTNDNi4yMzEyNSAxMyA0LjQ2MjQ5IDEyLjY5NzIgMy43NjUwMyAxMi41NjI5QzMuNTc0ODggMTIuNTI2MiAzLjQyNzc2IDEyLjM4MDYgMy4zOTE0NiAxMi4xOTA0QzMuMjY2NjIgMTEuNTM2MSAzIDkuOTE0NjggMyA4QzMgNi4wODUzMiAzLjI2NjYyIDQuNDYzOTMgMy4zOTE0NiAzLjgwOTY1QzMuNDI3NzYgMy42MTk0MyAzLjU3NDg4IDMuNDczNzYgMy43NjUwMyAzLjQzNzE1QzQuNDYyNDkgMy4zMDI4NCA2LjIzMTI1IDMgOCAzQzkuMjIyNjUgMyAxMC40NDUzIDMuMTQ0NyAxMS4zMTQxIDMuMjc4NDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/checkbox-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const CheckboxDuotone = createFoamicon('CheckboxDuotone', __iconNode);
