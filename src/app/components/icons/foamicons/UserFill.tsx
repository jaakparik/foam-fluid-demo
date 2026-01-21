import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'circle',
    {
      cx: '8',
      cy: '4.5',
      r: '2',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'hpacsn'
    }
  ],
  [
    'path',
    {
      d: 'M4 12.7599C4 10.4691 5.70919 8.5 8 8.5C10.2908 8.5 12 10.4691 12 12.7599V13.6761C12 13.7183 11.9698 13.7537 11.9279 13.7587C11.5531 13.8027 9.77657 14 8 14C6.22343 14 4.44685 13.8027 4.07209 13.7587C4.03017 13.7537 4 13.7183 4 13.6761V12.7599Z',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: '9twt0r'
    }
  ]
];

/**
 * @component @name UserFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjQuNSIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00IDEyLjc1OTlDNCAxMC40NjkxIDUuNzA5MTkgOC41IDggOC41QzEwLjI5MDggOC41IDEyIDEwLjQ2OTEgMTIgMTIuNzU5OVYxMy42NzYxQzEyIDEzLjcxODMgMTEuOTY5OCAxMy43NTM3IDExLjkyNzkgMTMuNzU4N0MxMS41NTMxIDEzLjgwMjcgOS43NzY1NyAxNCA4IDE0QzYuMjIzNDMgMTQgNC40NDY4NSAxMy44MDI3IDQuMDcyMDkgMTMuNzU4N0M0LjAzMDE3IDEzLjc1MzcgNCAxMy43MTgzIDQgMTMuNjc2MVYxMi43NTk5WiIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/user-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const UserFill = createFoamicon('UserFill', __iconNode);
