/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import Sidenav_Node from "@modules/navigation/Sidenav_Node";

const Sidenav = ({ data, currentPath }) => {
  return (
    <Box
      as="aside"
      sx={{
        flexGrow: 0,
        position: "relative",
        height: "calc(100vh)",
        pt: "60px",
        pl: "26px",
        pr: 2,
        pb: "90px",
        width: "256px",
        overflowY: "auto",
        overflowX: "hidden",
        borderRight: "1px solid",
        borderColor: "muted",
      }}
    >
      {data && data.items[0] && (
        <ul sx={{ m: 0, p: 0, listStyleType: "none" }}>
          {data.items[0].items.map((item, index) => (
            <Sidenav_Node
              key={`${item.url}-${index}`}
              currentPath={currentPath}
              {...item}
            />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Sidenav;
