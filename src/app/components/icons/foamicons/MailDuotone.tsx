import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13.0469 3.375C12.4945 3.18843 9.82812 3 8 3C6.30177 3 4.41427 3.16365 3.24935 3.29457C3.08071 3.31352 2.91672 3.36116 2.77378 3.45263C2.65309 3.52986 2.50771 3.6335 2.38666 3.74785C2.13231 3.9881 2.29275 4.33009 2.56353 4.55166L6.73388 7.96401C7.47045 8.5667 8.52969 8.56687 9.26645 7.96442L13.4495 4.54388C13.7979 4.25899 13.8581 3.87082 13.4821 3.62361C13.2927 3.49915 13.1094 3.39613 13.0469 3.375Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '2qpdsa'
    }
  ],
  [
    'path',
    {
      d: 'M2 4.74439C2 4.00274 2.54228 3.37428 3.27924 3.29101C4.43238 3.16071 6.21619 3 8 3C9.78381 3 11.5676 3.16071 12.7208 3.29101C13.4577 3.37428 14 4.00274 14 4.74439V11.2556C14 11.9973 13.4577 12.6257 12.7208 12.709C11.5676 12.8393 9.78381 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V4.74439Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wsa55e'
    }
  ]
];

/**
 * @component @name MailDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjA0NjkgMy4zNzVDMTIuNDk0NSAzLjE4ODQzIDkuODI4MTIgMyA4IDNDNi4zMDE3NyAzIDQuNDE0MjcgMy4xNjM2NSAzLjI0OTM1IDMuMjk0NTdDMy4wODA3MSAzLjMxMzUyIDIuOTE2NzIgMy4zNjExNiAyLjc3Mzc4IDMuNDUyNjNDMi42NTMwOSAzLjUyOTg2IDIuNTA3NzEgMy42MzM1IDIuMzg2NjYgMy43NDc4NUMyLjEzMjMxIDMuOTg4MSAyLjI5Mjc1IDQuMzMwMDkgMi41NjM1MyA0LjU1MTY2TDYuNzMzODggNy45NjQwMUM3LjQ3MDQ1IDguNTY2NyA4LjUyOTY5IDguNTY2ODcgOS4yNjY0NSA3Ljk2NDQyTDEzLjQ0OTUgNC41NDM4OEMxMy43OTc5IDQuMjU4OTkgMTMuODU4MSAzLjg3MDgyIDEzLjQ4MjEgMy42MjM2MUMxMy4yOTI3IDMuNDk5MTUgMTMuMTA5NCAzLjM5NjEzIDEzLjA0NjkgMy4zNzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiA0Ljc0NDM5QzIgNC4wMDI3NCAyLjU0MjI4IDMuMzc0MjggMy4yNzkyNCAzLjI5MTAxQzQuNDMyMzggMy4xNjA3MSA2LjIxNjE5IDMgOCAzQzkuNzgzODEgMyAxMS41Njc2IDMuMTYwNzEgMTIuNzIwOCAzLjI5MTAxQzEzLjQ1NzcgMy4zNzQyOCAxNCA0LjAwMjc0IDE0IDQuNzQ0MzlWMTEuMjU1NkMxNCAxMS45OTczIDEzLjQ1NzcgMTIuNjI1NyAxMi43MjA4IDEyLjcwOUMxMS41Njc2IDEyLjgzOTMgOS43ODM4MSAxMyA4IDEzQzYuMjE2MTkgMTMgNC40MzIzOCAxMi44MzkzIDMuMjc5MjQgMTIuNzA5QzIuNTQyMjggMTIuNjI1NyAyIDExLjk5NzMgMiAxMS4yNTU2VjQuNzQ0MzlaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/mail-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MailDuotone = createFoamicon('MailDuotone', __iconNode);
