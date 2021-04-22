// @flow
/** @jsx jsx */

import { Card, jsx } from 'theme-ui';

import type { Node } from 'react';

type TCTAProps = {
  children: Node,
};

export default function CTA({ children, ...rest }: TCTAProps): Node {
  return (
    <Card
      {...rest}
      sx={{
        p: '24px',
        width: '100%',
        borderColor: 'primary',
        bg: 'successAlt',
        mb: '24px',
        '& > *:only-child': { m: 0 },
      }}
    >
      {children}
    </Card>
  );
}
