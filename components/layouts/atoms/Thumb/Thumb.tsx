import { useMediaQuery } from '@mui/material';
import React from 'react';

import { theme } from '#styles/styles';

import type { IThumb } from './Thumb.types';

export const Thumb: React.FC<IThumb> = ({ color, rating }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const smallSize = 16;
  const largeSize = 19;
  const breakpointSize = smallBreakpoint ? largeSize : smallSize;
  return (
    <svg
      width={breakpointSize}
      height={breakpointSize}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-rating={rating}
      data-testid="thumb-icon"
    >
      <path
        data-rating={rating}
        d="M15.057 9.004c.46-1.427.693-2.676.693-3.753 0-2.399-.939-4.248-2.5-4.248-.847 0-1.109.505-1.437 1.747.017-.065-.163.634-.215.821-.101.36-.277.97-.527 1.831a.247.247 0 0 1-.03.065L8.175 9.953A5.885 5.885 0 0 1 5.32 12.28l-1.257.481a1.75 1.75 0 0 0-1.092 1.968l.686 3.538a2.25 2.25 0 0 0 1.673 1.757l8.25 2.022a4.75 4.75 0 0 0 5.733-3.44l1.574-6.173a2.75 2.75 0 0 0-2.665-3.429h-3.165Z"
        fill={color}
      />
    </svg>
  );
};
