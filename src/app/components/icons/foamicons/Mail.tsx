import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 4.5L6.73353 7.96379C7.47026 8.56657 8.52974 8.56657 9.26648 7.96379L13.5 4.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'nwwoju'
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
 * @component @name Mail
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0LjVMNi43MzM1MyA3Ljk2Mzc5QzcuNDcwMjYgOC41NjY1NyA4LjUyOTc0IDguNTY2NTcgOS4yNjY0OCA3Ljk2Mzc5TDEzLjUgNC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yIDQuNzQ0MzlDMiA0LjAwMjc0IDIuNTQyMjggMy4zNzQyOCAzLjI3OTI0IDMuMjkxMDFDNC40MzIzOCAzLjE2MDcxIDYuMjE2MTkgMyA4IDNDOS43ODM4MSAzIDExLjU2NzYgMy4xNjA3MSAxMi43MjA4IDMuMjkxMDFDMTMuNDU3NyAzLjM3NDI4IDE0IDQuMDAyNzQgMTQgNC43NDQzOVYxMS4yNTU2QzE0IDExLjk5NzMgMTMuNDU3NyAxMi42MjU3IDEyLjcyMDggMTIuNzA5QzExLjU2NzYgMTIuODM5MyA5Ljc4MzgxIDEzIDggMTNDNi4yMTYxOSAxMyA0LjQzMjM4IDEyLjgzOTMgMy4yNzkyNCAxMi43MDlDMi41NDIyOCAxMi42MjU3IDIgMTEuOTk3MyAyIDExLjI1NTZWNC43NDQzOVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/mail
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Mail = createFoamicon('Mail', __iconNode);
