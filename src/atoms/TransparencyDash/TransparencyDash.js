// @flow

import Donut from './components/Donut';
import type { Node } from 'react';
import Pie from './components/Pie';
import Radial from './components/Radial';
import React from 'react';
import Region from './components/Region';
import Stat from './components/Stat';
import type { TDonutProps } from './components/Donut';
import type { TPieProps } from './components/Pie';
import type { TRadialProps } from './components/Radial';
import type { TRegionProps } from './components/Region';
import type { TStatProps } from './components/Stat';

export default {
  Donut: (props: TDonutProps): Node => <Donut {...props} />,
  Pie: (props: TPieProps): Node => <Pie {...props} />,
  Radial: (props: TRadialProps): Node => <Radial {...props} />,
  Region: (props: TRegionProps): Node => <Region {...props} />,
  Stat: (props: TStatProps): Node => <Stat {...props} />,
};
