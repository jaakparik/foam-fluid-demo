import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.44152C2.5 3.58066 3.06061 2.84096 3.91395 2.72739C4.79328 2.61036 6.12073 2.5 8 2.5C9.87927 2.5 11.2067 2.61036 12.0861 2.72739C12.9394 2.84096 13.5 3.58066 13.5 4.44152V11.5585C13.5 12.4193 12.9394 13.159 12.0861 13.2726C11.2067 13.3896 9.87927 13.5 8 13.5C6.12073 13.5 4.79328 13.3896 3.91395 13.2726C3.06061 13.159 2.5 12.4193 2.5 11.5585V4.44152Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'oh7cjc'
    }
  ],
  [
    'path',
    {
      d: 'M10 2.5V13.5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      key: 'ctqvaa'
    }
  ],
  [
    'path',
    {
      d: 'M6 2.5V13.5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      key: 'cdp7ei'
    }
  ]
];

/**
 * @component @name Columns3Duotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjQ0MTUyQzIuNSAzLjU4MDY2IDMuMDYwNjEgMi44NDA5NiAzLjkxMzk1IDIuNzI3MzlDNC43OTMyOCAyLjYxMDM2IDYuMTIwNzMgMi41IDggMi41QzkuODc5MjcgMi41IDExLjIwNjcgMi42MTAzNiAxMi4wODYxIDIuNzI3MzlDMTIuOTM5NCAyLjg0MDk2IDEzLjUgMy41ODA2NiAxMy41IDQuNDQxNTJWMTEuNTU4NUMxMy41IDEyLjQxOTMgMTIuOTM5NCAxMy4xNTkgMTIuMDg2MSAxMy4yNzI2QzExLjIwNjcgMTMuMzg5NiA5Ljg3OTI3IDEzLjUgOCAxMy41QzYuMTIwNzMgMTMuNSA0Ljc5MzI4IDEzLjM4OTYgMy45MTM5NSAxMy4yNzI2QzMuMDYwNjEgMTMuMTU5IDIuNSAxMi40MTkzIDIuNSAxMS41NTg1VjQuNDQxNTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMi41VjEzLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02IDIuNVYxMy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/columns3duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Columns3Duotone = createFoamicon('Columns3Duotone', __iconNode);
