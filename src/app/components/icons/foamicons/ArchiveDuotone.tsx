import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.5 11.3426V5.5H2.5V11.3426C2.5 12.317 3.20217 13.1475 4.17017 13.2591C5.20659 13.3786 6.60329 13.5 8 13.5C9.39671 13.5 10.7934 13.3786 11.8298 13.2591C12.7978 13.1475 13.5 12.317 13.5 11.3426Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'xv911y'
    }
  ],
  [
    'path',
    {
      d: 'M1.5 3.11582C1.5 2.84784 1.70959 2.62777 1.97741 2.618C2.99692 2.58079 5.49846 2.5 8 2.5C10.5015 2.5 13.0031 2.58079 14.0226 2.618C14.2904 2.62777 14.5 2.84784 14.5 3.11582V4.88418C14.5 5.15216 14.2904 5.37223 14.0226 5.382C13.0031 5.41921 10.5015 5.5 8 5.5C5.49846 5.5 2.99692 5.41921 1.97741 5.382C1.70959 5.37223 1.5 5.15216 1.5 4.88418V3.11582Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '2rss4c'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 8H9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ust7q1'
    }
  ]
];

/**
 * @component @name ArchiveDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjUgMTEuMzQyNlY1LjVIMi41VjExLjM0MjZDMi41IDEyLjMxNyAzLjIwMjE3IDEzLjE0NzUgNC4xNzAxNyAxMy4yNTkxQzUuMjA2NTkgMTMuMzc4NiA2LjYwMzI5IDEzLjUgOCAxMy41QzkuMzk2NzEgMTMuNSAxMC43OTM0IDEzLjM3ODYgMTEuODI5OCAxMy4yNTkxQzEyLjc5NzggMTMuMTQ3NSAxMy41IDEyLjMxNyAxMy41IDExLjM0MjZaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS41IDMuMTE1ODJDMS41IDIuODQ3ODQgMS43MDk1OSAyLjYyNzc3IDEuOTc3NDEgMi42MThDMi45OTY5MiAyLjU4MDc5IDUuNDk4NDYgMi41IDggMi41QzEwLjUwMTUgMi41IDEzLjAwMzEgMi41ODA3OSAxNC4wMjI2IDIuNjE4QzE0LjI5MDQgMi42Mjc3NyAxNC41IDIuODQ3ODQgMTQuNSAzLjExNTgyVjQuODg0MThDMTQuNSA1LjE1MjE2IDE0LjI5MDQgNS4zNzIyMyAxNC4wMjI2IDUuMzgyQzEzLjAwMzEgNS40MTkyMSAxMC41MDE1IDUuNSA4IDUuNUM1LjQ5ODQ2IDUuNSAyLjk5NjkyIDUuNDE5MjEgMS45Nzc0MSA1LjM4MkMxLjcwOTU5IDUuMzcyMjMgMS41IDUuMTUyMTYgMS41IDQuODg0MThWMy4xMTU4MloiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuNSA4SDkuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/archive-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArchiveDuotone = createFoamicon('ArchiveDuotone', __iconNode);
