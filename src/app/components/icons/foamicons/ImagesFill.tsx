import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3.2 4.69894C3.2 3.95729 3.74155 3.32886 4.47875 3.24769C5.51778 3.13328 7.05889 3 8.6 3C10.1411 3 11.6822 3.13328 12.7212 3.24769C13.4584 3.32886 14 3.95729 14 4.69894V10.3011C14 11.0427 13.4584 11.6711 12.7212 11.7523C11.6822 11.8667 10.1411 12 8.6 12C7.05889 12 5.51778 11.8667 4.47875 11.7523C3.74155 11.6711 3.2 11.0427 3.2 10.3011V4.69894Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'bm3cxb'
    }
  ],
  [
    'path',
    {
      d: 'M4.40598 7.19397L3.22655 8.3734C3.20955 8.3904 3.2 8.41346 3.2 8.4375V9.87108C3.2 10.8599 3.92296 11.6984 4.90686 11.7974C5.91717 11.899 7.25858 12 8.6 12C10.7318 12 12.3716 11.7857 12.9675 11.6955C13.1232 11.6719 13.2578 11.5793 13.3398 11.4448C13.4649 11.2396 13.4423 10.9769 13.284 10.796L11.1877 8.40022C10.7158 7.86083 9.95477 7.67804 9.2893 7.94423C8.60994 8.21597 7.83286 8.01939 7.36445 7.45729L7.25262 7.32309C6.52626 6.45147 5.20826 6.39168 4.40598 7.19397Z',
      fill: 'currentColor',
      key: 'cgsviu'
    }
  ],
  [
    'circle',
    {
      cx: '11.125',
      cy: '5.69995',
      r: '0.5',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeWidth: '0.5',
      key: 'mmewxf'
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
 * @component @name ImagesFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMiA0LjY5ODk0QzMuMiAzLjk1NzI5IDMuNzQxNTUgMy4zMjg4NiA0LjQ3ODc1IDMuMjQ3NjlDNS41MTc3OCAzLjEzMzI4IDcuMDU4ODkgMyA4LjYgM0MxMC4xNDExIDMgMTEuNjgyMiAzLjEzMzI4IDEyLjcyMTIgMy4yNDc2OUMxMy40NTg0IDMuMzI4ODYgMTQgMy45NTcyOSAxNCA0LjY5ODk0VjEwLjMwMTFDMTQgMTEuMDQyNyAxMy40NTg0IDExLjY3MTEgMTIuNzIxMiAxMS43NTIzQzExLjY4MjIgMTEuODY2NyAxMC4xNDExIDEyIDguNiAxMkM3LjA1ODg5IDEyIDUuNTE3NzggMTEuODY2NyA0LjQ3ODc1IDExLjc1MjNDMy43NDE1NSAxMS42NzExIDMuMiAxMS4wNDI3IDMuMiAxMC4zMDExVjQuNjk4OTRaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjQwNTk4IDcuMTkzOTdMMy4yMjY1NSA4LjM3MzRDMy4yMDk1NSA4LjM5MDQgMy4yIDguNDEzNDYgMy4yIDguNDM3NVY5Ljg3MTA4QzMuMiAxMC44NTk5IDMuOTIyOTYgMTEuNjk4NCA0LjkwNjg2IDExLjc5NzRDNS45MTcxNyAxMS44OTkgNy4yNTg1OCAxMiA4LjYgMTJDMTAuNzMxOCAxMiAxMi4zNzE2IDExLjc4NTcgMTIuOTY3NSAxMS42OTU1QzEzLjEyMzIgMTEuNjcxOSAxMy4yNTc4IDExLjU3OTMgMTMuMzM5OCAxMS40NDQ4QzEzLjQ2NDkgMTEuMjM5NiAxMy40NDIzIDEwLjk3NjkgMTMuMjg0IDEwLjc5NkwxMS4xODc3IDguNDAwMjJDMTAuNzE1OCA3Ljg2MDgzIDkuOTU0NzcgNy42NzgwNCA5LjI4OTMgNy45NDQyM0M4LjYwOTk0IDguMjE1OTcgNy44MzI4NiA4LjAxOTM5IDcuMzY0NDUgNy40NTcyOUw3LjI1MjYyIDcuMzIzMDlDNi41MjYyNiA2LjQ1MTQ3IDUuMjA4MjYgNi4zOTE2OCA0LjQwNTk4IDcuMTkzOTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPGNpcmNsZSBjeD0iMTEuMTI1IiBjeT0iNS42OTk5NSIgcj0iMC41IiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8cGF0aCBkPSJNMS4xOTEwNCA1LjUxNDRDMS4xOTEwNCA1LjUxNDQgMS4xOTEwMSA1Ljg3Njg4IDEuMTkxMDQgNi4xMDkxNUMxLjE5MTI0IDcuNDIyNDYgMS4xNzg0OSA4LjUzNTU0IDEuMjMxMTMgOS40NzI2MUMxLjE5OTIzIDExLjk1MzUgMi4yNzI1MyAxMy4zMDA4IDQuNTU1MTkgMTMuNzU4OEM1LjE0MDYzIDEzLjg3NjIgNS43NDM5IDEzLjg0MTQgNi41MDExMiAxMy44NjI2QzkuMDg3NTMgMTMuODYyNiA5LjI3MTUzIDEzLjg2NzUgMTEuMTU4MSAxMy43NTg4QzExLjM4MiAxMy43NDU5IDExLjg2MzMgMTMuNzA3IDExLjg2MzMgMTMuNzA3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/images-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ImagesFill = createFoamicon('ImagesFill', __iconNode);
