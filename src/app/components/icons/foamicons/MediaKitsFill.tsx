import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'rect',
    {
      x: '6',
      y: '2',
      width: '8',
      height: '10',
      rx: '1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'uw9a54'
    }
  ],
  [
    'path',
    {
      d: 'M8.45189 13.6945L5.55412 14.471C5.02065 14.6139 4.47231 14.2974 4.32937 13.7639L2.25882 6.03648C2.11588 5.50302 2.43246 4.95468 2.96593 4.81174L3.93185 4.55292',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f3bcaq'
    }
  ],
  [
    'circle',
    {
      cx: '9.90907',
      cy: '4.99568',
      r: '0.932931',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nfygc4'
    }
  ],
  [
    'path',
    {
      d: 'M8.0191 9.35127C8.0191 8.26888 8.82668 7.3385 9.90907 7.3385C10.9915 7.3385 11.799 8.26888 11.799 9.35127V9.78417C11.799 9.80412 11.7848 9.82085 11.765 9.82318C11.5879 9.844 10.7485 9.93721 9.90907 9.93721C9.06966 9.93721 8.23024 9.844 8.05317 9.82318C8.03336 9.82085 8.0191 9.80412 8.0191 9.78417V9.35127Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ftclf3'
    }
  ]
];

/**
 * @component @name MediaKitsFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNiIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iMTAiIHJ4PSIxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQ1MTg5IDEzLjY5NDVMNS41NTQxMiAxNC40NzFDNS4wMjA2NSAxNC42MTM5IDQuNDcyMzEgMTQuMjk3NCA0LjMyOTM3IDEzLjc2MzlMMi4yNTg4MiA2LjAzNjQ4QzIuMTE1ODggNS41MDMwMiAyLjQzMjQ2IDQuOTU0NjggMi45NjU5MyA0LjgxMTc0TDMuOTMxODUgNC41NTI5MiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI5LjkwOTA3IiBjeT0iNC45OTU2OCIgcj0iMC45MzI5MzEiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wMTkxIDkuMzUxMjdDOC4wMTkxIDguMjY4ODggOC44MjY2OCA3LjMzODUgOS45MDkwNyA3LjMzODVDMTAuOTkxNSA3LjMzODUgMTEuNzk5IDguMjY4ODggMTEuNzk5IDkuMzUxMjdWOS43ODQxN0MxMS43OTkgOS44MDQxMiAxMS43ODQ4IDkuODIwODUgMTEuNzY1IDkuODIzMThDMTEuNTg3OSA5Ljg0NCAxMC43NDg1IDkuOTM3MjEgOS45MDkwNyA5LjkzNzIxQzkuMDY5NjYgOS45MzcyMSA4LjIzMDI0IDkuODQ0IDguMDUzMTcgOS44MjMxOEM4LjAzMzM2IDkuODIwODUgOC4wMTkxIDkuODA0MTIgOC4wMTkxIDkuNzg0MTdWOS4zNTEyN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/media-kits-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MediaKitsFill = createFoamicon('MediaKitsFill', __iconNode);
