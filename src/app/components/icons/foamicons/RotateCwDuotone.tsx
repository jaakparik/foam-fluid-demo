import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M10.8233 2.31184L11.2918 4.06047C11.3633 4.3272 11.205 4.60137 10.9383 4.67284L9.18965 5.14138',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '3cfrwy'
    }
  ],
  [
    'path',
    {
      d: 'M12.8064 6.8604C13.5214 9.52882 11.9378 12.2716 9.26941 12.9866C7.6229 13.4278 5.94807 12.9939 4.73878 11.9699M3.14318 9.44964C2.42818 6.78122 4.01174 4.03842 6.68016 3.32341C8.32508 2.88266 9.99827 3.31535 11.2073 4.33719',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'que4r6'
    }
  ],
  [
    'path',
    {
      d: 'M11.5117 11.6919C9.55829 13.6453 6.39117 13.6453 4.43775 11.6919C3.23242 10.4865 2.77082 8.8191 3.05295 7.25984',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '4glrrh'
    }
  ]
];

/**
 * @component @name RotateCwDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjgyMzMgMi4zMTE4NEwxMS4yOTE4IDQuMDYwNDdDMTEuMzYzMyA0LjMyNzIgMTEuMjA1IDQuNjAxMzcgMTAuOTM4MyA0LjY3Mjg0TDkuMTg5NjUgNS4xNDEzOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuODA2NCA2Ljg2MDRDMTMuNTIxNCA5LjUyODgyIDExLjkzNzggMTIuMjcxNiA5LjI2OTQxIDEyLjk4NjZDNy42MjI5IDEzLjQyNzggNS45NDgwNyAxMi45OTM5IDQuNzM4NzggMTEuOTY5OU0zLjE0MzE4IDkuNDQ5NjRDMi40MjgxOCA2Ljc4MTIyIDQuMDExNzQgNC4wMzg0MiA2LjY4MDE2IDMuMzIzNDFDOC4zMjUwOCAyLjg4MjY2IDkuOTk4MjcgMy4zMTUzNSAxMS4yMDczIDQuMzM3MTkiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjUxMTcgMTEuNjkxOUM5LjU1ODI5IDEzLjY0NTMgNi4zOTExNyAxMy42NDUzIDQuNDM3NzUgMTEuNjkxOUMzLjIzMjQyIDEwLjQ4NjUgMi43NzA4MiA4LjgxOTEgMy4wNTI5NSA3LjI1OTg0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/rotate-cw-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const RotateCwDuotone = createFoamicon('RotateCwDuotone', __iconNode);
