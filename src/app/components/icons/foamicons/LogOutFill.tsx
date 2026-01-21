import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M9.72705 14L5.74417 14C5.00252 14 4.37406 13.4577 4.29078 12.7208C4.16048 11.5676 3.99978 9.78381 3.99978 8C3.99978 6.21619 4.16048 4.43238 4.29078 3.27924C4.37406 2.54228 5.00252 2 5.74417 2L9.72705 2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3k864q'
    }
  ],
  [
    'path',
    {
      d: 'M10.8334 5.33337L12.9697 7.46971C13.2626 7.7626 13.2626 8.23748 12.9697 8.53037L10.8334 10.6667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '5k1qfq'
    }
  ],
  [
    'path',
    {
      d: 'M12.8333 8H7.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'fqvf3y'
    }
  ]
];

/**
 * @component @name LogOutFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzI3MDUgMTRMNS43NDQxNyAxNEM1LjAwMjUyIDE0IDQuMzc0MDYgMTMuNDU3NyA0LjI5MDc4IDEyLjcyMDhDNC4xNjA0OCAxMS41Njc2IDMuOTk5NzggOS43ODM4MSAzLjk5OTc4IDhDMy45OTk3OCA2LjIxNjE5IDQuMTYwNDggNC40MzIzOCA0LjI5MDc4IDMuMjc5MjRDNC4zNzQwNiAyLjU0MjI4IDUuMDAyNTIgMiA1Ljc0NDE3IDJMOS43MjcwNSAyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC44MzM0IDUuMzMzMzdMMTIuOTY5NyA3LjQ2OTcxQzEzLjI2MjYgNy43NjI2IDEzLjI2MjYgOC4yMzc0OCAxMi45Njk3IDguNTMwMzdMMTAuODMzNCAxMC42NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMi44MzMzIDhINy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/log-out-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const LogOutFill = createFoamicon('LogOutFill', __iconNode);
