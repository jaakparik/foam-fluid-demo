import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11.6667 7.00002L8.35356 10.3131C8.1583 10.5084 7.84171 10.5084 7.64645 10.3131L4.33334 7.00002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9gtc5n'
    }
  ],
  [
    'path',
    {
      d: 'M8 10V3',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '94hz5t'
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
 * @component @name DownloadFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY2NjcgNy4wMDAwMkw4LjM1MzU2IDEwLjMxMzFDOC4xNTgzIDEwLjUwODQgNy44NDE3MSAxMC41MDg0IDcuNjQ2NDUgMTAuMzEzMUw0LjMzMzM0IDcuMDAwMDIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggMTBWMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQgMTEuMjcyN1YxMi4yNTU2QzE0IDEyLjk5NzIgMTMuNDU3NyAxMy42MjU3IDEyLjcyMDggMTMuNzA5QzExLjU2NzYgMTMuODM5MyA5Ljc4MzgxIDE0IDggMTRDNi4yMTYxOSAxNCA0LjQzMjM4IDEzLjgzOTMgMy4yNzkyNCAxMy43MDlDMi41NDIyOCAxMy42MjU3IDIgMTIuOTk3MiAyIDEyLjI1NTZWMTEuMjcyNyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/download-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const DownloadFill = createFoamicon('DownloadFill', __iconNode);
