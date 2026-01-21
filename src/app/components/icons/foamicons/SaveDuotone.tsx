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
      d: 'M5.5 2.5V4.5C5.5 5.05228 5.94772 5.5 6.5 5.5H8.5C9.05228 5.5 9.5 5.05228 9.5 4.5V2.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'g8aw5v'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 13.5V9.5C4.5 8.94772 4.94772 8.5 5.5 8.5H10.5C11.0523 8.5 11.5 8.94772 11.5 9.5V13.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dlqg9y'
    }
  ]
];

/**
 * @component @name SaveDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0QzIuNSAzLjE3MTU3IDMuMTcxNTcgMi41IDQgMi41SDhIMTAuMTM3M0MxMC41MyAyLjUgMTAuOTA3MSAyLjY1NDAxIDExLjE4NzUgMi45Mjg5N0wxMi4xNjggMy44OTAzOUwxMy4wNzE1IDQuODEyNkMxMy4zNDYyIDUuMDkyOTcgMTMuNSA1LjQ2OTgzIDEzLjUgNS44NjIzM1Y4VjEyQzEzLjUgMTIuODI4NCAxMi44Mjg0IDEzLjUgMTIgMTMuNUg0QzMuMTcxNTcgMTMuNSAyLjUgMTIuODI4NCAyLjUgMTJWNFoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuNSAyLjVWNC41QzUuNSA1LjA1MjI4IDUuOTQ3NzIgNS41IDYuNSA1LjVIOC41QzkuMDUyMjggNS41IDkuNSA1LjA1MjI4IDkuNSA0LjVWMi41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUgMTMuNVY5LjVDNC41IDguOTQ3NzIgNC45NDc3MiA4LjUgNS41IDguNUgxMC41QzExLjA1MjMgOC41IDExLjUgOC45NDc3MiAxMS41IDkuNVYxMy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/save-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const SaveDuotone = createFoamicon('SaveDuotone', __iconNode);
