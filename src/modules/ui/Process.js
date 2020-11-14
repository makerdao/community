/** @jsx jsx */
import { Children } from "react";
import { Flex, Box, jsx } from "theme-ui";

const Process = ({ children }) => {
  const _Children = Children.toArray(children);

  return (
    <Box sx={{ mt: "34px", mb: "34px" }}>
      {_Children.map((child, index) => {
        return (
          <Flex
            key={`process-child-${index}`}
            sx={{
              flexDirection: ["column", "column", "row"],
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                width: "40px",
                minWidth: "40px",
                height: "40px",
                mb: ["18px", "18px", 0],
                minHeight: "40px",
                borderRadius: "100%",
                color: "onPrimary",
                textAlign: "center",
                backgroundColor: "primary",
                // marginTop: "12px",
            }}
            >
              {`${index + 1}`}
            </Box>
            <Box
              sx={{
                ml: [0, 0, 3],
                mb: ["23px", "23px", "36px"],
                borderBottom: "1px solid",
                borderColor: "muted",
                width: "100%",
                pb: "32px",
                "& > *:only-child, & > *:last-child": { m: 0 },
              }}
            >
              {child}
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Process;
