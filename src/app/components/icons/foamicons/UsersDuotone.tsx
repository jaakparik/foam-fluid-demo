import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '5.67676',
      cy: '4.52344',
      r: '1.72656',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ha37qt'
    }
  ],
  [
    'circle',
    {
      cx: '11.2344',
      cy: '4.92725',
      r: '1.32275',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'adn05m'
    }
  ],
  [
    'path',
    {
      d: 'M9.38285 11.8491C9.8863 11.8912 10.5603 11.9336 11.2344 11.9336C12.4245 11.9336 13.6147 11.8014 13.8658 11.7719C13.8939 11.7686 13.9141 11.7449 13.9141 11.7166V11.1028C13.9141 9.56816 12.769 8.24902 11.2344 8.24902C11.0021 8.24902 10.7919 8.26032 10.6031 8.27901C9.70685 8.36768 9.03758 9.01992 8.55469 9.78013',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '8lj53v'
    }
  ],
  [
    'path',
    {
      d: 'M2.08594 12.0742C2.08594 10.0177 3.62032 8.25 5.67685 8.25C7.73337 8.25 9.26776 10.0177 9.26776 12.0742V12.8967C9.26776 12.9346 9.24067 12.9664 9.20304 12.9708C8.8666 13.0104 7.27172 13.1875 5.67685 13.1875C4.08197 13.1875 2.48709 13.0104 2.15066 12.9708C2.11302 12.9664 2.08594 12.9346 2.08594 12.8967V12.0742Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '65idcp'
    }
  ]
];

/**
 * @component @name UsersDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNS42NzY3NiIgY3k9IjQuNTIzNDQiIHI9IjEuNzI2NTYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTEuMjM0NCIgY3k9IjQuOTI3MjUiIHI9IjEuMzIyNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzgyODUgMTEuODQ5MUM5Ljg4NjMgMTEuODkxMiAxMC41NjAzIDExLjkzMzYgMTEuMjM0NCAxMS45MzM2QzEyLjQyNDUgMTEuOTMzNiAxMy42MTQ3IDExLjgwMTQgMTMuODY1OCAxMS43NzE5QzEzLjg5MzkgMTEuNzY4NiAxMy45MTQxIDExLjc0NDkgMTMuOTE0MSAxMS43MTY2VjExLjEwMjhDMTMuOTE0MSA5LjU2ODE2IDEyLjc2OSA4LjI0OTAyIDExLjIzNDQgOC4yNDkwMkMxMS4wMDIxIDguMjQ5MDIgMTAuNzkxOSA4LjI2MDMyIDEwLjYwMzEgOC4yNzkwMUM5LjcwNjg1IDguMzY3NjggOS4wMzc1OCA5LjAxOTkyIDguNTU0NjkgOS43ODAxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi4wODU5NCAxMi4wNzQyQzIuMDg1OTQgMTAuMDE3NyAzLjYyMDMyIDguMjUgNS42NzY4NSA4LjI1QzcuNzMzMzcgOC4yNSA5LjI2Nzc2IDEwLjAxNzcgOS4yNjc3NiAxMi4wNzQyVjEyLjg5NjdDOS4yNjc3NiAxMi45MzQ2IDkuMjQwNjcgMTIuOTY2NCA5LjIwMzA0IDEyLjk3MDhDOC44NjY2IDEzLjAxMDQgNy4yNzE3MiAxMy4xODc1IDUuNjc2ODUgMTMuMTg3NUM0LjA4MTk3IDEzLjE4NzUgMi40ODcwOSAxMy4wMTA0IDIuMTUwNjYgMTIuOTcwOEMyLjExMzAyIDEyLjk2NjQgMi4wODU5NCAxMi45MzQ2IDIuMDg1OTQgMTIuODk2N1YxMi4wNzQyWiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/users-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UsersDuotone = createFoamicon('UsersDuotone', __iconNode);
