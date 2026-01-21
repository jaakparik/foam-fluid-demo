import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12.4068 3.375C11.8545 3.18843 9.18808 3 7.35996 3C5.66173 3 3.77423 3.16365 2.6093 3.29457C2.44067 3.31352 2.27667 3.36116 2.13373 3.45263C2.01304 3.52986 1.86767 3.6335 1.74661 3.74785C1.49227 3.9881 1.6527 4.33009 1.92349 4.55166L6.09384 7.96401C6.8304 8.5667 7.88965 8.56687 8.6264 7.96442L12.8095 4.54388C13.1579 4.25899 13.2181 3.87082 12.842 3.62361C12.6527 3.49915 12.4694 3.39613 12.4068 3.375Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'qboogu'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 8V4.74439C13.5 4.00274 12.9577 3.37428 12.2208 3.29101C11.0676 3.16071 9.28381 3 7.5 3C5.71619 3 3.93238 3.16071 2.77924 3.29101C2.04228 3.37428 1.5 4.00274 1.5 4.74439V11.2556C1.5 11.9973 2.04228 12.6257 2.77924 12.709C3.93238 12.8393 5.71619 13 7.5 13C7.9745 13 8.44899 12.9886 8.91162 12.9695',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e5l3we'
    }
  ],
  [
    'path',
    {
      d: 'M13.4116 11V14.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'myh462'
    }
  ],
  [
    'path',
    {
      d: 'M15.1616 12.75L11.6616 12.75',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '83fj8c'
    }
  ]
];

/**
 * @component @name MailPlusDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQwNjggMy4zNzVDMTEuODU0NSAzLjE4ODQzIDkuMTg4MDggMyA3LjM1OTk2IDNDNS42NjE3MyAzIDMuNzc0MjMgMy4xNjM2NSAyLjYwOTMgMy4yOTQ1N0MyLjQ0MDY3IDMuMzEzNTIgMi4yNzY2NyAzLjM2MTE2IDIuMTMzNzMgMy40NTI2M0MyLjAxMzA0IDMuNTI5ODYgMS44Njc2NyAzLjYzMzUgMS43NDY2MSAzLjc0Nzg1QzEuNDkyMjcgMy45ODgxIDEuNjUyNyA0LjMzMDA5IDEuOTIzNDkgNC41NTE2Nkw2LjA5Mzg0IDcuOTY0MDFDNi44MzA0IDguNTY2NyA3Ljg4OTY1IDguNTY2ODcgOC42MjY0IDcuOTY0NDJMMTIuODA5NSA0LjU0Mzg4QzEzLjE1NzkgNC4yNTg5OSAxMy4yMTgxIDMuODcwODIgMTIuODQyIDMuNjIzNjFDMTIuNjUyNyAzLjQ5OTE1IDEyLjQ2OTQgMy4zOTYxMyAxMi40MDY4IDMuMzc1WiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjUgOFY0Ljc0NDM5QzEzLjUgNC4wMDI3NCAxMi45NTc3IDMuMzc0MjggMTIuMjIwOCAzLjI5MTAxQzExLjA2NzYgMy4xNjA3MSA5LjI4MzgxIDMgNy41IDNDNS43MTYxOSAzIDMuOTMyMzggMy4xNjA3MSAyLjc3OTI0IDMuMjkxMDFDMi4wNDIyOCAzLjM3NDI4IDEuNSA0LjAwMjc0IDEuNSA0Ljc0NDM5VjExLjI1NTZDMS41IDExLjk5NzMgMi4wNDIyOCAxMi42MjU3IDIuNzc5MjQgMTIuNzA5QzMuOTMyMzggMTIuODM5MyA1LjcxNjE5IDEzIDcuNSAxM0M3Ljk3NDUgMTMgOC40NDg5OSAxMi45ODg2IDguOTExNjIgMTIuOTY5NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNDExNiAxMVYxNC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNS4xNjE2IDEyLjc1TDExLjY2MTYgMTIuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/mail-plus-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MailPlusDuotone = createFoamicon('MailPlusDuotone', __iconNode);
