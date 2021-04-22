// @flow
/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

import type { Node } from 'react';

type TCodeProps = {
  children: Node,
};

export default function Code({ children }: TCodeProps): Node {
  return (
    <pre
      sx={{
        display: 'inline-block',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        m: 0,
      }}
    >
      <Box
        as="code"
        sx={{
          color: 'codeText',
          bg: 'codeBG',
          fontSize: 3,
          fontWeight: 400,
          fontFamily: 'monospace',
          p: 1,
          px: 2,
          mt: 0,
          borderRadius: '4px',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </pre>
  );
}
