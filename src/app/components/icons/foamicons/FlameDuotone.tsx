import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.6789 5.48876C10.6789 2.84913 8.73617 1.49944 7.93088 1.1453C7.89847 1.13105 7.86344 1.15411 7.8635 1.18952C7.8643 1.65667 7.80397 3.98308 5.92815 5.15944C3.01348 6.98729 3.35928 9.33385 3.35928 9.74548C3.35928 10.3383 4.00973 14.0846 8.31587 14.0846C10.0978 14.0846 11.7484 12.5306 12.3421 11.2523C12.9434 9.64866 12.5688 8.20773 12.4062 7.72152C12.3809 7.64595 12.283 7.63528 12.2353 7.69905C11.5472 8.61748 10.2007 9.37035 8.4791 9.43618C8.42469 9.43826 8.40717 9.3616 8.45561 9.33673C9.76971 8.66197 10.6789 7.12849 10.6789 5.48876Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'in4f82'
    }
  ]
];

/**
 * @component @name FlameDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjY3ODkgNS40ODg3NkMxMC42Nzg5IDIuODQ5MTMgOC43MzYxNyAxLjQ5OTQ0IDcuOTMwODggMS4xNDUzQzcuODk4NDcgMS4xMzEwNSA3Ljg2MzQ0IDEuMTU0MTEgNy44NjM1IDEuMTg5NTJDNy44NjQzIDEuNjU2NjcgNy44MDM5NyAzLjk4MzA4IDUuOTI4MTUgNS4xNTk0NEMzLjAxMzQ4IDYuOTg3MjkgMy4zNTkyOCA5LjMzMzg1IDMuMzU5MjggOS43NDU0OEMzLjM1OTI4IDEwLjMzODMgNC4wMDk3MyAxNC4wODQ2IDguMzE1ODcgMTQuMDg0NkMxMC4wOTc4IDE0LjA4NDYgMTEuNzQ4NCAxMi41MzA2IDEyLjM0MjEgMTEuMjUyM0MxMi45NDM0IDkuNjQ4NjYgMTIuNTY4OCA4LjIwNzczIDEyLjQwNjIgNy43MjE1MkMxMi4zODA5IDcuNjQ1OTUgMTIuMjgzIDcuNjM1MjggMTIuMjM1MyA3LjY5OTA1QzExLjU0NzIgOC42MTc0OCAxMC4yMDA3IDkuMzcwMzUgOC40NzkxIDkuNDM2MThDOC40MjQ2OSA5LjQzODI2IDguNDA3MTcgOS4zNjE2IDguNDU1NjEgOS4zMzY3M0M5Ljc2OTcxIDguNjYxOTcgMTAuNjc4OSA3LjEyODQ5IDEwLjY3ODkgNS40ODg3NloiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/flame-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const FlameDuotone = createFoamicon('FlameDuotone', __iconNode);
