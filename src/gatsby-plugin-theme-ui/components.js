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
  h1: (props) => (
    <Text
      variant="h1"
      sx={{
        mb: "24px",
        lineHeight: "normal",
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      as="h2"
      sx={{
        mb: "32px",
        lineHeight: "normal",
      }}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h3"
      sx={{
        mb: "32px",
        lineHeight: "normal",
      }}
      {...props}
    />
  ),
  h4: (props) => (
    <Text
      as="h4"
      sx={{
        mb: "32px",
        lineHeight: "normal",
      }}
      {...props}
    />
  ),
  h5: ({children,...props}) => (
    <Text
      as="h5"
      sx={{
        mb: '32px',
        fontSize: '20px',
        fontWeight: 'normal',
        lineHeight: "normal" ,
      }}
    >
      {children}
    </Text>
  ),
  table: (props) => <Table {...props} />,
  thematicBreak: (props) => <Divider sx={{ my: 4 }} />,
  hr: (props) => <Divider sx={{ my: 4 }} />,
  p: (props) => (
    <Text
      sx={{ mb: "16px", fontSize: "16px", letterSpacing: "0.3px", lineHeight: "150%", "& .button": { display: "inline-block" } }}
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
