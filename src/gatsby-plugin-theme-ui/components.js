/** @jsx jsx */
import { Icon } from "@makerdao/dai-ui-icons";
import { Image, Text, Divider, Box, Flex, jsx } from "theme-ui";
import { motion } from "framer-motion";

import {
  Accordion,
  Button,
  Categories,
  Callout,
  Chocolate,
  Checklist,
  Code,
  Column,
  // CTA,
  StatusBanner,
  InfoBlock,
  List,
  Process,
  Table,
  Tout,
} from "@modules/ui/";

import { Link } from "@modules/navigation/";

import { Aligner, Video, Indent } from "@modules/utility/";

import { AuthorRenderer } from "@modules/authors";

import { Heading } from "../modules/ui/heading";
import {
  TDRegion,
  TDStat,
  TDDonut,
  TDPie,
  TDRadial,
} from "@modules/transparency_dash";

//Markdown Component overrides
//Replace MDX html defaults with our custom implementation.

//For the complete available list see: https://www.gatsbyjs.org/docs/mdx/customizing-components/
const MD_Overrides = {
  a: (props) => <Link to={props.href} {...props} />,
  img: Image,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  table: (props) => <Table {...props} />,
  thematicBreak: (props) => <Divider sx={{ my: 4 }} {...props} />,
  hr: (props) => <Divider sx={{ my: 4 }} {...props} />,
  p: (props) => (
    <Text
      sx={{
        mb: "16px",
        fontSize: "16px",
        letterSpacing: "0.4px",
        lineHeight: "150%",
        marginBottom: "24px",
        "& .button": { display: "inline-block" },
      }}
      {...props}
    />
  ), //NOTE(Rejon): Don't add the as="p" prop to this text component, else you'll get warnings about our interweaving.
  blockquote: Callout,
  inlineCode: Code,
};

//Custom component fragments to be used in MDX.
//If you want to use a component, but want it's MDX fragment name to be different
//provide a key: Component (ie: {Carousel: CarouselComponent})
const Custom_Components = {
  Code,
  Text,
  Button,
  Callout,
  StatusBanner,
  Link,
  Box,
  Flex,
  Icon,
  CTA: Callout,
  Process,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  Indent,
  Accordion,
  InfoBlock,
  Chocolate,
  Checklist,
  Categories,
  Tout,
  Column,
  Video,
  TDRegion,
  TDStat,
  TDDonut,
  TDPie,
  TDRadial,
  Authors: AuthorRenderer,
  motionDiv: motion.div,
  motionUL: motion.ul,
  motionLI: motion.li,
};

export default {
  ...MD_Overrides,
  ...Custom_Components,
};
