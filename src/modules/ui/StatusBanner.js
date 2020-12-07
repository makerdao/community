/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { HexLuminanceCheck, colorToHex } from "@utils";
import Sticky from "react-sticky-el";

const StatusBanner = ({ warning, sticky, children, hideSpacer, variant }) => {
  const _variantKey = variant || (warning ? "warning" : null) || "successAlt";

  //Check if the color of the BG (for sticky), passes our luminance test.
  //If it returns true, it's light, so we use a DARK text color.
  //Else use a LIGHT text color.
  const luminCheck = (_color, _variant) => {
    //The _color that comes in is from theme-ui below. It passes var(--theme-ui-color-variable, #000000);.
    //We just strip out the hex color.
    const hexColor = _color.slice(_color.indexOf("#"), _color.length - 1);

    return HexLuminanceCheck(colorToHex(hexColor)) &&
      _variant !== "successAlt" &&
      _variant !== "warning"
      ? "text"
      : "onPrimary";
  };

  //If a  custom color is passed in, set it's text color if it passes the luminance test.
  const copyColor = (theme) =>
    luminCheck(theme.colors[_variantKey], _variantKey);

  const SBElement = () => (
    <Box
      className="statusBanner"
      sx={{
        px: "24px",
        py: 2,
        position: "relative",
        overflow: "hidden",
        backgroundColor: _variantKey,
        borderRadius: "12px",
        color: copyColor,
        fontSize: 3,
        letterSpace: "0.3px",
        "& > *:last-child": {
          mb: 0,
        },
        "& a": {
          textDecoration: "underline",
          color: copyColor,
          "&.active": {
            color: copyColor,
          },
          "&:hover": {
            color: copyColor,
          },
          "&:hover > svg": {
            color: copyColor,
          },
        },
        mb: "12px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );

  if (sticky) {
    return (
      <Sticky
        className="statusBanner"
        stickyClassName="sticking"
        dontUpdateHolderHeightWhenSticky={true}
        sx={{
          "& > *": { zIndex: "100" },
          width: "100%",
          ".sticking > .spacer:first-of-type:not(:last-child)": {
            height: "24px",
          },
          ".sticking > .statusBanner": {
            boxShadow: "float",
          },
        }}
      >
        {!hideSpacer && <div className="spacer"></div>}
        <SBElement />
        {/* NOTE(Rejon): Sticky acts weird when applying ANY margin. This spacer is here to keep the peace. */}
        {!hideSpacer && <div className="spacer" sx={{ height: "24px" }}></div>}
      </Sticky>
    );
  }

  return <SBElement />;
};

export default StatusBanner;
