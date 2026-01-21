import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M7.55165 2.56823C7.73506 2.19664 8.26494 2.19664 8.44835 2.56823L9.94378 5.59779C10.0165 5.74521 10.1571 5.84744 10.3198 5.87122L13.6648 6.36014C14.0747 6.42006 14.2381 6.92398 13.9413 7.21306L11.5217 9.56975C11.4038 9.68462 11.35 9.85019 11.3778 10.0125L11.9487 13.3412C12.0188 13.7497 11.59 14.0612 11.2232 13.8683L8.23273 12.2956C8.08703 12.219 7.91297 12.219 7.76727 12.2956L4.77682 13.8683C4.41 14.0612 3.98123 13.7497 4.05129 13.3412L4.62221 10.0125C4.65004 9.85019 4.59621 9.68462 4.47827 9.56975L2.05867 7.21306C1.76188 6.92398 1.92527 6.42006 2.33523 6.36014L5.68018 5.87122C5.84286 5.84744 5.98345 5.74521 6.05622 5.59779L7.55165 2.56823Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'uhb8ky'
    }
  ]
];

/**
 * @component @name Star
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNTUxNjUgMi41NjgyM0M3LjczNTA2IDIuMTk2NjQgOC4yNjQ5NCAyLjE5NjY0IDguNDQ4MzUgMi41NjgyM0w5Ljk0Mzc4IDUuNTk3NzlDMTAuMDE2NSA1Ljc0NTIxIDEwLjE1NzEgNS44NDc0NCAxMC4zMTk4IDUuODcxMjJMMTMuNjY0OCA2LjM2MDE0QzE0LjA3NDcgNi40MjAwNiAxNC4yMzgxIDYuOTIzOTggMTMuOTQxMyA3LjIxMzA2TDExLjUyMTcgOS41Njk3NUMxMS40MDM4IDkuNjg0NjIgMTEuMzUgOS44NTAxOSAxMS4zNzc4IDEwLjAxMjVMMTEuOTQ4NyAxMy4zNDEyQzEyLjAxODggMTMuNzQ5NyAxMS41OSAxNC4wNjEyIDExLjIyMzIgMTMuODY4M0w4LjIzMjczIDEyLjI5NTZDOC4wODcwMyAxMi4yMTkgNy45MTI5NyAxMi4yMTkgNy43NjcyNyAxMi4yOTU2TDQuNzc2ODIgMTMuODY4M0M0LjQxIDE0LjA2MTIgMy45ODEyMyAxMy43NDk3IDQuMDUxMjkgMTMuMzQxMkw0LjYyMjIxIDEwLjAxMjVDNC42NTAwNCA5Ljg1MDE5IDQuNTk2MjEgOS42ODQ2MiA0LjQ3ODI3IDkuNTY5NzVMMi4wNTg2NyA3LjIxMzA2QzEuNzYxODggNi45MjM5OCAxLjkyNTI3IDYuNDIwMDYgMi4zMzUyMyA2LjM2MDE0TDUuNjgwMTggNS44NzEyMkM1Ljg0Mjg2IDUuODQ3NDQgNS45ODM0NSA1Ljc0NTIxIDYuMDU2MjIgNS41OTc3OUw3LjU1MTY1IDIuNTY4MjNaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/star
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Star = createFoamicon('Star', __iconNode);
