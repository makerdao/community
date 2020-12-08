/** @jsx jsx */
import { Fragment } from "react";
import { Flex, Image, Text, jsx } from "theme-ui";

import Regions from "./data/regions";

const Region = ({ data, region }) => {
  const shortcodes = {
    na: "northamerica",
    sa: "southamerica",
    af: "africa",
    eu: "europe",
    as: "asia",
    oc: "oceania",
    virt: "virtual",
  };

  const _region = shortcodes[region] || region;
  const _reg = Regions[_region] || null;
  const _data = data[_region] || null;

  return (
    <Flex
      sx={{
        borderRadius: "4px",
        background: (theme) => `${theme.colors.transDash_regionBG}`,
        px: 3,
        mr: 3,
        mb: 3,
        width: "192px",
        textAlign: "center",
        display: "inline-block",
        fontFamily: "transparencyDashboard",
      }}
    >
      {_reg ? (
        <Fragment>
          {_reg.image && (
            <Image src={_reg.image} sx={{ width: "160px", opacity: 0.8 }} />
          )}
          {_data && (
            <Text
              as="h1"
              sx={{
                fontSize: "2.25rem",
                color: "primary",
                fontWeight: "400",
                mb: "1rem",
              }}
            >
              {_data}
            </Text>
          )}
          <Text
            as="h3"
            sx={{ fontSize: "1.25rem", my: "1rem", fontWeight: "400" }}
          >
            {_reg.label || region}
          </Text>
        </Fragment>
      ) : (
        <Fragment>
          {_data}
          <Text>{region}</Text>
        </Fragment>
      )}
    </Flex>
  );
};

export default Region;
