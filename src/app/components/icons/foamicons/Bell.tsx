import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M9.9047 11.3878C10.9161 11.2678 11.8985 11.0535 12.843 10.7539C13.18 10.647 13.2845 10.2272 13.0817 9.93758C12.4 8.96402 12 7.77873 12 6.5V6.03279C12.0001 6.02187 12.0001 6.01094 12.0001 6C12.0001 3.79086 10.2093 2 8.00013 2C5.79099 2 4.00013 3.79086 4.00013 6L4 6.5C4 7.77873 3.59998 8.96402 2.91826 9.93758C2.71546 10.2272 2.81998 10.647 3.15698 10.7539C4.10155 11.0536 5.08409 11.2679 6.09556 11.3878M9.9047 11.3878C9.28012 11.4619 8.64451 11.5 8 11.5C7.35558 11.5 6.72005 11.4619 6.09556 11.3878M9.9047 11.3878C9.96667 11.5807 10.0001 11.7865 10.0001 12C10.0001 13.1046 9.1047 14 8.00013 14C6.89556 14 6.00013 13.1046 6.00013 12C6.00013 11.7865 6.03359 11.5808 6.09556 11.3878',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'b15qij'
    }
  ]
];

/**
 * @component @name Bell
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTA0NyAxMS4zODc4QzEwLjkxNjEgMTEuMjY3OCAxMS44OTg1IDExLjA1MzUgMTIuODQzIDEwLjc1MzlDMTMuMTggMTAuNjQ3IDEzLjI4NDUgMTAuMjI3MiAxMy4wODE3IDkuOTM3NThDMTIuNCA4Ljk2NDAyIDEyIDcuNzc4NzMgMTIgNi41VjYuMDMyNzlDMTIuMDAwMSA2LjAyMTg3IDEyLjAwMDEgNi4wMTA5NCAxMi4wMDAxIDZDMTIuMDAwMSAzLjc5MDg2IDEwLjIwOTMgMiA4LjAwMDEzIDJDNS43OTA5OSAyIDQuMDAwMTMgMy43OTA4NiA0LjAwMDEzIDZMNCA2LjVDNCA3Ljc3ODczIDMuNTk5OTggOC45NjQwMiAyLjkxODI2IDkuOTM3NThDMi43MTU0NiAxMC4yMjcyIDIuODE5OTggMTAuNjQ3IDMuMTU2OTggMTAuNzUzOUM0LjEwMTU1IDExLjA1MzYgNS4wODQwOSAxMS4yNjc5IDYuMDk1NTYgMTEuMzg3OE05LjkwNDcgMTEuMzg3OEM5LjI4MDEyIDExLjQ2MTkgOC42NDQ1MSAxMS41IDggMTEuNUM3LjM1NTU4IDExLjUgNi43MjAwNSAxMS40NjE5IDYuMDk1NTYgMTEuMzg3OE05LjkwNDcgMTEuMzg3OEM5Ljk2NjY3IDExLjU4MDcgMTAuMDAwMSAxMS43ODY1IDEwLjAwMDEgMTJDMTAuMDAwMSAxMy4xMDQ2IDkuMTA0NyAxNCA4LjAwMDEzIDE0QzYuODk1NTYgMTQgNi4wMDAxMyAxMy4xMDQ2IDYuMDAwMTMgMTJDNi4wMDAxMyAxMS43ODY1IDYuMDMzNTkgMTEuNTgwOCA2LjA5NTU2IDExLjM4NzgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/bell
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Bell = createFoamicon('Bell', __iconNode);
