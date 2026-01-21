import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3.2 4.69894C3.2 3.95729 3.74155 3.32886 4.47875 3.24769C5.51778 3.13328 7.05889 3 8.6 3C10.1411 3 11.6822 3.13328 12.7212 3.24769C13.4584 3.32886 14 3.95729 14 4.69894V10.3011C14 11.0427 13.4584 11.6711 12.7213 11.7523C11.6822 11.8667 10.1411 12 8.6 12C7.05889 12 5.51778 11.8667 4.47875 11.7523C3.74155 11.6711 3.2 11.0427 3.2 10.3011V4.69894Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'du7xlc'
    }
  ],
  [
    'path',
    {
      d: 'M3.2 8.39995L4.40598 7.19397C5.20827 6.39168 6.52626 6.45147 7.25262 7.32309L7.36445 7.45729C7.83287 8.01939 8.60995 8.21597 9.28931 7.94423C9.95477 7.67804 10.7158 7.86083 11.1877 8.40022L13.55 11.1',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'o3w2xy'
    }
  ],
  [
    'circle',
    {
      cx: '11.125',
      cy: '5.69995',
      r: '0.75',
      fill: 'currentColor',
      key: 'p6kfs1'
    }
  ],
  [
    'path',
    {
      d: 'M1.19104 5.5144C1.19104 5.5144 1.19101 5.87688 1.19104 6.10915C1.19124 7.42246 1.17849 8.53554 1.23113 9.47261C1.19923 11.9535 2.27253 13.3008 4.55519 13.7588C5.14063 13.8762 5.7439 13.8414 6.50112 13.8626C9.08753 13.8626 9.27153 13.8675 11.1581 13.7588C11.382 13.7459 11.8633 13.707 11.8633 13.707',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      key: 'gk75s9'
    }
  ]
];

/**
 * @component @name Images
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMiA0LjY5ODk0QzMuMiAzLjk1NzI5IDMuNzQxNTUgMy4zMjg4NiA0LjQ3ODc1IDMuMjQ3NjlDNS41MTc3OCAzLjEzMzI4IDcuMDU4ODkgMyA4LjYgM0MxMC4xNDExIDMgMTEuNjgyMiAzLjEzMzI4IDEyLjcyMTIgMy4yNDc2OUMxMy40NTg0IDMuMzI4ODYgMTQgMy45NTcyOSAxNCA0LjY5ODk0VjEwLjMwMTFDMTQgMTEuMDQyNyAxMy40NTg0IDExLjY3MTEgMTIuNzIxMyAxMS43NTIzQzExLjY4MjIgMTEuODY2NyAxMC4xNDExIDEyIDguNiAxMkM3LjA1ODg5IDEyIDUuNTE3NzggMTEuODY2NyA0LjQ3ODc1IDExLjc1MjNDMy43NDE1NSAxMS42NzExIDMuMiAxMS4wNDI3IDMuMiAxMC4zMDExVjQuNjk4OTRaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjIgOC4zOTk5NUw0LjQwNTk4IDcuMTkzOTdDNS4yMDgyNyA2LjM5MTY4IDYuNTI2MjYgNi40NTE0NyA3LjI1MjYyIDcuMzIzMDlMNy4zNjQ0NSA3LjQ1NzI5QzcuODMyODcgOC4wMTkzOSA4LjYwOTk1IDguMjE1OTcgOS4yODkzMSA3Ljk0NDIzQzkuOTU0NzcgNy42NzgwNCAxMC43MTU4IDcuODYwODMgMTEuMTg3NyA4LjQwMDIyTDEzLjU1IDExLjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTEuMTI1IiBjeT0iNS42OTk5NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xLjE5MTA0IDUuNTE0NEMxLjE5MTA0IDUuNTE0NCAxLjE5MTAxIDUuODc2ODggMS4xOTEwNCA2LjEwOTE1QzEuMTkxMjQgNy40MjI0NiAxLjE3ODQ5IDguNTM1NTQgMS4yMzExMyA5LjQ3MjYxQzEuMTk5MjMgMTEuOTUzNSAyLjI3MjUzIDEzLjMwMDggNC41NTUxOSAxMy43NTg4QzUuMTQwNjMgMTMuODc2MiA1Ljc0MzkgMTMuODQxNCA2LjUwMTEyIDEzLjg2MjZDOS4wODc1MyAxMy44NjI2IDkuMjcxNTMgMTMuODY3NSAxMS4xNTgxIDEzLjc1ODhDMTEuMzgyIDEzLjc0NTkgMTEuODYzMyAxMy43MDcgMTEuODYzMyAxMy43MDciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/images
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Images = createFoamicon('Images', __iconNode);
