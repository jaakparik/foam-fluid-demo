import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.55016 5.86327C2.64817 5.61521 2.90004 5.5 3.16676 5.5H4.92157C5.45201 5.5 5.96071 5.28929 6.33579 4.91421L7.5547 3.6953C7.90686 3.34314 8.54843 3.67408 8.48716 4.16833C8.36659 5.14105 8.25 6.47568 8.25 8C8.25 9.52432 8.36659 10.859 8.48716 11.8317C8.54843 12.3259 7.90686 12.6569 7.5547 12.3047L6.33579 11.0858C5.96071 10.7107 5.45201 10.5 4.92157 10.5H3.16676C2.90004 10.5 2.64817 10.3848 2.55016 10.1367C2.41091 9.78429 2.25 9.13211 2.25 8C2.25 6.86789 2.41091 6.21571 2.55016 5.86327Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'svso8f'
    }
  ],
  [
    'path',
    {
      d: 'M11.75 3.52783C11.8271 3.59687 11.9025 3.66787 11.9759 3.74075C13.0715 4.82783 13.75 6.3347 13.75 8.00004C13.75 9.66538 13.0715 11.1723 11.9759 12.2593C11.9025 12.3322 11.8271 12.4032 11.75 12.4723',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'aan03v'
    }
  ],
  [
    'path',
    {
      d: 'M10.5737 5.16699C11.3004 5.89122 11.75 6.89318 11.75 8.00016C11.75 9.10714 11.3004 10.1091 10.5737 10.8333',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7hlrh3'
    }
  ]
];

/**
 * @component @name Volume2Fill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNTUwMTYgNS44NjMyN0MyLjY0ODE3IDUuNjE1MjEgMi45MDAwNCA1LjUgMy4xNjY3NiA1LjVINC45MjE1N0M1LjQ1MjAxIDUuNSA1Ljk2MDcxIDUuMjg5MjkgNi4zMzU3OSA0LjkxNDIxTDcuNTU0NyAzLjY5NTNDNy45MDY4NiAzLjM0MzE0IDguNTQ4NDMgMy42NzQwOCA4LjQ4NzE2IDQuMTY4MzNDOC4zNjY1OSA1LjE0MTA1IDguMjUgNi40NzU2OCA4LjI1IDhDOC4yNSA5LjUyNDMyIDguMzY2NTkgMTAuODU5IDguNDg3MTYgMTEuODMxN0M4LjU0ODQzIDEyLjMyNTkgNy45MDY4NiAxMi42NTY5IDcuNTU0NyAxMi4zMDQ3TDYuMzM1NzkgMTEuMDg1OEM1Ljk2MDcxIDEwLjcxMDcgNS40NTIwMSAxMC41IDQuOTIxNTcgMTAuNUgzLjE2Njc2QzIuOTAwMDQgMTAuNSAyLjY0ODE3IDEwLjM4NDggMi41NTAxNiAxMC4xMzY3QzIuNDEwOTEgOS43ODQyOSAyLjI1IDkuMTMyMTEgMi4yNSA4QzIuMjUgNi44Njc4OSAyLjQxMDkxIDYuMjE1NzEgMi41NTAxNiA1Ljg2MzI3WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS43NSAzLjUyNzgzQzExLjgyNzEgMy41OTY4NyAxMS45MDI1IDMuNjY3ODcgMTEuOTc1OSAzLjc0MDc1QzEzLjA3MTUgNC44Mjc4MyAxMy43NSA2LjMzNDcgMTMuNzUgOC4wMDAwNEMxMy43NSA5LjY2NTM4IDEzLjA3MTUgMTEuMTcyMyAxMS45NzU5IDEyLjI1OTNDMTEuOTAyNSAxMi4zMzIyIDExLjgyNzEgMTIuNDAzMiAxMS43NSAxMi40NzIzIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC41NzM3IDUuMTY2OTlDMTEuMzAwNCA1Ljg5MTIyIDExLjc1IDYuODkzMTggMTEuNzUgOC4wMDAxNkMxMS43NSA5LjEwNzE0IDExLjMwMDQgMTAuMTA5MSAxMC41NzM3IDEwLjgzMzMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/volume2fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Volume2Fill = createFoamicon('Volume2Fill', __iconNode);
