import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6789 5.48876C10.6789 2.84913 8.73616 1.49944 7.93088 1.1453C7.89846 1.13105 7.86343 1.15411 7.86349 1.18952C7.86429 1.65667 7.80396 3.98308 5.92814 5.15944C3.01347 6.98729 3.35928 9.33385 3.35928 9.74548C3.35928 10.3383 4.00973 14.0846 8.31586 14.0846C10.0978 14.0846 11.7484 12.5306 12.3421 11.2523C12.9434 9.64866 12.5687 8.20773 12.4062 7.72152C12.3809 7.64595 12.283 7.63528 12.2353 7.69905C11.5472 8.61748 10.2007 9.37035 8.47909 9.43618C8.42468 9.43826 8.40716 9.3616 8.4556 9.33673C9.7697 8.66197 10.6789 7.12849 10.6789 5.48876Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      key: 'f10b8a'
    }
  ]
];

/**
 * @component @name FlameFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY3ODkgNS40ODg3NkMxMC42Nzg5IDIuODQ5MTMgOC43MzYxNiAxLjQ5OTQ0IDcuOTMwODggMS4xNDUzQzcuODk4NDYgMS4xMzEwNSA3Ljg2MzQzIDEuMTU0MTEgNy44NjM0OSAxLjE4OTUyQzcuODY0MjkgMS42NTY2NyA3LjgwMzk2IDMuOTgzMDggNS45MjgxNCA1LjE1OTQ0QzMuMDEzNDcgNi45ODcyOSAzLjM1OTI4IDkuMzMzODUgMy4zNTkyOCA5Ljc0NTQ4QzMuMzU5MjggMTAuMzM4MyA0LjAwOTczIDE0LjA4NDYgOC4zMTU4NiAxNC4wODQ2QzEwLjA5NzggMTQuMDg0NiAxMS43NDg0IDEyLjUzMDYgMTIuMzQyMSAxMS4yNTIzQzEyLjk0MzQgOS42NDg2NiAxMi41Njg3IDguMjA3NzMgMTIuNDA2MiA3LjcyMTUyQzEyLjM4MDkgNy42NDU5NSAxMi4yODMgNy42MzUyOCAxMi4yMzUzIDcuNjk5MDVDMTEuNTQ3MiA4LjYxNzQ4IDEwLjIwMDcgOS4zNzAzNSA4LjQ3OTA5IDkuNDM2MThDOC40MjQ2OCA5LjQzODI2IDguNDA3MTYgOS4zNjE2IDguNDU1NiA5LjMzNjczQzkuNzY5NyA4LjY2MTk3IDEwLjY3ODkgNy4xMjg0OSAxMC42Nzg5IDUuNDg4NzZaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/flame-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FlameFill = createFoamicon('FlameFill', __iconNode);
