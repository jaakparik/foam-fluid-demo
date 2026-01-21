import { forwardRef, createElement } from 'react';
import type { IconProps, IconNode } from './types';

const DEFAULT_SIZE = 16;

export interface IconComponentProps extends IconProps {
  iconNode: IconNode;
  iconName: string;
}

export const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = 'currentColor',
      size = DEFAULT_SIZE,
      strokeWidth = 1,
      absoluteStrokeWidth,
      className = '',
      iconNode,
      iconName,
      children,
      ...rest
    },
    ref
  ) =>
    createElement(
      'svg',
      {
        ref,
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (Number(strokeWidth) * DEFAULT_SIZE) / Number(size)
          : strokeWidth,
        className: ['foamicon', `foamicon-${iconName}`, className]
          .filter(Boolean)
          .join(' '),
        'aria-hidden': true,
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : children ? [children] : []),
      ]
    )
);

Icon.displayName = 'Icon';
