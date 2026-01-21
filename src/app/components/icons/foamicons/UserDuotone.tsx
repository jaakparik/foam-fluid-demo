import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'ldhsbk'
    }
  ],
  [
    'path',
    {
      d: 'M4 12.7599C4 10.4691 5.70919 8.5 8 8.5C10.2908 8.5 12 10.4691 12 12.7599V13.6761C12 13.7183 11.9698 13.7537 11.9279 13.7587C11.5531 13.8027 9.77657 14 8 14C6.22343 14 4.44685 13.8027 4.07209 13.7587C4.03017 13.7537 4 13.7183 4 13.6761V12.7599Z',
      fill: 'var(--foamicon-secondary-color, currentColor)',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: {
        fillOpacity: 'var(--foamicon-secondary-opacity, 0.25)'
      },
      key: '2m4scd'
    }
  ]
];

/**
 * @component @name UserDuotone
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNCAxMi43NTk5QzQgMTAuNDY5MSA1LjcwOTE5IDguNSA4IDguNUMxMC4yOTA4IDguNSAxMiAxMC40NjkxIDEyIDEyLjc1OTlWMTMuNjc2MUMxMiAxMy43MTgzIDExLjk2OTggMTMuNzUzNyAxMS45Mjc5IDEzLjc1ODdDMTEuNTUzMSAxMy44MDI3IDkuNzc2NTcgMTQgOCAxNEM2LjIyMzQzIDE0IDQuNDQ2ODUgMTMuODAyNyA0LjA3MjA5IDEzLjc1ODdDNC4wMzAxNyAxMy43NTM3IDQgMTMuNzE4MyA0IDEzLjY3NjFWMTIuNzU5OVoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/user-duotone
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserDuotone = createFoamicon('UserDuotone', __iconNode);
