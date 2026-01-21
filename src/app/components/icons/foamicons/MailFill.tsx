import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 4.74439C2 4.00274 2.54228 3.37428 3.27924 3.29101C4.43238 3.16071 6.21619 3 8 3C9.78381 3 11.5676 3.16071 12.7208 3.29101C13.4577 3.37428 14 4.00274 14 4.74439V11.2556C14 11.9973 13.4577 12.6257 12.7208 12.709C11.5676 12.8393 9.78381 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V4.74439Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wsa55f'
    }
  ],
  [
    'path',
    {
      d: 'M13.0469 3.375C12.4945 3.18843 9.82812 3 8 3C6.30177 3 4.41427 3.16365 3.24935 3.29457C3.08071 3.31352 2.91672 3.36116 2.77378 3.45263C2.65309 3.52986 2.50771 3.6335 2.38666 3.74785C2.13231 3.9881 2.29275 4.33009 2.56353 4.55166L6.73388 7.96401C7.47045 8.5667 8.52969 8.56687 9.26645 7.96442L13.4495 4.54388C13.7979 4.25899 13.8581 3.87082 13.4821 3.62361C13.2927 3.49915 13.1094 3.39613 13.0469 3.375Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'm0ik1j'
    }
  ]
];

/**
 * @component @name MailFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNC43NDQzOUMyIDQuMDAyNzQgMi41NDIyOCAzLjM3NDI4IDMuMjc5MjQgMy4yOTEwMUM0LjQzMjM4IDMuMTYwNzEgNi4yMTYxOSAzIDggM0M5Ljc4MzgxIDMgMTEuNTY3NiAzLjE2MDcxIDEyLjcyMDggMy4yOTEwMUMxMy40NTc3IDMuMzc0MjggMTQgNC4wMDI3NCAxNCA0Ljc0NDM5VjExLjI1NTZDMTQgMTEuOTk3MyAxMy40NTc3IDEyLjYyNTcgMTIuNzIwOCAxMi43MDlDMTEuNTY3NiAxMi44MzkzIDkuNzgzODEgMTMgOCAxM0M2LjIxNjE5IDEzIDQuNDMyMzggMTIuODM5MyAzLjI3OTI0IDEyLjcwOUMyLjU0MjI4IDEyLjYyNTcgMiAxMS45OTczIDIgMTEuMjU1NlY0Ljc0NDM5WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuMDQ2OSAzLjM3NUMxMi40OTQ1IDMuMTg4NDMgOS44MjgxMiAzIDggM0M2LjMwMTc3IDMgNC40MTQyNyAzLjE2MzY1IDMuMjQ5MzUgMy4yOTQ1N0MzLjA4MDcxIDMuMzEzNTIgMi45MTY3MiAzLjM2MTE2IDIuNzczNzggMy40NTI2M0MyLjY1MzA5IDMuNTI5ODYgMi41MDc3MSAzLjYzMzUgMi4zODY2NiAzLjc0Nzg1QzIuMTMyMzEgMy45ODgxIDIuMjkyNzUgNC4zMzAwOSAyLjU2MzUzIDQuNTUxNjZMNi43MzM4OCA3Ljk2NDAxQzcuNDcwNDUgOC41NjY3IDguNTI5NjkgOC41NjY4NyA5LjI2NjQ1IDcuOTY0NDJMMTMuNDQ5NSA0LjU0Mzg4QzEzLjc5NzkgNC4yNTg5OSAxMy44NTgxIDMuODcwODIgMTMuNDgyMSAzLjYyMzYxQzEzLjI5MjcgMy40OTkxNSAxMy4xMDk0IDMuMzk2MTMgMTMuMDQ2OSAzLjM3NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/mail-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MailFill = createFoamicon('MailFill', __iconNode);
