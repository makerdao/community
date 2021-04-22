// @flow
/** @jsx jsx */

import { jsx, useColorMode } from 'theme-ui';

import { Fragment } from 'react';
import { Icon } from '@makerdao/dai-ui-icons';
import type { Node } from 'react';

export default function ColorModeToggles(): Node {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Fragment>
      <div
        sx={{
          display: ['none', 'none', 'inline-block'],
          height: '32px',
          width: '32px',
          mr: '21px',
        }}
      >
        <Icon
          size={'32px'}
          name={'sun'}
          sx={{
            borderRadius: '100%',
            p: '2px',
            bg: colorMode !== 'default' ? 'transparent' : 'primary',
            color: colorMode !== 'default' ? 'onBackgroundAlt' : 'text',

            minWidth: '32px',
            minHeight: '32px',
            cursor: 'pointer',
            '&:hover': {
              bg: colorMode !== 'default' ? 'background' : '',
            },
          }}
          onClick={() => {
            if (colorMode !== 'default') {
              setColorMode('default');
            }
          }}
        />
      </div>

      <div
        sx={{
          display: ['none', 'none', 'inline-block'],
          height: '32px',
          width: '32px',
        }}
      >
        <Icon
          size={'32px'}
          name={'moon'}
          sx={{
            borderRadius: '100%',
            p: '2px',
            bg: colorMode !== 'dark' ? 'transparent' : 'primary',
            color: colorMode !== 'dark' ? 'onBackgroundAlt' : 'background',
            minWidth: '32px',
            minHeight: '32px',
            cursor: 'pointer',
            '&:hover': {
              bg: colorMode !== 'dark' ? 'surfaceDark' : '',
            },
          }}
          onClick={() => {
            if (colorMode !== 'dark') {
              setColorMode('dark');
            }
          }}
        />
      </div>
    </Fragment>
  );
}
