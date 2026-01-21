import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H8H10.1373C10.53 2.5 10.9071 2.65401 11.1875 2.92897L12.168 3.89039L13.0715 4.8126C13.3462 5.09297 13.5 5.46983 13.5 5.86233V8V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V4Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'k3dqbj'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 5.5H8.5C9.05228 5.5 9.5 5.05228 9.5 4.5V2.5H5.5V4.5C5.5 5.05228 5.94772 5.5 6.5 5.5Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wizdma'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 8.5H5.5C4.94772 8.5 4.5 8.94772 4.5 9.5V13.5H11.5V9.5C11.5 8.94772 11.0523 8.5 10.5 8.5Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7nwbor'
    }
  ]
];

/**
 * @component @name SaveFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0QzIuNSAzLjE3MTU3IDMuMTcxNTcgMi41IDQgMi41SDhIMTAuMTM3M0MxMC41MyAyLjUgMTAuOTA3MSAyLjY1NDAxIDExLjE4NzUgMi45Mjg5N0wxMi4xNjggMy44OTAzOUwxMy4wNzE1IDQuODEyNkMxMy4zNDYyIDUuMDkyOTcgMTMuNSA1LjQ2OTgzIDEzLjUgNS44NjIzM1Y4VjEyQzEzLjUgMTIuODI4NCAxMi44Mjg0IDEzLjUgMTIgMTMuNUg0QzMuMTcxNTcgMTMuNSAyLjUgMTIuODI4NCAyLjUgMTJWNFoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuNSA1LjVIOC41QzkuMDUyMjggNS41IDkuNSA1LjA1MjI4IDkuNSA0LjVWMi41SDUuNVY0LjVDNS41IDUuMDUyMjggNS45NDc3MiA1LjUgNi41IDUuNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNSA4LjVINS41QzQuOTQ3NzIgOC41IDQuNSA4Ljk0NzcyIDQuNSA5LjVWMTMuNUgxMS41VjkuNUMxMS41IDguOTQ3NzIgMTEuMDUyMyA4LjUgMTAuNSA4LjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/save-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SaveFill = createFoamicon('SaveFill', __iconNode);
