import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.25 3.75425C4.25 3.51212 4.42325 3.30546 4.66273 3.26968C5.31772 3.17183 6.65886 3 8 3C9.34114 3 10.6823 3.17183 11.3373 3.26968C11.5767 3.30546 11.75 3.51212 11.75 3.75425V12.6058C11.75 13.0808 11.1392 13.2977 10.8308 12.9364C9.91058 11.8586 8.55417 10.3889 8 10.3889C7.44583 10.3889 6.08942 11.8586 5.16924 12.9364C4.86081 13.2977 4.25 13.0808 4.25 12.6058V3.75425Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'gme683'
    }
  ]
];

/**
 * @component @name BookmarkDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjUgMy43NTQyNUM0LjI1IDMuNTEyMTIgNC40MjMyNSAzLjMwNTQ2IDQuNjYyNzMgMy4yNjk2OEM1LjMxNzcyIDMuMTcxODMgNi42NTg4NiAzIDggM0M5LjM0MTE0IDMgMTAuNjgyMyAzLjE3MTgzIDExLjMzNzMgMy4yNjk2OEMxMS41NzY3IDMuMzA1NDYgMTEuNzUgMy41MTIxMiAxMS43NSAzLjc1NDI1VjEyLjYwNThDMTEuNzUgMTMuMDgwOCAxMS4xMzkyIDEzLjI5NzcgMTAuODMwOCAxMi45MzY0QzkuOTEwNTggMTEuODU4NiA4LjU1NDE3IDEwLjM4ODkgOCAxMC4zODg5QzcuNDQ1ODMgMTAuMzg4OSA2LjA4OTQyIDExLjg1ODYgNS4xNjkyNCAxMi45MzY0QzQuODYwODEgMTMuMjk3NyA0LjI1IDEzLjA4MDggNC4yNSAxMi42MDU4VjMuNzU0MjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/bookmark-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BookmarkDuotone = createFoamicon('BookmarkDuotone', __iconNode);
