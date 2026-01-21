import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12 7C12 8.38071 11.4404 9.63071 10.5355 10.5355C9.63071 11.4404 8.38071 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '13mv3g'
    }
  ],
  [
    'path',
    {
      d: 'M14 14L10.5355 10.5355M10.5355 10.5355C11.4404 9.63071 12 8.38071 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.38071 12 9.63071 11.4404 10.5355 10.5355Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gei9it'
    }
  ]
];

/**
 * @component @name SearchDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDdDMTIgOC4zODA3MSAxMS40NDA0IDkuNjMwNzEgMTAuNTM1NSAxMC41MzU1QzkuNjMwNzEgMTEuNDQwNCA4LjM4MDcxIDEyIDcgMTJDNC4yMzg1OCAxMiAyIDkuNzYxNDIgMiA3QzIgNC4yMzg1OCA0LjIzODU4IDIgNyAyQzkuNzYxNDIgMiAxMiA0LjIzODU4IDEyIDdaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNMTQgMTRMMTAuNTM1NSAxMC41MzU1TTEwLjUzNTUgMTAuNTM1NUMxMS40NDA0IDkuNjMwNzEgMTIgOC4zODA3MSAxMiA3QzEyIDQuMjM4NTggOS43NjE0MiAyIDcgMkM0LjIzODU4IDIgMiA0LjIzODU4IDIgN0MyIDkuNzYxNDIgNC4yMzg1OCAxMiA3IDEyQzguMzgwNzEgMTIgOS42MzA3MSAxMS40NDA0IDEwLjUzNTUgMTAuNTM1NVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/search-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SearchDuotone = createFoamicon('SearchDuotone', __iconNode);
