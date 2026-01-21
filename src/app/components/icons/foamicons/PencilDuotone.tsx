import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 13H5.5M12.0707 3.07071L13.4293 4.42929C13.4683 4.46834 13.4683 4.53166 13.4293 4.57071L7.02929 10.9707C7.01054 10.9895 6.9851 11 6.95858 11H5.6C5.54477 11 5.5 10.9552 5.5 10.9V9.54142C5.5 9.5149 5.51054 9.48946 5.52929 9.47071L11.9293 3.07071C11.9683 3.03166 12.0317 3.03166 12.0707 3.07071Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '7i408v'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 10.9V9.54142C5.5 9.5149 5.51054 9.48946 5.52929 9.47071L10.1793 4.82071C10.2183 4.78166 10.2817 4.78166 10.3207 4.82071L11.6793 6.17929C11.7183 6.21834 11.7183 6.28166 11.6793 6.32071L7.02929 10.9707C7.01054 10.9895 6.9851 11 6.95858 11H5.6C5.54477 11 5.5 10.9552 5.5 10.9Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: 'ar1km9'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 5L11.5 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'u77486'
    }
  ]
];

/**
 * @component @name PencilDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTNINS41TTEyLjA3MDcgMy4wNzA3MUwxMy40MjkzIDQuNDI5MjlDMTMuNDY4MyA0LjQ2ODM0IDEzLjQ2ODMgNC41MzE2NiAxMy40MjkzIDQuNTcwNzFMNy4wMjkyOSAxMC45NzA3QzcuMDEwNTQgMTAuOTg5NSA2Ljk4NTEgMTEgNi45NTg1OCAxMUg1LjZDNS41NDQ3NyAxMSA1LjUgMTAuOTU1MiA1LjUgMTAuOVY5LjU0MTQyQzUuNSA5LjUxNDkgNS41MTA1NCA5LjQ4OTQ2IDUuNTI5MjkgOS40NzA3MUwxMS45MjkzIDMuMDcwNzFDMTEuOTY4MyAzLjAzMTY2IDEyLjAzMTcgMy4wMzE2NiAxMi4wNzA3IDMuMDcwNzFaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjUgMTAuOVY5LjU0MTQyQzUuNSA5LjUxNDkgNS41MTA1NCA5LjQ4OTQ2IDUuNTI5MjkgOS40NzA3MUwxMC4xNzkzIDQuODIwNzFDMTAuMjE4MyA0Ljc4MTY2IDEwLjI4MTcgNC43ODE2NiAxMC4zMjA3IDQuODIwNzFMMTEuNjc5MyA2LjE3OTI5QzExLjcxODMgNi4yMTgzNCAxMS43MTgzIDYuMjgxNjYgMTEuNjc5MyA2LjMyMDcxTDcuMDI5MjkgMTAuOTcwN0M3LjAxMDU0IDEwLjk4OTUgNi45ODUxIDExIDYuOTU4NTggMTFINS42QzUuNTQ0NzcgMTEgNS41IDEwLjk1NTIgNS41IDEwLjlaIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgo8cGF0aCBkPSJNMTAuNSA1TDExLjUgNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 * @see https://foamicons.com/icons/pencil-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const PencilDuotone = createFoamicon('PencilDuotone', __iconNode);
