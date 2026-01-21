import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.55164 2.56823C7.73506 2.19664 8.26493 2.19664 8.44835 2.56823L9.94377 5.59779C10.0165 5.74521 10.1571 5.84744 10.3198 5.87122L13.6648 6.36014C14.0747 6.42006 14.2381 6.92398 13.9413 7.21306L11.5217 9.56975C11.4038 9.68462 11.35 9.85019 11.3778 10.0125L11.9487 13.3412C12.0188 13.7497 11.59 14.0612 11.2232 13.8683L8.23272 12.2956C8.08703 12.219 7.91296 12.219 7.76727 12.2956L4.77681 13.8683C4.41 14.0612 3.98122 13.7497 4.05128 13.3412L4.6222 10.0125C4.65004 9.85019 4.5962 9.68462 4.47827 9.56975L2.05867 7.21306C1.76187 6.92398 1.92526 6.42006 2.33522 6.36014L5.68018 5.87122C5.84285 5.84744 5.98345 5.74521 6.05622 5.59779L7.55164 2.56823Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'a6hb5m'
    }
  ]
];

/**
 * @component @name StarFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNTUxNjQgMi41NjgyM0M3LjczNTA2IDIuMTk2NjQgOC4yNjQ5MyAyLjE5NjY0IDguNDQ4MzUgMi41NjgyM0w5Ljk0Mzc3IDUuNTk3NzlDMTAuMDE2NSA1Ljc0NTIxIDEwLjE1NzEgNS44NDc0NCAxMC4zMTk4IDUuODcxMjJMMTMuNjY0OCA2LjM2MDE0QzE0LjA3NDcgNi40MjAwNiAxNC4yMzgxIDYuOTIzOTggMTMuOTQxMyA3LjIxMzA2TDExLjUyMTcgOS41Njk3NUMxMS40MDM4IDkuNjg0NjIgMTEuMzUgOS44NTAxOSAxMS4zNzc4IDEwLjAxMjVMMTEuOTQ4NyAxMy4zNDEyQzEyLjAxODggMTMuNzQ5NyAxMS41OSAxNC4wNjEyIDExLjIyMzIgMTMuODY4M0w4LjIzMjcyIDEyLjI5NTZDOC4wODcwMyAxMi4yMTkgNy45MTI5NiAxMi4yMTkgNy43NjcyNyAxMi4yOTU2TDQuNzc2ODEgMTMuODY4M0M0LjQxIDE0LjA2MTIgMy45ODEyMiAxMy43NDk3IDQuMDUxMjggMTMuMzQxMkw0LjYyMjIgMTAuMDEyNUM0LjY1MDA0IDkuODUwMTkgNC41OTYyIDkuNjg0NjIgNC40NzgyNyA5LjU2OTc1TDIuMDU4NjcgNy4yMTMwNkMxLjc2MTg3IDYuOTIzOTggMS45MjUyNiA2LjQyMDA2IDIuMzM1MjIgNi4zNjAxNEw1LjY4MDE4IDUuODcxMjJDNS44NDI4NSA1Ljg0NzQ0IDUuOTgzNDUgNS43NDUyMSA2LjA1NjIyIDUuNTk3NzlMNy41NTE2NCAyLjU2ODIzWiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/star-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const StarFill = createFoamicon('StarFill', __iconNode);
