import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6.9 9.5C6.9 9.5 6.8 9.5 6.7 9.5C6.7 9.5 5.1 11.9 5.1 11.5V9.5H3.5C2.7 9.4 2 8.8 2 8V3.7C2 2.5 3 2.3 3.5 2.2C4 2.1 4.9 2 6.7 2C8.5 2 9.2 2 10 2.2C10.8 2.4 11.4 2.60534 11.4 3.7V6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'duq8lp'
    }
  ],
  [
    'path',
    {
      d: 'M8.31142 11.942L10.7971 12C10.8551 12 10.913 12 10.942 12.087C10.942 12.087 12.1594 13.8841 12.2174 13.6812C12.3333 13.3043 12.7101 12.058 12.7101 12.058C12.7101 12.058 12.7101 12.029 12.7391 12.029L13.5217 11.942C14.1884 11.942 14.7101 11.4783 14.7101 10.8116V7.36232C14.7101 6.69565 14.1594 6.14493 13.4928 6.14493C13.4928 6.14493 12.3333 6 10.8551 6C9.37681 6 8.21739 6.14493 8.21739 6.14493C7.55072 6.14493 7 6.69565 7 7.36232V10.8116C7 11.4783 7.57971 11.942 8.24638 11.942L8.31142 11.942Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'u8dcqo'
    }
  ],
  [
    'path',
    {
      d: 'M8.31142 11.942L10.7971 12C10.8551 12 10.913 12 10.942 12.087C10.942 12.087 12.1594 13.8841 12.2174 13.6812C12.3333 13.3043 12.7101 12.058 12.7101 12.058C12.7101 12.058 12.7101 12.029 12.7391 12.029L13.5217 11.942C14.1884 11.942 14.7101 11.4783 14.7101 10.8116V7.36232C14.7101 6.69565 14.1594 6.14493 13.4928 6.14493C13.4928 6.14493 12.3333 6 10.8551 6C9.37681 6 8.21739 6.14493 8.21739 6.14493C7.55072 6.14493 7 6.69565 7 7.36232V10.8116C7 11.4783 7.57971 11.942 8.24638 11.942L8.31142 11.942Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'nwy67s'
    }
  ]
];

/**
 * @component @name MessagesSquareDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOSA5LjVDNi45IDkuNSA2LjggOS41IDYuNyA5LjVDNi43IDkuNSA1LjEgMTEuOSA1LjEgMTEuNVY5LjVIMy41QzIuNyA5LjQgMiA4LjggMiA4VjMuN0MyIDIuNSAzIDIuMyAzLjUgMi4yQzQgMi4xIDQuOSAyIDYuNyAyQzguNSAyIDkuMiAyIDEwIDIuMkMxMC44IDIuNCAxMS40IDIuNjA1MzQgMTEuNCAzLjdWNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMTE0MiAxMS45NDJMMTAuNzk3MSAxMkMxMC44NTUxIDEyIDEwLjkxMyAxMiAxMC45NDIgMTIuMDg3QzEwLjk0MiAxMi4wODcgMTIuMTU5NCAxMy44ODQxIDEyLjIxNzQgMTMuNjgxMkMxMi4zMzMzIDEzLjMwNDMgMTIuNzEwMSAxMi4wNTggMTIuNzEwMSAxMi4wNThDMTIuNzEwMSAxMi4wNTggMTIuNzEwMSAxMi4wMjkgMTIuNzM5MSAxMi4wMjlMMTMuNTIxNyAxMS45NDJDMTQuMTg4NCAxMS45NDIgMTQuNzEwMSAxMS40NzgzIDE0LjcxMDEgMTAuODExNlY3LjM2MjMyQzE0LjcxMDEgNi42OTU2NSAxNC4xNTk0IDYuMTQ0OTMgMTMuNDkyOCA2LjE0NDkzQzEzLjQ5MjggNi4xNDQ5MyAxMi4zMzMzIDYgMTAuODU1MSA2QzkuMzc2ODEgNiA4LjIxNzM5IDYuMTQ0OTMgOC4yMTczOSA2LjE0NDkzQzcuNTUwNzIgNi4xNDQ5MyA3IDYuNjk1NjUgNyA3LjM2MjMyVjEwLjgxMTZDNyAxMS40NzgzIDcuNTc5NzEgMTEuOTQyIDguMjQ2MzggMTEuOTQyTDguMzExNDIgMTEuOTQyWiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4zMTE0MiAxMS45NDJMMTAuNzk3MSAxMkMxMC44NTUxIDEyIDEwLjkxMyAxMiAxMC45NDIgMTIuMDg3QzEwLjk0MiAxMi4wODcgMTIuMTU5NCAxMy44ODQxIDEyLjIxNzQgMTMuNjgxMkMxMi4zMzMzIDEzLjMwNDMgMTIuNzEwMSAxMi4wNTggMTIuNzEwMSAxMi4wNThDMTIuNzEwMSAxMi4wNTggMTIuNzEwMSAxMi4wMjkgMTIuNzM5MSAxMi4wMjlMMTMuNTIxNyAxMS45NDJDMTQuMTg4NCAxMS45NDIgMTQuNzEwMSAxMS40NzgzIDE0LjcxMDEgMTAuODExNlY3LjM2MjMyQzE0LjcxMDEgNi42OTU2NSAxNC4xNTk0IDYuMTQ0OTMgMTMuNDkyOCA2LjE0NDkzQzEzLjQ5MjggNi4xNDQ5MyAxMi4zMzMzIDYgMTAuODU1MSA2QzkuMzc2ODEgNiA4LjIxNzM5IDYuMTQ0OTMgOC4yMTczOSA2LjE0NDkzQzcuNTUwNzIgNi4xNDQ5MyA3IDYuNjk1NjUgNyA3LjM2MjMyVjEwLjgxMTZDNyAxMS40NzgzIDcuNTc5NzEgMTEuOTQyIDguMjQ2MzggMTEuOTQyTDguMzExNDIgMTEuOTQyWiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/messages-square-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MessagesSquareDuotone = createFoamicon('MessagesSquareDuotone', __iconNode);
