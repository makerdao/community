/** @jsx jsx */
import { Box, jsx } from "theme-ui";

const Radial = ({ size = 200, value = 0, min = 0, max = 1 }) => {
  const _value = value < min ? 0 : value;

  return (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        background: (theme) =>
          `radial-gradient(50% 50% at 50% 50%, ${theme.colors.transDash_makerOrange} 0%, ${theme.colors.transDash_radialOrangeBG} 100%)`,
        position: "relative",
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-flex",
        verticalAlign: "middle",
        mx: 3,
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: `${(_value / max) * 100}%`,
          height: `${(_value / max) * 100}%`,
          background: (theme) =>
            `radial-gradient(50% 50% at 50% 50%, ${theme.colors.primary} 0%, ${theme.colors.transDash_radialTealBG} 100%)`,
          borderRadius: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default Radial;
