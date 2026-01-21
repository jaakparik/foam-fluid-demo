import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3.83352 3.16596C3.93984 2.7697 4.20859 2.44065 4.60557 2.33703C5.19555 2.18302 6.26224 2 8 2C9.73776 2 10.8044 2.18302 11.3944 2.33703C11.7914 2.44065 12.0602 2.7697 12.1665 3.16596L13.9488 9.80903C13.9828 9.9358 14 10.0665 14 10.1977V12.2027C14 12.9276 13.4821 13.5468 12.7638 13.6449C11.6123 13.8023 9.80617 14 8 14C6.19383 14 4.38766 13.8023 3.23618 13.6449C2.51792 13.5468 2 12.9276 2 12.2027V10.1977C2 10.0665 2.01723 9.9358 2.05124 9.80903L3.83352 3.16596Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xjo7wr'
    }
  ],
  [
    'path',
    {
      d: 'M8 2C5.7388 2 4.61383 2.30988 4.19688 2.46251C4.06845 2.50952 3.97995 2.6202 3.94451 2.75229L2.03517 9.86889C2.01743 9.93503 2.06726 10 2.13574 10H5.83295C6.00082 10 6.15749 10.0842 6.25006 10.2243L6.83351 11.1069C7.42653 12.0041 8.74315 12.0041 9.33617 11.1069L9.91962 10.2243C10.0122 10.0842 10.1689 10 10.3367 10H13.3482C13.677 10 13.9163 9.68803 13.8311 9.37044L12.0555 2.75229C12.0201 2.6202 11.9315 2.50952 11.8031 2.46251C11.3862 2.30988 10.2612 2 8 2Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'tzg9c8'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 8H11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dpcumw'
    }
  ],
  [
    'path',
    {
      d: 'M5 6H11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '96bins'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 4H10.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hesfco'
    }
  ]
];

/**
 * @component @name InboxDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuODMzNTIgMy4xNjU5NkMzLjkzOTg0IDIuNzY5NyA0LjIwODU5IDIuNDQwNjUgNC42MDU1NyAyLjMzNzAzQzUuMTk1NTUgMi4xODMwMiA2LjI2MjI0IDIgOCAyQzkuNzM3NzYgMiAxMC44MDQ0IDIuMTgzMDIgMTEuMzk0NCAyLjMzNzAzQzExLjc5MTQgMi40NDA2NSAxMi4wNjAyIDIuNzY5NyAxMi4xNjY1IDMuMTY1OTZMMTMuOTQ4OCA5LjgwOTAzQzEzLjk4MjggOS45MzU4IDE0IDEwLjA2NjUgMTQgMTAuMTk3N1YxMi4yMDI3QzE0IDEyLjkyNzYgMTMuNDgyMSAxMy41NDY4IDEyLjc2MzggMTMuNjQ0OUMxMS42MTIzIDEzLjgwMjMgOS44MDYxNyAxNCA4IDE0QzYuMTkzODMgMTQgNC4zODc2NiAxMy44MDIzIDMuMjM2MTggMTMuNjQ0OUMyLjUxNzkyIDEzLjU0NjggMiAxMi45Mjc2IDIgMTIuMjAyN1YxMC4xOTc3QzIgMTAuMDY2NSAyLjAxNzIzIDkuOTM1OCAyLjA1MTI0IDkuODA5MDNMMy44MzM1MiAzLjE2NTk2WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAyQzUuNzM4OCAyIDQuNjEzODMgMi4zMDk4OCA0LjE5Njg4IDIuNDYyNTFDNC4wNjg0NSAyLjUwOTUyIDMuOTc5OTUgMi42MjAyIDMuOTQ0NTEgMi43NTIyOUwyLjAzNTE3IDkuODY4ODlDMi4wMTc0MyA5LjkzNTAzIDIuMDY3MjYgMTAgMi4xMzU3NCAxMEg1LjgzMjk1QzYuMDAwODIgMTAgNi4xNTc0OSAxMC4wODQyIDYuMjUwMDYgMTAuMjI0M0w2LjgzMzUxIDExLjEwNjlDNy40MjY1MyAxMi4wMDQxIDguNzQzMTUgMTIuMDA0MSA5LjMzNjE3IDExLjEwNjlMOS45MTk2MiAxMC4yMjQzQzEwLjAxMjIgMTAuMDg0MiAxMC4xNjg5IDEwIDEwLjMzNjcgMTBIMTMuMzQ4MkMxMy42NzcgMTAgMTMuOTE2MyA5LjY4ODAzIDEzLjgzMTEgOS4zNzA0NEwxMi4wNTU1IDIuNzUyMjlDMTIuMDIwMSAyLjYyMDIgMTEuOTMxNSAyLjUwOTUyIDExLjgwMzEgMi40NjI1MUMxMS4zODYyIDIuMzA5ODggMTAuMjYxMiAyIDggMloiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjUgOEgxMS41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDZIMTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuNSA0SDEwLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/inbox-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const InboxDuotone = createFoamicon('InboxDuotone', __iconNode);
