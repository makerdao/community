/** @jsx jsx */
import ReactSelect, { components } from "react-select";
import { Box, jsx, useThemeUI } from "theme-ui";

const Menu = (props) => (
  <components.Menu
    {...props}
    sx={{
      marginTop: 0,
      borderRadius: "12px",
      border: "1px solid",
      borderColor: "muted",
      overflow: "hidden",
    }}
  />
);

const MenuList = (props) => (
  <components.MenuList {...props} sx={{ py: 0, borderRadius: "12px" }} />
);

const Option = (props) => (
  <components.Option
    {...props}
    sx={{ px: "18px", cursor: "pointer", fontSize: ["18px", "18px", 3] }}
  />
);

const IndicatorsContainer = (props) => (
  <Box
    sx={{
      width: "auto",
      pr: 2,
      "& > * >span": {
        display: "none",
      },
      "& svg, &:hover svg": {
        color: props.isDisabled ? "muted" : "backgroundAlt",
      },
    }}
  >
    <components.IndicatorsContainer {...props} />
  </Box>
);

const ValueContainer = (props) => (
  <components.ValueContainer
    sx={{
      fontFamily: "body",
      color: "textMuted",
      pl: 3,
    }}
    {...props}
  />
);

const Control = (props) => (
  <components.Control
    sx={{
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "12px",
      fontSize: ["18px", "18px", 3],
      pr: 0,
      p: ["2px", "2px", 0],
    }}
    {...props}
  />
);

const Select = ({ ...otherProps }) => {
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
      {...otherProps}
    />
  );
};

export default Select;
