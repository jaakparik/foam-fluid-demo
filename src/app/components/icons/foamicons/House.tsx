import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 7.35696C2.5 7.12612 2.57775 6.90489 2.72543 6.72747C3.64888 5.61799 7.13471 1.5 8 1.5C8.86529 1.5 12.3511 5.61799 13.2746 6.72747C13.4222 6.90489 13.5 7.12612 13.5 7.35696V12.1654C13.5 12.6487 13.1546 13.0615 12.6764 13.1309C12.2583 13.1916 11.7046 13.2645 11.0708 13.3295C10.4932 13.3887 10 12.9292 10 12.3486V9.49612C10 8.93235 9.53477 8.47607 8.97102 8.48151C8.34823 8.48752 7.58993 8.4922 6.99531 8.49535C6.44452 8.49827 6 8.94539 6 9.49618L6 12.3486C5.99999 12.9292 5.50675 13.3887 4.92916 13.3295C4.2954 13.2645 3.7417 13.1916 3.32363 13.1309C2.84536 13.0615 2.5 12.6487 2.5 12.1654V7.35696Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'yopa5l'
    }
  ]
];

/**
 * @component @name House
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA3LjM1Njk2QzIuNSA3LjEyNjEyIDIuNTc3NzUgNi45MDQ4OSAyLjcyNTQzIDYuNzI3NDdDMy42NDg4OCA1LjYxNzk5IDcuMTM0NzEgMS41IDggMS41QzguODY1MjkgMS41IDEyLjM1MTEgNS42MTc5OSAxMy4yNzQ2IDYuNzI3NDdDMTMuNDIyMiA2LjkwNDg5IDEzLjUgNy4xMjYxMiAxMy41IDcuMzU2OTZWMTIuMTY1NEMxMy41IDEyLjY0ODcgMTMuMTU0NiAxMy4wNjE1IDEyLjY3NjQgMTMuMTMwOUMxMi4yNTgzIDEzLjE5MTYgMTEuNzA0NiAxMy4yNjQ1IDExLjA3MDggMTMuMzI5NUMxMC40OTMyIDEzLjM4ODcgMTAgMTIuOTI5MiAxMCAxMi4zNDg2VjkuNDk2MTJDMTAgOC45MzIzNSA5LjUzNDc3IDguNDc2MDcgOC45NzEwMiA4LjQ4MTUxQzguMzQ4MjMgOC40ODc1MiA3LjU4OTkzIDguNDkyMiA2Ljk5NTMxIDguNDk1MzVDNi40NDQ1MiA4LjQ5ODI3IDYgOC45NDUzOSA2IDkuNDk2MThMNiAxMi4zNDg2QzUuOTk5OTkgMTIuOTI5MiA1LjUwNjc1IDEzLjM4ODcgNC45MjkxNiAxMy4zMjk1QzQuMjk1NCAxMy4yNjQ1IDMuNzQxNyAxMy4xOTE2IDMuMzIzNjMgMTMuMTMwOUMyLjg0NTM2IDEzLjA2MTUgMi41IDEyLjY0ODcgMi41IDEyLjE2NTRWNy4zNTY5NloiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/house
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const House = createFoamicon('House', __iconNode);
