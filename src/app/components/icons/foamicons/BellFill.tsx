import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12 6.03279C12.0001 6.02187 12.0001 6.01094 12.0001 6C12.0001 3.79086 10.2093 2 8.00014 2C5.791 2 4.00014 3.79086 4.00014 6L4.00001 6.5C4.00001 7.77873 3.59999 8.96402 2.91826 9.93758C2.71547 10.2272 2.81998 10.647 3.15699 10.7539C4.10155 11.0536 5.08409 11.2679 6.09556 11.3878C6.72006 11.4619 7.35558 11.5 8.00001 11.5C8.64452 11.5 9.28013 11.4619 9.9047 11.3878C10.9161 11.2678 11.8985 11.0535 12.843 10.7539C13.18 10.647 13.2845 10.2272 13.0818 9.93758C12.4 8.96402 12 7.77873 12 6.5V6.03279Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'gaozwp'
    }
  ],
  [
    'path',
    {
      d: 'M8.00012 14C9.10469 14 10.0001 13.1046 10.0001 12C10.0001 11.9291 9.99644 11.8591 9.98924 11.7902C9.96443 11.5522 9.73331 11.409 9.49511 11.4311C9.00287 11.4767 8.50415 11.5 7.99999 11.5C7.49592 11.5 6.99729 11.4767 6.50512 11.4311C6.26692 11.409 6.0358 11.5523 6.011 11.7902C6.00381 11.8591 6.00012 11.9291 6.00012 12C6.00012 13.1046 6.89555 14 8.00012 14Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'p6zut2'
    }
  ]
];

/**
 * @component @name BellFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDYuMDMyNzlDMTIuMDAwMSA2LjAyMTg3IDEyLjAwMDEgNi4wMTA5NCAxMi4wMDAxIDZDMTIuMDAwMSAzLjc5MDg2IDEwLjIwOTMgMiA4LjAwMDE0IDJDNS43OTEgMiA0LjAwMDE0IDMuNzkwODYgNC4wMDAxNCA2TDQuMDAwMDEgNi41QzQuMDAwMDEgNy43Nzg3MyAzLjU5OTk5IDguOTY0MDIgMi45MTgyNiA5LjkzNzU4QzIuNzE1NDcgMTAuMjI3MiAyLjgxOTk4IDEwLjY0NyAzLjE1Njk5IDEwLjc1MzlDNC4xMDE1NSAxMS4wNTM2IDUuMDg0MDkgMTEuMjY3OSA2LjA5NTU2IDExLjM4NzhDNi43MjAwNiAxMS40NjE5IDcuMzU1NTggMTEuNSA4LjAwMDAxIDExLjVDOC42NDQ1MiAxMS41IDkuMjgwMTMgMTEuNDYxOSA5LjkwNDcgMTEuMzg3OEMxMC45MTYxIDExLjI2NzggMTEuODk4NSAxMS4wNTM1IDEyLjg0MyAxMC43NTM5QzEzLjE4IDEwLjY0NyAxMy4yODQ1IDEwLjIyNzIgMTMuMDgxOCA5LjkzNzU4QzEyLjQgOC45NjQwMiAxMiA3Ljc3ODczIDEyIDYuNVY2LjAzMjc5WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjAwMDEyIDE0QzkuMTA0NjkgMTQgMTAuMDAwMSAxMy4xMDQ2IDEwLjAwMDEgMTJDMTAuMDAwMSAxMS45MjkxIDkuOTk2NDQgMTEuODU5MSA5Ljk4OTI0IDExLjc5MDJDOS45NjQ0MyAxMS41NTIyIDkuNzMzMzEgMTEuNDA5IDkuNDk1MTEgMTEuNDMxMUM5LjAwMjg3IDExLjQ3NjcgOC41MDQxNSAxMS41IDcuOTk5OTkgMTEuNUM3LjQ5NTkyIDExLjUgNi45OTcyOSAxMS40NzY3IDYuNTA1MTIgMTEuNDMxMUM2LjI2NjkyIDExLjQwOSA2LjAzNTggMTEuNTUyMyA2LjAxMSAxMS43OTAyQzYuMDAzODEgMTEuODU5MSA2LjAwMDEyIDExLjkyOTEgNi4wMDAxMiAxMkM2LjAwMDEyIDEzLjEwNDYgNi44OTU1NSAxNCA4LjAwMDEyIDE0WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/bell-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BellFill = createFoamicon('BellFill', __iconNode);
