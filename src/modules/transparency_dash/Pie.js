/** @jsx jsx */
import { Box, jsx, useThemeUI } from "theme-ui";

const Pie = ({ size = 200, value = 0, min = 0, max = 1, bear }) => {
  const { theme } = useThemeUI();
  const _value = value < min ? 0 : value;

  return (
    <Box
      as="svg"
      height={size}
      width={size}
      viewBox="0 0 32 32"
      sx={{
        borderRadius: "50%",
        transform: "rotate(-90deg)",
        border: `1px solid`,
        borderColor: bear ? "bear" : "primary",
        bg: "transDash_pieBG",
        mx: 3,
        mb: 3,
      }}
    >
      <circle
        r="16"
        cx="16"
        cy="16"
        stroke={bear ? theme.colors.bear : theme.colors.primary}
        strokeWidth={32}
        fill="none"
        strokeDasharray={`${(_value / max) * 100} 100`}
      />
    </Box>
  );
};

export default Pie;
