/** @jsx jsx */
import { Fragment } from "react";

import { Box, Flex, Text, Image, jsx } from "theme-ui";
import { navigate } from "@reach/router";

import Button from "@modules/ui/Button";
import { SEO } from "@modules/utility";
import { useTranslation } from "@modules/localization";

const browser = typeof window !== "undefined" && window; //<- This is to stop 404 flashes on route fallbacks.

//404Page Wrapper
const PageLayout = ({ children, seoTitle, t }) => (
  <Flex
    sx={{
      width: "100%",
      maxWidth: "1000px",
      margin: "auto",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ["column", "column", "row"],
      py: "77px",
      px: "5%",
    }}
  >
    <SEO title={seoTitle} />
    <Flex
      sx={{
        flex: 2,
        flexDirection: "column",
        pr: [0, 0, "5%"],
        textAlign: ["center", "center", ""],
        order: [1, 1, 0],
        width: "100%",
        display: "inline-block",
      }}
    >
      {children}
      <Box sx={{ mt: 4 }}>
        <Button
          to={"https://github.com/makerdao/community/issues"}
          inline
          sx={{
            mt: "5px",
            mr: [0, 0, 3],
          }}
        >
          {t("Bug_Report")}
        </Button>
        <Text
          onClick={() => {
            navigate(-1);
          }}
          disabled={true}
          hideExternalIcon={true}
          sx={{
            fontWeight: "500",
            display: ["block", "block", "inline-block"],
            ml: "15px",
            cursor: "pointer",
          }}
        >
          {t("Go_Back")}
        </Text>
      </Box>
    </Flex>
    <Image
      sx={{
        width: "400px",
        height: "400px",
        display: "inline-block",
        order: [0, 0, 1],
      }}
      src={
        "https://cdn.shopify.com/s/files/1/0010/0994/2575/products/2046-60-mistyteal_3472a883-658e-4f06-b350-387a8eafa4ae_2000x.png"
      }
    />
  </Flex>
);

const NotFoundPage = () => {
  const { t } = useTranslation();
  if (!browser) {
    return <Fragment></Fragment>;
  }

  //Use the Title Rule. Else just use a hardcoded value.
  const seoTitle = t("seoTitle", "NotFoundPage");

  return (
    <PageLayout seoTitle={seoTitle} t={t}>
      <Box sx={{ fontSize: "1.5em" }}>
        <Text sx={{ fontSize: "2em", mt: "1em", mb: ".5em" }}>404</Text>

        {t("line_1", "NotFoundPage")}
        <br />
        <br />
        {t("line_2", "NotFoundPage")}
        <br />
        <br />
        {t("line_3", "NotFoundPage")}
      </Box>
    </PageLayout>
  );
};
export default NotFoundPage;
