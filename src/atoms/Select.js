// @flow
/** @jsx jsx */

import { Box, jsx, useThemeUI } from 'theme-ui';
import ReactSelect, { components } from 'react-select';
import type {
  MenuListComponentProps as TMenuListProps,
  MenuProps as TMenuProps,
} from 'react-select/src/components/Menu';
import type {
  IndicatorContainerProps as TReactIndicatorContainerProps,
  ValueContainerProps as TValueContainerProps,
} from 'react-select/src/components/containers';

import type { Node } from 'react';
import type { ControlProps as TControlProps } from 'react-select/src/components/Control';
import type { OptionProps as TOptionProps } from 'react-select/src/components/Option';
import type { Props as TReactSelectProps } from 'react-select/src/Select';

export default function Select(props: TReactSelectProps): Node {
  const { theme } = useThemeUI();

  //Override select component theme with our theme since it's not connected to theme-ui
  const uiSelectTheme = {
    primary: theme.colors.primary,
    primary75: theme.colors.success,
    primary50: theme.colors.primaryMuted,
    primary25: theme.colors.successAlt,
    danger: theme.colors.bear,
    dangerLight: theme.colors.bearAlt,
  };

  return (
    <ReactSelect
      theme={(selectTheme) => ({
        ...selectTheme,
        fontFamily: theme.fonts.body,
        colors: { ...selectTheme.colors, ...uiSelectTheme },
      })}
      components={{
        Menu,
        MenuList,
        IndicatorsContainer,
        ValueContainer,
        Control,
        Option,
      }}
      {...props}
    />
  );
}

function Menu(props: TMenuProps): Node {
  return (
    <components.Menu
      {...props}
      sx={{
        marginTop: 0,
        borderRadius: '12px',
        border: '1px solid',
        borderColor: 'muted',
        overflow: 'hidden',
      }}
    />
  );
}

function MenuList(props: TMenuListProps): Node {
  return (
    <components.MenuList {...props} sx={{ py: 0, borderRadius: '12px' }} />
  );
}

function Option(props: TOptionProps): Node {
  return (
    <components.Option
      {...props}
      sx={{ px: '18px', cursor: 'pointer', fontSize: ['18px', '18px', 3] }}
    />
  );
}

type TIndicatorContainerProps = TReactIndicatorContainerProps & {
  isDisabled?: boolean,
};

function IndicatorsContainer(props: TIndicatorContainerProps): Node {
  return (
    <Box
      sx={{
        width: 'auto',
        pr: 2,
        '& > * >span': {
          display: 'none',
        },
        '& svg, &:hover svg': {
          color: props.isDisabled ? 'muted' : 'backgroundAlt',
        },
      }}
    >
      <components.IndicatorsContainer {...props} />
    </Box>
  );
}

function ValueContainer(props: TValueContainerProps): Node {
  return (
    <components.ValueContainer
      {...props}
      sx={{
        fontFamily: 'body',
        color: 'textMuted',
        pl: 3,
      }}
    />
  );
}

function Control(props: TControlProps): Node {
  return (
    <components.Control
      {...props}
      sx={{
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: '12px',
        fontSize: ['18px', '18px', 3],
        pr: 0,
        p: ['2px', '2px', 0],
      }}
    />
  );
}
