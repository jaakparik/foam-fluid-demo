import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2 4.74439C2 4.00274 2.54228 3.37428 3.27924 3.29101C4.43238 3.16071 6.21619 3 8 3C9.78381 3 11.5676 3.16071 12.7208 3.29101C13.4577 3.37428 14 4.00274 14 4.74439V11.2556C14 11.9973 13.4577 12.6257 12.7208 12.709C11.5676 12.8393 9.78381 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V4.74439Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'wsa55f'
    }
  ],
  [
    'path',
    {
      d: 'M2 9L3.45139 7.54861C4.28299 6.71701 5.64915 6.77898 6.40205 7.68245L6.62717 7.9526C7.14763 8.57716 8.01105 8.79558 8.7659 8.49364C9.5053 8.19788 10.3509 8.40098 10.8753 9.0003L13.5 12',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'e2af5f'
    }
  ],
  [
    'circle',
    {
      cx: '10.75',
      cy: '5.75',
      r: '0.75',
      fill: 'currentColor',
      key: '225846'
    }
  ]
];

/**
 * @component @name Image
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNC43NDQzOUMyIDQuMDAyNzQgMi41NDIyOCAzLjM3NDI4IDMuMjc5MjQgMy4yOTEwMUM0LjQzMjM4IDMuMTYwNzEgNi4yMTYxOSAzIDggM0M5Ljc4MzgxIDMgMTEuNTY3NiAzLjE2MDcxIDEyLjcyMDggMy4yOTEwMUMxMy40NTc3IDMuMzc0MjggMTQgNC4wMDI3NCAxNCA0Ljc0NDM5VjExLjI1NTZDMTQgMTEuOTk3MyAxMy40NTc3IDEyLjYyNTcgMTIuNzIwOCAxMi43MDlDMTEuNTY3NiAxMi44MzkzIDkuNzgzODEgMTMgOCAxM0M2LjIxNjE5IDEzIDQuNDMyMzggMTIuODM5MyAzLjI3OTI0IDEyLjcwOUMyLjU0MjI4IDEyLjYyNTcgMiAxMS45OTczIDIgMTEuMjU1NlY0Ljc0NDM5WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiA5TDMuNDUxMzkgNy41NDg2MUM0LjI4Mjk5IDYuNzE3MDEgNS42NDkxNSA2Ljc3ODk4IDYuNDAyMDUgNy42ODI0NUw2LjYyNzE3IDcuOTUyNkM3LjE0NzYzIDguNTc3MTYgOC4wMTEwNSA4Ljc5NTU4IDguNzY1OSA4LjQ5MzY0QzkuNTA1MyA4LjE5Nzg4IDEwLjM1MDkgOC40MDA5OCAxMC44NzUzIDkuMDAwM0wxMy41IDEyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEwLjc1IiBjeT0iNS43NSIgcj0iMC43NSIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/image
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const Image = createFoamicon('Image', __iconNode);
