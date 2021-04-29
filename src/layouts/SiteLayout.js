// @flow
/** @jsx jsx */

import { Flex, jsx } from 'theme-ui';
import { Footer, Header } from '@molecules';

import type { Node } from 'react';

type TLayoutProps = {
  children: Node,
  uri?: string,
};

export default function Layout({ children, uri }: TLayoutProps): Node {
  const hasTopSection = uri ? uri.split('/').length >= 3 : false;

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <Header />
      <Flex
        as="main"
        sx={{
          maxWidth: '1296px',
          flex: '1 0 auto',
          width: '100%',
          m: '0 auto',
          pr: 0,
          pt: ['90px', '90px', 'unset'],
          position: 'relative',
        }}
        className="content-boundary"
      >
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: 'column',
            width: hasTopSection ? '80%' : '',
          }}
        >
          <Flex
            sx={{
              alignItems: 'start',
              // pr: ["unset", "unset", "64px"],
            }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
