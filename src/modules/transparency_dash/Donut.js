/** @jsx jsx */
import { Box, jsx, useThemeUI } from "theme-ui";

const Donut = ({
  size = 200,
  strokeWidth = 3,
  value = 0,
  min = 0,
  max = 1,
  ...props
}) => {
  const _value = value < min ? 0 : value;

  const { theme } = useThemeUI();
  const r = 16 - strokeWidth;
  const C = 2 * r * Math.PI;
  const offset = C - ((_value - min) / (max - min)) * C;

  return (
    <Box
      as="svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      fill="none"
      stroke="currentcolor"
      role="img"
      {...props}
      __css={{
        color: "primary",
      }}
    >
      <circle
        cx={16}
        cy={16}
        r={r}
        stroke={theme.colors.transDash_makerOrange}
      />
      <circle
        cx={16}
        cy={16}
        r={r}
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90 16 16)"
      />
    </Box>
  );
};

export default Donut;
