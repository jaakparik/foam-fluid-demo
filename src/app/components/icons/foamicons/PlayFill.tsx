import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M5.19615 4.73205C5.19615 3.96225 6.02949 3.48113 6.69615 3.86603L12.6962 7.33013C13.3628 7.71503 13.3628 8.67728 12.6962 9.06218L6.69615 12.5263C6.02949 12.9112 5.19615 12.4301 5.19615 11.6603L5.19615 4.73205Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'h72nkb'
    }
  ]
];

/**
 * @component @name PlayFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTk2MTUgNC43MzIwNUM1LjE5NjE1IDMuOTYyMjUgNi4wMjk0OSAzLjQ4MTEzIDYuNjk2MTUgMy44NjYwM0wxMi42OTYyIDcuMzMwMTNDMTMuMzYyOCA3LjcxNTAzIDEzLjM2MjggOC42NzcyOCAxMi42OTYyIDkuMDYyMThMNi42OTYxNSAxMi41MjYzQzYuMDI5NDkgMTIuOTExMiA1LjE5NjE1IDEyLjQzMDEgNS4xOTYxNSAxMS42NjAzTDUuMTk2MTUgNC43MzIwNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/play-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const PlayFill = createFoamicon('PlayFill', __iconNode);
