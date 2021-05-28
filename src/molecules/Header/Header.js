// @flow

/** @jsx jsx */

import { Box, Flex, jsx } from 'theme-ui';
import { useEffect, useRef } from 'react';

import ColorModeToggles from './components/ColorModeToggles';
import HeaderNav from './components/HeaderNav';
import { Icon } from '@makerdao/dai-ui-icons';
import type { Node } from 'react';
import { SearchBar } from '@molecules';
import theme from '@src/gatsby-plugin-theme-ui/';
import { useNavigation } from '@modules/navigation';

// TODO: Consider to create a shared state for global variables.
var lastScroll = 0; //<- Last scroll top of window. Defined outside because we don't want to re-render for scrolling.
var delta = 5; //<- Rate of change in scroll needed to hide the header.
// eslint-disable-next-line
var isShowingMenu = false; //<- For document  event listeners to know if the menu is being shown or not.

export default function Header(): Node {
  const headerContainer = useRef(null);
  const {
    headerLinks,
    mobileNavOpen,
    showMobileMenu,
    hideMobileMenu,
  } = useNavigation();

  const breakpoints = theme.breakpoints.slice(0, -1); //NOTE(Rejon): The last element of the break point array SHOULD be infinity.

  const onMenuClick = () => {
    if (mobileNavOpen) {
      hideMobileMenu(lastScroll);
    } else {
      showMobileMenu();
    }

    // eslint-disable-next-line
    isShowingMenu = !mobileNavOpen;
  };

  const hideMenu = () => {
    if (mobileNavOpen) {
      // eslint-disable-next-line
      isShowingMenu = false;
      hideMobileMenu();
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (headerContainer.current && !mobileNavOpen) {
        const inMobileRange = breakpoints.some(
          (n) => window.innerWidth <= parseInt(n)
        );

        if (inMobileRange) {
          const headerHeight = headerContainer.current.offsetHeight;
          const currentScroll = window.scrollY;

          //Scroll must be more than the delta.
          if (Math.abs(lastScroll - currentScroll) <= delta) return;

          //If you scroll down AND our scroll top is greater than our header,
          //hide it.
          if (currentScroll > lastScroll && currentScroll > headerHeight) {
            headerContainer.current.classList.add('hide-nav');
          } else {
            //We've scrolled up OR our scrollTop is less than the header.
            headerContainer.current.classList.remove('hide-nav');
          }

          lastScroll = currentScroll;
        } else {
          //Render the header as normal without the "show/hide logic"
          headerContainer.current.classList.remove('hide-nav');
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [breakpoints, mobileNavOpen]);

  return (
    <Box
      as="header"
      ref={headerContainer}
      sx={{
        bg: 'backgroundAlt',
        position: ['fixed', 'fixed', 'relative'],
        width: '100%',
        zIndex: '1000',
        transition: 'all .32s ease-in-out',
        transform: 'translateY(0px)',
        top: 0,
        '&.hide-nav': {
          transform: 'translateY(-190px)',
        },
      }}
    >
      <Flex
        sx={{
          maxWidth: '1364px',
          height: ['90px', '90px', 'unset'],
          zIndex: 2,
          position: 'relative',
          margin: 'auto',
          px: [3, '30px', '22px'],
          py: '19px',
          alignItems: 'center',
          '& a': { color: 'onBackgroundAlt', textDecoration: 'none' },
          '& a.external-link > svg': { display: 'none' },
          '& a:hover': {
            textDecoration: 'none',
          },
        }}
      >
        <HeaderNav headerLinks={headerLinks} hideMenu={hideMenu} />
        <Flex
          sx={{
            width: ['100%', '100%', 'auto'],
            ml: [3, 3, '3rem'],
            alignItems: 'center',
            letterSpacing: '0.3px',
            color: 'onBackgroundAlt',
            flexDirection: 'row',
          }}
        >
          <SearchBar
            collapse
            onClick={hideMenu}
            sx={{
              width: '100%',
              minWidth: ['unset', '270px', '270px'],
              mr: ['unset', 'unset', '1vw'],

              fontFamily: 'body',
              letterSpacing: '0.3px',
              display: 'inline-block',
              fontSize: '15px',
            }}
          />

          <ColorModeToggles />
        </Flex>
        <Icon
          size={'39px'}
          onClick={onMenuClick}
          name={mobileNavOpen ? 'close' : 'menu'}
          sx={{
            p: mobileNavOpen ? '7px' : '0px', //NOTE(Rejon): Close and Menu have different viewbox sizes in the dai-ui spec.
            color: 'onBackgroundAlt',
            cursor: 'pointer',
            ml: '1rem',
            display: ['initial', 'initial', 'none'],
          }}
        />
      </Flex>
      <Box
        className={mobileNavOpen ? 'visible' : ''}
        sx={{
          display: ['initial', 'initial', 'none'],
          '&::after': {
            content: `""`,
            height: '1px',
            width: '100%',
            bg: 'surfaceDark',
            position: 'absolute',
            zIndex: 1,
            opacity: 0,
            transformOrigin: 'center',
            transform: 'scaleX(0)',
            transition: 'all .1s cubic-bezier(0.65, 0, 0.35, 1)',
          },
          '&.visible::after': {
            opacity: 1,
            transform: 'scaleX(1)',
            transition: 'all .5s cubic-bezier(0.65, 0, 0.35, 1)',
          },
        }}
      ></Box>
    </Box>
  );
}
