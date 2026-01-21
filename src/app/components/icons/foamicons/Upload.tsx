import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M4.3335 6.66667L7.64661 3.35355C7.84187 3.15829 8.15845 3.15829 8.35372 3.35355L11.6668 6.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'n06pfr'
    }
  ],
  [
    'path',
    {
      d: 'M8.00025 3.66675L8.00024 10.6667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'w5buar'
    }
  ],
  [
    'path',
    {
      d: 'M14 11.2727V12.2556C14 12.9972 13.4577 13.6257 12.7208 13.709C11.5676 13.8393 9.78381 14 8 14C6.21619 14 4.43238 13.8393 3.27924 13.709C2.54228 13.6257 2 12.9972 2 12.2556V11.2727',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nk6el5'
    }
  ]
];

/**
 * @component @name Upload
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMzMzNSA2LjY2NjY3TDcuNjQ2NjEgMy4zNTM1NUM3Ljg0MTg3IDMuMTU4MjkgOC4xNTg0NSAzLjE1ODI5IDguMzUzNzIgMy4zNTM1NUwxMS42NjY4IDYuNjY2NjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguMDAwMjUgMy42NjY3NUw4LjAwMDI0IDEwLjY2NjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDExLjI3MjdWMTIuMjU1NkMxNCAxMi45OTcyIDEzLjQ1NzcgMTMuNjI1NyAxMi43MjA4IDEzLjcwOUMxMS41Njc2IDEzLjgzOTMgOS43ODM4MSAxNCA4IDE0QzYuMjE2MTkgMTQgNC40MzIzOCAxMy44MzkzIDMuMjc5MjQgMTMuNzA5QzIuNTQyMjggMTMuNjI1NyAyIDEyLjk5NzIgMiAxMi4yNTU2VjExLjI3MjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/upload
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Upload = createFoamicon('Upload', __iconNode);
