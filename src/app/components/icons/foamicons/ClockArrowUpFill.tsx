import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M8 4.75V8.25L9.25 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7k49yk'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 11.7116L12.0129 9.19995M12.0129 9.19995L14.5 11.7116M12.0129 9.19995L12.0129 14.5116',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '90muk9'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'loyuvl'
    }
  ]
];

/**
 * @component @name ClockArrowUpFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNC43NVY4LjI1TDkuMjUgOSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS41IDExLjcxMTZMMTIuMDEyOSA5LjE5OTk1TTEyLjAxMjkgOS4xOTk5NUwxNC41IDExLjcxMTZNMTIuMDEyOSA5LjE5OTk1TDEyLjAxMjkgMTQuNTExNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQuNSA4QzE0LjUgNC40MTAxNSAxMS41ODk5IDEuNSA4IDEuNUM0LjQxMDE1IDEuNSAxLjUgNC40MTAxNSAxLjUgOEMxLjUgMTEuNTg5OSA0LjQxMDE1IDE0LjUgOCAxNC41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/clock-arrow-up-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ClockArrowUpFill = createFoamicon('ClockArrowUpFill', __iconNode);
