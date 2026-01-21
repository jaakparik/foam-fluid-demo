import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M5.3335 4.66667L7.64661 2.35355C7.84187 2.15829 8.15845 2.15829 8.35372 2.35355L10.6668 4.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9ck8n5'
    }
  ],
  [
    'path',
    {
      d: 'M8.00024 2.66675L8.00024 9.66675',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'jog9cg'
    }
  ],
  [
    'path',
    {
      d: 'M13 6.27271V12.2936C13 13.0185 12.4813 13.6379 11.7625 13.7318C10.8014 13.8573 9.40072 14 8 14C6.59928 14 5.19855 13.8573 4.23755 13.7318C3.51872 13.6379 3 13.0185 3 12.2936V6.27271',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'rz06im'
    }
  ]
];

/**
 * @component @name ShareFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMzMzNSA0LjY2NjY3TDcuNjQ2NjEgMi4zNTM1NUM3Ljg0MTg3IDIuMTU4MjkgOC4xNTg0NSAyLjE1ODI5IDguMzUzNzIgMi4zNTM1NUwxMC42NjY4IDQuNjY2NjciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguMDAwMjQgMi42NjY3NUw4LjAwMDI0IDkuNjY2NzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDYuMjcyNzFWMTIuMjkzNkMxMyAxMy4wMTg1IDEyLjQ4MTMgMTMuNjM3OSAxMS43NjI1IDEzLjczMThDMTAuODAxNCAxMy44NTczIDkuNDAwNzIgMTQgOCAxNEM2LjU5OTI4IDE0IDUuMTk4NTUgMTMuODU3MyA0LjIzNzU1IDEzLjczMThDMy41MTg3MiAxMy42Mzc5IDMgMTMuMDE4NSAzIDEyLjI5MzZWNi4yNzI3MSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/share-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ShareFill = createFoamicon('ShareFill', __iconNode);
