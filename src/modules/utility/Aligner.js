/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

const Aligner = ({ children, center, right, bottom, yCenter, xCenter, sx }) => {
  const xAlignment = () => {
    if (right) {
      return "flex-end";
    } else if (xCenter || center) {
      return "center";
    }
  };

  const yAlignment = () => {
    if (bottom) {
      return "flex-end";
    } else if (yCenter || center) {
      return "center";
    }
  };

  return (
    <Flex
      className="aligner"
      sx={{
        mb: "1rem",
        justifyContent: xAlignment(),
        alignItems: yAlignment(),
        ...sx,
      }}
    >
      {children}
    </Flex>
  );
};

export default Aligner;
