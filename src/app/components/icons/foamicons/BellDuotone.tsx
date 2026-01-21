import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M12 6.03279C12.0001 6.02187 12.0001 6.01094 12.0001 6C12.0001 3.79086 10.2093 2 8.00013 2C5.79099 2 4.00013 3.79086 4.00013 6L4 6.5C4 7.77873 3.59998 8.96402 2.91825 9.93758C2.71546 10.2272 2.81998 10.647 3.15698 10.7539C4.10154 11.0536 5.08408 11.2679 6.09555 11.3878C6.72005 11.4619 7.35558 11.5 8 11.5C8.64451 11.5 9.28012 11.4619 9.9047 11.3878C10.9161 11.2678 11.8985 11.0535 12.843 10.7539C13.18 10.647 13.2845 10.2272 13.0817 9.93758C12.4 8.96402 12 7.77873 12 6.5V6.03279Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'cjrnvj'
    }
  ],
  [
    'path',
    {
      d: 'M8.00013 14C9.1047 14 10.0001 13.1046 10.0001 12C10.0001 11.9291 9.99644 11.8591 9.98925 11.7902C9.96444 11.5522 9.73332 11.409 9.49512 11.4311C9.00287 11.4767 8.50416 11.5 8 11.5C7.49592 11.5 6.9973 11.4767 6.50513 11.4311C6.26693 11.409 6.03581 11.5523 6.011 11.7902C6.00382 11.8591 6.00013 11.9291 6.00013 12C6.00013 13.1046 6.89556 14 8.00013 14Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ax72sj'
    }
  ]
];

/**
 * @component @name BellDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDYuMDMyNzlDMTIuMDAwMSA2LjAyMTg3IDEyLjAwMDEgNi4wMTA5NCAxMi4wMDAxIDZDMTIuMDAwMSAzLjc5MDg2IDEwLjIwOTMgMiA4LjAwMDEzIDJDNS43OTA5OSAyIDQuMDAwMTMgMy43OTA4NiA0LjAwMDEzIDZMNCA2LjVDNCA3Ljc3ODczIDMuNTk5OTggOC45NjQwMiAyLjkxODI1IDkuOTM3NThDMi43MTU0NiAxMC4yMjcyIDIuODE5OTggMTAuNjQ3IDMuMTU2OTggMTAuNzUzOUM0LjEwMTU0IDExLjA1MzYgNS4wODQwOCAxMS4yNjc5IDYuMDk1NTUgMTEuMzg3OEM2LjcyMDA1IDExLjQ2MTkgNy4zNTU1OCAxMS41IDggMTEuNUM4LjY0NDUxIDExLjUgOS4yODAxMiAxMS40NjE5IDkuOTA0NyAxMS4zODc4QzEwLjkxNjEgMTEuMjY3OCAxMS44OTg1IDExLjA1MzUgMTIuODQzIDEwLjc1MzlDMTMuMTggMTAuNjQ3IDEzLjI4NDUgMTAuMjI3MiAxMy4wODE3IDkuOTM3NThDMTIuNCA4Ljk2NDAyIDEyIDcuNzc4NzMgMTIgNi41VjYuMDMyNzlaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wMDAxMyAxNEM5LjEwNDcgMTQgMTAuMDAwMSAxMy4xMDQ2IDEwLjAwMDEgMTJDMTAuMDAwMSAxMS45MjkxIDkuOTk2NDQgMTEuODU5MSA5Ljk4OTI1IDExLjc5MDJDOS45NjQ0NCAxMS41NTIyIDkuNzMzMzIgMTEuNDA5IDkuNDk1MTIgMTEuNDMxMUM5LjAwMjg3IDExLjQ3NjcgOC41MDQxNiAxMS41IDggMTEuNUM3LjQ5NTkyIDExLjUgNi45OTczIDExLjQ3NjcgNi41MDUxMyAxMS40MzExQzYuMjY2OTMgMTEuNDA5IDYuMDM1ODEgMTEuNTUyMyA2LjAxMSAxMS43OTAyQzYuMDAzODIgMTEuODU5MSA2LjAwMDEzIDExLjkyOTEgNi4wMDAxMyAxMkM2LjAwMDEzIDEzLjEwNDYgNi44OTU1NiAxNCA4LjAwMDEzIDE0WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/bell-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const BellDuotone = createFoamicon('BellDuotone', __iconNode);
