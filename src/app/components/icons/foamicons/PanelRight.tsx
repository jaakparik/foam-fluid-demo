import { createFoamicon } from './createFoamicon';
import type { IconNode } from './types';

const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M3.26818 4.23755C3.36204 3.51872 3.98148 3 4.70641 3H11.2936C12.0185 3 12.638 3.51872 12.7318 4.23755C12.8573 5.19855 13 6.59928 13 8C13 9.40072 12.8573 10.8014 12.7318 11.7624C12.638 12.4813 12.0185 13 11.2936 13H4.70641C3.98148 13 3.36204 12.4813 3.26818 11.7625C3.14269 10.8014 3 9.40072 3 8C3 6.59928 3.14269 5.19855 3.26818 4.23755Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      key: 'kph3d9'
    }
  ],
  [
    'path',
    {
      d: 'M10 3V13',
      stroke: 'currentColor',
      key: 'b3dp75'
    }
  ]
];

/**
 * @component @name PanelRight
 * @description Foamicon SVG icon component, renders a `<svg>` element
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMjY4MTggNC4yMzc1NUMzLjM2MjA0IDMuNTE4NzIgMy45ODE0OCAzIDQuNzA2NDEgM0gxMS4yOTM2QzEyLjAxODUgMyAxMi42MzggMy41MTg3MiAxMi43MzE4IDQuMjM3NTVDMTIuODU3MyA1LjE5ODU1IDEzIDYuNTk5MjggMTMgOEMxMyA5LjQwMDcyIDEyLjg1NzMgMTAuODAxNCAxMi43MzE4IDExLjc2MjRDMTIuNjM4IDEyLjQ4MTMgMTIuMDE4NSAxMyAxMS4yOTM2IDEzSDQuNzA2NDFDMy45ODE0OCAxMyAzLjM2MjA0IDEyLjQ4MTMgMy4yNjgxOCAxMS43NjI1QzMuMTQyNjkgMTAuODAxNCAzIDkuNDAwNzIgMyA4QzMgNi41OTkyOCAzLjE0MjY5IDUuMTk4NTUgMy4yNjgxOCA0LjIzNzU1WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgM1YxMyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==)
 * @see https://foamicons.com/icons/panel-right
 *
 * @param {object} props - Icon props extending SVGProps<SVGSVGElement>
 * @param {number | string} [props.size=16] - Icon size (width and height)
 * @param {number | string} [props.strokeWidth=1] - Stroke width
 * @param {boolean} [props.absoluteStrokeWidth=false] - Keep stroke width constant regardless of size
 * @param {string} [props.color='currentColor'] - Icon color (stroke color)
 * @returns {React.ReactElement} SVG icon element
 */
export const PanelRight = createFoamicon('PanelRight', __iconNode);
