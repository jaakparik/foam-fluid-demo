import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.17 4.66667L4.48311 2.35355C4.67837 2.15829 4.99496 2.15829 5.19022 2.35355L7.50333 4.66667',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'xlly78'
    }
  ],
  [
    'path',
    {
      d: 'M4.83675 2.66663L4.83675 13.6666',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'dscxj6'
    }
  ],
  [
    'path',
    {
      d: 'M13.3333 11.8368H10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'un7qj8'
    }
  ],
  [
    'path',
    {
      d: 'M10 13.17V10.8367C10 10.3947 10.1756 9.97073 10.4882 9.65817C10.8007 9.34561 11.2246 9.17001 11.6667 9.17001C12.1087 9.17001 12.5326 9.34561 12.8452 9.65817C13.1577 9.97073 13.3333 10.3947 13.3333 10.8367V13.17',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'c4og3b'
    }
  ],
  [
    'path',
    {
      d: 'M10 2.82999H12.9063C13.0759 2.82999 13.1685 3.02776 13.06 3.15802L10.2734 6.50195C10.1648 6.63222 10.2574 6.82999 10.427 6.82999H13.3333',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'unoi32'
    }
  ]
];

/**
 * @component @name ArrowUpZADuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMTcgNC42NjY2N0w0LjQ4MzExIDIuMzUzNTVDNC42NzgzNyAyLjE1ODI5IDQuOTk0OTYgMi4xNTgyOSA1LjE5MDIyIDIuMzUzNTVMNy41MDMzMyA0LjY2NjY3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00LjgzNjc1IDIuNjY2NjNMNC44MzY3NSAxMy42NjY2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4zMzMzIDExLjgzNjhIMTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwIDEzLjE3VjEwLjgzNjdDMTAgMTAuMzk0NyAxMC4xNzU2IDkuOTcwNzMgMTAuNDg4MiA5LjY1ODE3QzEwLjgwMDcgOS4zNDU2MSAxMS4yMjQ2IDkuMTcwMDEgMTEuNjY2NyA5LjE3MDAxQzEyLjEwODcgOS4xNzAwMSAxMi41MzI2IDkuMzQ1NjEgMTIuODQ1MiA5LjY1ODE3QzEzLjE1NzcgOS45NzA3MyAxMy4zMzMzIDEwLjM5NDcgMTMuMzMzMyAxMC44MzY3VjEzLjE3IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAyLjgyOTk5SDEyLjkwNjNDMTMuMDc1OSAyLjgyOTk5IDEzLjE2ODUgMy4wMjc3NiAxMy4wNiAzLjE1ODAyTDEwLjI3MzQgNi41MDE5NUMxMC4xNjQ4IDYuNjMyMjIgMTAuMjU3NCA2LjgyOTk5IDEwLjQyNyA2LjgyOTk5SDEzLjMzMzMiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/arrow-up-zaduotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ArrowUpZADuotone = createFoamicon('ArrowUpZADuotone', __iconNode);
