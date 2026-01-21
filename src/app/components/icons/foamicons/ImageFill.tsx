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
      d: 'M2.0221 8.9779L3.45139 7.54861C4.28299 6.71701 5.64915 6.77898 6.40205 7.68245L6.62717 7.9526C7.14763 8.57716 8.01105 8.79558 8.7659 8.49364C9.5053 8.19788 10.3509 8.40098 10.8753 9.0003L13.2242 11.6849C13.3991 11.8847 13.4771 12.1515 13.4375 12.4141C13.4375 12.4141 12.9852 12.6528 12.8822 12.6905C11.7387 12.8235 9.86936 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V9.03125C2 9.01124 2.00795 8.99205 2.0221 8.9779Z',
      fill: 'currentColor',
      key: 'h57yg3'
    }
  ],
  [
    'circle',
    {
      cx: '10.75',
      cy: '5.75',
      r: '0.5',
      fill: 'currentColor',
      stroke: 'currentColor',
      strokeWidth: '0.5',
      key: 'awljjq'
    }
  ]
];

/**
 * @component @name ImageFill
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNC43NDQzOUMyIDQuMDAyNzQgMi41NDIyOCAzLjM3NDI4IDMuMjc5MjQgMy4yOTEwMUM0LjQzMjM4IDMuMTYwNzEgNi4yMTYxOSAzIDggM0M5Ljc4MzgxIDMgMTEuNTY3NiAzLjE2MDcxIDEyLjcyMDggMy4yOTEwMUMxMy40NTc3IDMuMzc0MjggMTQgNC4wMDI3NCAxNCA0Ljc0NDM5VjExLjI1NTZDMTQgMTEuOTk3MyAxMy40NTc3IDEyLjYyNTcgMTIuNzIwOCAxMi43MDlDMTEuNTY3NiAxMi44MzkzIDkuNzgzODEgMTMgOCAxM0M2LjIxNjE5IDEzIDQuNDMyMzggMTIuODM5MyAzLjI3OTI0IDEyLjcwOUMyLjU0MjI4IDEyLjYyNTcgMiAxMS45OTczIDIgMTEuMjU1NlY0Ljc0NDM5WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi4wMjIxIDguOTc3OUwzLjQ1MTM5IDcuNTQ4NjFDNC4yODI5OSA2LjcxNzAxIDUuNjQ5MTUgNi43Nzg5OCA2LjQwMjA1IDcuNjgyNDVMNi42MjcxNyA3Ljk1MjZDNy4xNDc2MyA4LjU3NzE2IDguMDExMDUgOC43OTU1OCA4Ljc2NTkgOC40OTM2NEM5LjUwNTMgOC4xOTc4OCAxMC4zNTA5IDguNDAwOTggMTAuODc1MyA5LjAwMDNMMTMuMjI0MiAxMS42ODQ5QzEzLjM5OTEgMTEuODg0NyAxMy40NzcxIDEyLjE1MTUgMTMuNDM3NSAxMi40MTQxQzEzLjQzNzUgMTIuNDE0MSAxMi45ODUyIDEyLjY1MjggMTIuODgyMiAxMi42OTA1QzExLjczODcgMTIuODIzNSA5Ljg2OTM2IDEzIDggMTNDNi4yMTYxOSAxMyA0LjQzMjM4IDEyLjgzOTMgMy4yNzkyNCAxMi43MDlDMi41NDIyOCAxMi42MjU3IDIgMTEuOTk3MyAyIDExLjI1NTZWOS4wMzEyNUMyIDkuMDExMjQgMi4wMDc5NSA4Ljk5MjA1IDIuMDIyMSA4Ljk3NzlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPGNpcmNsZSBjeD0iMTAuNzUiIGN5PSI1Ljc1IiByPSIwLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=)
 * @see https://foamicons.com/icons/image-fill
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const ImageFill = createFoamicon('ImageFill', __iconNode);
