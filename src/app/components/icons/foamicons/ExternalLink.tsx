import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7 4C5.63076 4 4.26152 4.18148 3.38927 4.32577C2.81611 4.42059 2.37338 4.86121 2.28326 5.43512C2.15443 6.25552 2 7.54283 2 9C2 10.4572 2.15443 11.7445 2.28326 12.5649C2.37338 13.1388 2.81611 13.5794 3.38927 13.6742C4.26152 13.8185 5.63076 14 7 14C8.36924 14 9.73848 13.8185 10.6107 13.6742C11.1839 13.5794 11.6266 13.1388 11.7167 12.5649C11.8456 11.7445 12 10.4572 12 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bgm6c1'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 2.5L7.72876 8.27124',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2u10s0'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 2H13.25C13.6642 2 14 2.33579 14 2.75V6.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '1i9v2y'
    }
  ]
];

/**
 * @component @name ExternalLink
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgNEM1LjYzMDc2IDQgNC4yNjE1MiA0LjE4MTQ4IDMuMzg5MjcgNC4zMjU3N0MyLjgxNjExIDQuNDIwNTkgMi4zNzMzOCA0Ljg2MTIxIDIuMjgzMjYgNS40MzUxMkMyLjE1NDQzIDYuMjU1NTIgMiA3LjU0MjgzIDIgOUMyIDEwLjQ1NzIgMi4xNTQ0MyAxMS43NDQ1IDIuMjgzMjYgMTIuNTY0OUMyLjM3MzM4IDEzLjEzODggMi44MTYxMSAxMy41Nzk0IDMuMzg5MjcgMTMuNjc0MkM0LjI2MTUyIDEzLjgxODUgNS42MzA3NiAxNCA3IDE0QzguMzY5MjQgMTQgOS43Mzg0OCAxMy44MTg1IDEwLjYxMDcgMTMuNjc0MkMxMS4xODM5IDEzLjU3OTQgMTEuNjI2NiAxMy4xMzg4IDExLjcxNjcgMTIuNTY0OUMxMS44NDU2IDExLjc0NDUgMTIgMTAuNDU3MiAxMiA5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDIuNUw3LjcyODc2IDguMjcxMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuNSAySDEzLjI1QzEzLjY2NDIgMiAxNCAyLjMzNTc5IDE0IDIuNzVWNi41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/external-link
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ExternalLink = createFoamicon('ExternalLink', __iconNode);
