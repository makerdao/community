// @flow
/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';

import { Icon } from '@makerdao/dai-ui-icons';
import type { Node } from 'react';

type TCalloutProps = {
  icon: string,
  variant: string,
  children: Node,
};

export default function Callout({
  icon,
  variant,
  children,
}: TCalloutProps): Node {
  return (
    <Flex
      sx={{
        px: '24px',
        py: '28px',
        mb: '24px',
        mt: '24px',
        width: '100%',
        color: 'textMuted',
        borderRadius: '12px',
        bg: variant || 'primaryMuted',
      }}
    >
      {icon && (
        <Icon
          name={icon}
          size={3}
          sx={{ minWidth: '32px', minHeight: '32px', mr: '10px' }}
        />
      )}
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          '& > *:first-of-type': {
            mt: 0,
          },
          '& > *:only-child': {
            m: 0,
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}
