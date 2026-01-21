import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.5 8C13.5 9.21074 13.1005 10.3876 12.3634 11.3482C11.6264 12.3087 10.593 12.9992 9.4235 13.3126C8.25402 13.626 7.01382 13.5447 5.89524 13.0813C4.77667 12.618 3.84223 11.7985 3.23686 10.75C2.63149 9.70147 2.38902 8.48249 2.54705 7.28211C2.70509 6.08173 3.25479 4.96703 4.11091 4.11091C4.96703 3.25479 6.08173 2.70509 7.28211 2.54705C8.48249 2.38902 9.70147 2.63149 10.75 3.23686',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'csmnbb'
    }
  ]
];

/**
 * @component @name LoaderCircleFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjUgOEMxMy41IDkuMjEwNzQgMTMuMTAwNSAxMC4zODc2IDEyLjM2MzQgMTEuMzQ4MkMxMS42MjY0IDEyLjMwODcgMTAuNTkzIDEyLjk5OTIgOS40MjM1IDEzLjMxMjZDOC4yNTQwMiAxMy42MjYgNy4wMTM4MiAxMy41NDQ3IDUuODk1MjQgMTMuMDgxM0M0Ljc3NjY3IDEyLjYxOCAzLjg0MjIzIDExLjc5ODUgMy4yMzY4NiAxMC43NUMyLjYzMTQ5IDkuNzAxNDcgMi4zODkwMiA4LjQ4MjQ5IDIuNTQ3MDUgNy4yODIxMUMyLjcwNTA5IDYuMDgxNzMgMy4yNTQ3OSA0Ljk2NzAzIDQuMTEwOTEgNC4xMTA5MUM0Ljk2NzAzIDMuMjU0NzkgNi4wODE3MyAyLjcwNTA5IDcuMjgyMTEgMi41NDcwNUM4LjQ4MjQ5IDIuMzg5MDIgOS43MDE0NyAyLjYzMTQ5IDEwLjc1IDMuMjM2ODYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/loader-circle-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LoaderCircleFill = createFoamicon('LoaderCircleFill', __iconNode);
