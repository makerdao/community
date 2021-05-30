// @flow
/** @jsx jsx */

import { Box, Flex, jsx } from 'theme-ui';
import { Children, useState } from 'react';

import { Icon } from '@makerdao/dai-ui-icons';
import type { Node } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

type TAccordionProps = {
  children: Node,
  defaultOpen: boolean,
  openIcon: string,
  closeIcon: string,
};

export default function Accordion({
  children,
  defaultOpen,
  openIcon,
  closeIcon,
}: TAccordionProps): Node {
  const [expanded, setExpanded] = useState(defaultOpen ? true : false);

  const _Children = Children.toArray(children);
  const Header = _Children.splice(0, 1);

  const OpenIcon = openIcon || 'plus';
  const CloseIcon = closeIcon || 'minus';

  return (
    <Box
      sx={{
        color: 'text',
        fontSize: '20px',
        letterSpacing: '0.3px',
        borderBottom: '1px solid',
        borderColor: 'muted',
        mb: 4,
        backgroundColor: 'background',
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          cursor: 'pointer',
          position: 'relative',
          px: '12px',
          py: '24px',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Box sx={{ '& > *:only-child': { m: 0 }, pr: 3 }}>{Header}</Box>
        {!expanded ? (
          <Icon
            name={OpenIcon}
            color="textMuted"
            sx={{
              width: '20px',
              height: '20px',
              position: 'relative',
              top: '5px',
            }}
            size={3}
          />
        ) : (
          <Icon
            name={CloseIcon}
            sx={{
              width: '20px',
              height: '20px',
              position: 'relative',
              top: '5px',
            }}
            color="text"
            size={3}
          />
        )}
      </Flex>
      <SmoothCollapse
        eagerRender={true}
        allowOverflowWhenOpen={true}
        expanded={expanded}
      >
        <Box
          sx={{
            pb: '24px',
            px: '12px',
            fontSize: '16px',
            color: 'textMuted',
            '& > *:only-child': { m: 0 },
          }}
        >
          {_Children}
        </Box>
      </SmoothCollapse>
    </Box>
  );
}
