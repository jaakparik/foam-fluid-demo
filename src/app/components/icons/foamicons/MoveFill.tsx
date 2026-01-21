import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6 3.66667L7.31311 2.35355C7.50838 2.15829 7.82496 2.15829 8.02022 2.35355L9.33333 3.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dyc08o'
    }
  ],
  [
    'path',
    {
      d: 'M9.33333 12.0001L8.02022 13.3132C7.82495 13.5085 7.50837 13.5085 7.31311 13.3132L6 12.0001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'je7ivv'
    }
  ],
  [
    'path',
    {
      d: 'M7.66667 2.66675V13.0001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'tc4kw5'
    }
  ],
  [
    'path',
    {
      d: 'M11.6667 6L13.1464 7.47978C13.3417 7.67504 13.3417 7.99162 13.1464 8.18689L11.6667 9.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'am9a89'
    }
  ],
  [
    'path',
    {
      d: 'M3.66666 9.66675L2.18688 8.18697C1.99162 7.99171 1.99162 7.67512 2.18688 7.47986L3.66666 6.00008',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'brdkr4'
    }
  ],
  [
    'path',
    {
      d: 'M12.8333 7.83325L2.5 7.83325',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'arzou2'
    }
  ]
];

/**
 * @component @name MoveFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMy42NjY2N0w3LjMxMzExIDIuMzUzNTVDNy41MDgzOCAyLjE1ODI5IDcuODI0OTYgMi4xNTgyOSA4LjAyMDIyIDIuMzUzNTVMOS4zMzMzMyAzLjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjMzMzMzIDEyLjAwMDFMOC4wMjAyMiAxMy4zMTMyQzcuODI0OTUgMTMuNTA4NSA3LjUwODM3IDEzLjUwODUgNy4zMTMxMSAxMy4zMTMyTDYgMTIuMDAwMSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy42NjY2NyAyLjY2Njc1VjEzLjAwMDEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjY2NjcgNkwxMy4xNDY0IDcuNDc5NzhDMTMuMzQxNyA3LjY3NTA0IDEzLjM0MTcgNy45OTE2MiAxMy4xNDY0IDguMTg2ODlMMTEuNjY2NyA5LjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjY2NjY2IDkuNjY2NzVMMi4xODY4OCA4LjE4Njk3QzEuOTkxNjIgNy45OTE3MSAxLjk5MTYyIDcuNjc1MTIgMi4xODY4OCA3LjQ3OTg2TDMuNjY2NjYgNi4wMDAwOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuODMzMyA3LjgzMzI1TDIuNSA3LjgzMzI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/move-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const MoveFill = createFoamicon('MoveFill', __iconNode);
