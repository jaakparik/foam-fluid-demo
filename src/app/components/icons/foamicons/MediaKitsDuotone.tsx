import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M13 2C13.5523 2 14 2.44772 14 3V11C14 11.5523 13.5523 12 13 12H7C6.44772 12 6 11.5523 6 11V3C6 2.44772 6.44772 2 7 2H13ZM9.90918 7.33887C8.82679 7.33887 8.01953 8.26917 8.01953 9.35156V9.78418C8.01954 9.80398 8.03315 9.82073 8.05273 9.82324C8.22981 9.84407 9.06976 9.9375 9.90918 9.9375C10.748 9.93749 11.5869 9.84414 11.7646 9.82324C11.7845 9.82091 11.7988 9.80412 11.7988 9.78418V9.35156C11.7988 8.26921 10.9915 7.33892 9.90918 7.33887ZM9.90918 4.0625C9.39394 4.0625 8.97656 4.48085 8.97656 4.99609C8.97679 5.51114 9.39408 5.92871 9.90918 5.92871C10.4242 5.92865 10.8416 5.51111 10.8418 4.99609C10.8418 4.48089 10.4244 4.06256 9.90918 4.0625Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 't6jyn3'
    }
  ],
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
      key: 'uw9a55'
    }
  ],
  [
    'path',
    {
      d: 'M8.45189 13.6945L5.55412 14.471C5.02065 14.6139 4.47231 14.2974 4.32937 13.7639L2.25882 6.03648C2.11588 5.50302 2.43246 4.95468 2.96593 4.81174L3.93185 4.55292',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'f3bcar'
    }
  ],
  [
    'circle',
    {
      cx: '9.90907',
      cy: '4.99568',
      r: '0.932931',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'i554du'
    }
  ],
  [
    'path',
    {
      d: 'M8.01911 9.35127C8.01911 8.26888 8.82669 7.3385 9.90908 7.3385C10.9915 7.3385 11.799 8.26888 11.799 9.35127V9.78417C11.799 9.80412 11.7848 9.82085 11.765 9.82318C11.5879 9.844 10.7485 9.93721 9.90908 9.93721C9.06966 9.93721 8.23025 9.844 8.05317 9.82318C8.03337 9.82085 8.01911 9.80412 8.01911 9.78417V9.35127Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'odo1qy'
    }
  ]
];

/**
 * @component @name MediaKitsDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDJDMTMuNTUyMyAyIDE0IDIuNDQ3NzIgMTQgM1YxMUMxNCAxMS41NTIzIDEzLjU1MjMgMTIgMTMgMTJIN0M2LjQ0NzcyIDEyIDYgMTEuNTUyMyA2IDExVjNDNiAyLjQ0NzcyIDYuNDQ3NzIgMiA3IDJIMTNaTTkuOTA5MTggNy4zMzg4N0M4LjgyNjc5IDcuMzM4ODcgOC4wMTk1MyA4LjI2OTE3IDguMDE5NTMgOS4zNTE1NlY5Ljc4NDE4QzguMDE5NTQgOS44MDM5OCA4LjAzMzE1IDkuODIwNzMgOC4wNTI3MyA5LjgyMzI0QzguMjI5ODEgOS44NDQwNyA5LjA2OTc2IDkuOTM3NSA5LjkwOTE4IDkuOTM3NUMxMC43NDggOS45Mzc0OSAxMS41ODY5IDkuODQ0MTQgMTEuNzY0NiA5LjgyMzI0QzExLjc4NDUgOS44MjA5MSAxMS43OTg4IDkuODA0MTIgMTEuNzk4OCA5Ljc4NDE4VjkuMzUxNTZDMTEuNzk4OCA4LjI2OTIxIDEwLjk5MTUgNy4zMzg5MiA5LjkwOTE4IDcuMzM4ODdaTTkuOTA5MTggNC4wNjI1QzkuMzkzOTQgNC4wNjI1IDguOTc2NTYgNC40ODA4NSA4Ljk3NjU2IDQuOTk2MDlDOC45NzY3OSA1LjUxMTE0IDkuMzk0MDggNS45Mjg3MSA5LjkwOTE4IDUuOTI4NzFDMTAuNDI0MiA1LjkyODY1IDEwLjg0MTYgNS41MTExMSAxMC44NDE4IDQuOTk2MDlDMTAuODQxOCA0LjQ4MDg5IDEwLjQyNDQgNC4wNjI1NiA5LjkwOTE4IDQuMDYyNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxyZWN0IHg9IjYiIHk9IjIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEwIiByeD0iMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC40NTE4OSAxMy42OTQ1TDUuNTU0MTIgMTQuNDcxQzUuMDIwNjUgMTQuNjEzOSA0LjQ3MjMxIDE0LjI5NzQgNC4zMjkzNyAxMy43NjM5TDIuMjU4ODIgNi4wMzY0OEMyLjExNTg4IDUuNTAzMDIgMi40MzI0NiA0Ljk1NDY4IDIuOTY1OTMgNC44MTE3NEwzLjkzMTg1IDQuNTUyOTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iOS45MDkwNyIgY3k9IjQuOTk1NjgiIHI9IjAuOTMyOTMxIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjAxOTExIDkuMzUxMjdDOC4wMTkxMSA4LjI2ODg4IDguODI2NjkgNy4zMzg1IDkuOTA5MDggNy4zMzg1QzEwLjk5MTUgNy4zMzg1IDExLjc5OSA4LjI2ODg4IDExLjc5OSA5LjM1MTI3VjkuNzg0MTdDMTEuNzk5IDkuODA0MTIgMTEuNzg0OCA5LjgyMDg1IDExLjc2NSA5LjgyMzE4QzExLjU4NzkgOS44NDQgMTAuNzQ4NSA5LjkzNzIxIDkuOTA5MDggOS45MzcyMUM5LjA2OTY2IDkuOTM3MjEgOC4yMzAyNSA5Ljg0NCA4LjA1MzE3IDkuODIzMThDOC4wMzMzNyA5LjgyMDg1IDguMDE5MTEgOS44MDQxMiA4LjAxOTExIDkuNzg0MTdWOS4zNTEyN1oiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/media-kits-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MediaKitsDuotone = createFoamicon('MediaKitsDuotone', __iconNode);
