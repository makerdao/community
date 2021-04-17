// @flow

/** @jsx jsx */

import { Box, jsx } from 'theme-ui';

import { SidenavNode } from '@molecules';
import type { TSidenavNodeProps as TSidenavNode } from './SidenavNode';

export type TSidenavData = {
  items: Array<TSidenavNode>,
};

type TSidenavProps = {
  data: TSidenavData,
  currentPath: string,
};

export default function Sidenav({ data, currentPath }: TSidenavProps): Node {
  return (
    <Box
      as="aside"
      sx={{
        flexGrow: 0,
        position: 'relative',
        height: 'calc(100vh)',
        pt: '60px',
        pl: '26px',
        pr: 2,
        pb: '90px',
        width: '256px',
        overflowY: 'auto',
        overflowX: 'hidden',
        borderRight: '1px solid',
        borderColor: 'muted',
      }}
    >
      {data && data.items.length ? (
        <ul sx={{ m: 0, p: 0, listStyleType: 'none' }}>
          {data.items[0].items.map((item, index) => (
            <SidenavNode
              key={`${item.url}-${index}`}
              currentPath={currentPath}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </Box>
  );
}
