import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4H13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4b0t9a'
    }
  ],
  [
    'path',
    {
      d: 'M3.27586 4L3.90367 13.1032C3.95791 13.8897 4.61174 14.5 5.40011 14.5H10.5999C11.3883 14.5 12.0421 13.8897 12.0963 13.1032L12.7241 4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kzftu7'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 4V3.5C10.5 2.39543 9.60457 1.5 8.5 1.5H7.5C6.39543 1.5 5.5 2.39543 5.5 3.5V4',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'lygiua'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12L10 6M6.5 12L6 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'vfwkc4'
    }
  ]
];

/**
 * @component @name Trash
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0SDEzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMuMjc1ODYgNEwzLjkwMzY3IDEzLjEwMzJDMy45NTc5MSAxMy44ODk3IDQuNjExNzQgMTQuNSA1LjQwMDExIDE0LjVIMTAuNTk5OUMxMS4zODgzIDE0LjUgMTIuMDQyMSAxMy44ODk3IDEyLjA5NjMgMTMuMTAzMkwxMi43MjQxIDQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjUgNFYzLjVDMTAuNSAyLjM5NTQzIDkuNjA0NTcgMS41IDguNSAxLjVINy41QzYuMzk1NDMgMS41IDUuNSAyLjM5NTQzIDUuNSAzLjVWNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDEyTDEwIDZNNi41IDEyTDYgNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/trash
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Trash = createFoamicon('Trash', __iconNode);
