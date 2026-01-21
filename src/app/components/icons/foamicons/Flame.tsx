import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6789 5.48876C10.6789 2.84913 8.73616 1.49944 7.93088 1.1453C7.89846 1.13105 7.86343 1.15411 7.8635 1.18952C7.86429 1.65667 7.80397 3.98308 5.92814 5.15944C3.01347 6.98729 3.35928 9.33385 3.35928 9.74548C3.35928 10.3383 4.00973 14.0846 8.31587 14.0846C10.0978 14.0846 11.7484 12.5306 12.3421 11.2523C12.9434 9.64866 12.5688 8.20773 12.4062 7.72152C12.3809 7.64595 12.283 7.63528 12.2353 7.69905C11.5472 8.61748 10.2007 9.37035 8.47909 9.43618C8.42468 9.43826 8.40717 9.3616 8.45561 9.33673C9.76971 8.66197 10.6789 7.12849 10.6789 5.48876Z',
      stroke: 'currentColor',
      key: '1mchdx'
    }
  ]
];

/**
 * @component @name Flame
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY3ODkgNS40ODg3NkMxMC42Nzg5IDIuODQ5MTMgOC43MzYxNiAxLjQ5OTQ0IDcuOTMwODggMS4xNDUzQzcuODk4NDYgMS4xMzEwNSA3Ljg2MzQzIDEuMTU0MTEgNy44NjM1IDEuMTg5NTJDNy44NjQyOSAxLjY1NjY3IDcuODAzOTcgMy45ODMwOCA1LjkyODE0IDUuMTU5NDRDMy4wMTM0NyA2Ljk4NzI5IDMuMzU5MjggOS4zMzM4NSAzLjM1OTI4IDkuNzQ1NDhDMy4zNTkyOCAxMC4zMzgzIDQuMDA5NzMgMTQuMDg0NiA4LjMxNTg3IDE0LjA4NDZDMTAuMDk3OCAxNC4wODQ2IDExLjc0ODQgMTIuNTMwNiAxMi4zNDIxIDExLjI1MjNDMTIuOTQzNCA5LjY0ODY2IDEyLjU2ODggOC4yMDc3MyAxMi40MDYyIDcuNzIxNTJDMTIuMzgwOSA3LjY0NTk1IDEyLjI4MyA3LjYzNTI4IDEyLjIzNTMgNy42OTkwNUMxMS41NDcyIDguNjE3NDggMTAuMjAwNyA5LjM3MDM1IDguNDc5MDkgOS40MzYxOEM4LjQyNDY4IDkuNDM4MjYgOC40MDcxNyA5LjM2MTYgOC40NTU2MSA5LjMzNjczQzkuNzY5NzEgOC42NjE5NyAxMC42Nzg5IDcuMTI4NDkgMTAuNjc4OSA1LjQ4ODc2WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/flame
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Flame = createFoamicon('Flame', __iconNode);
