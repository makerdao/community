import { Icon } from "@makerdao/dai-ui-icons";
import { useTranslation } from "@modules/localization";
/** @jsx jsx */
import { useEffect, useRef } from "react";
import { Flex, Input, jsx } from "theme-ui";

const SearchInput = ({ onChange, onSubmit, alt, sx, ...rest }) => {
  const { t } = useTranslation();
  const searchRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(e.target.keywords.value);
    }
  };

  const onInputChange = (e) => {
    if (onChange)
    {
      onChange(e.target.value)
    }
  } 

  const onKeyDown = (e) => {
    if (typeof window !== undefined) {
      if (
        e.key === "/" &&
        searchRef.current &&
        document.activeElement !== searchRef.current
      ) {
        e.preventDefault();
        searchRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }
  }, []);

  return (
    <Flex
      as="form"
      method="GET"
      role="search"
      onSubmit={onFormSubmit}
      sx={{ p: "4px", alignItems: "center", pl: "10px", width: "100%" }}
    >
      <Icon
        name="search"
        color={alt ? "text" : "muted"}
        viewBox="-5 -5 24 24"
        sx={{
          width: "33px",
          height: "33px",
        }}
      />
      <Input
        name="keywords"
        id="search-input"
        type="search"
        ref={searchRef}
        autocomplete="none"
        aria-label={alt ? '' : t("Search")}
        placeholder={alt ? '': t("Search")}
        onChange={onInputChange}
        sx={{
          border: "none",
          borderRadius: "0",
          letterSpacing: "0.3px",
          minWidth: "auto",
          width: ["100%", "100%", "300px"],
          pr: "9px",
          pl: "5px",
          py: "9px",
          fontSize: [3, 3, "inherit"],
          color: alt ? "text" : "muted",
          "&:focus": {
            color: alt ? "text" : "muted",
          },
          "::placeholder": {
            color: alt ? "text" : "muted",
          },
          "::-webkit-search-cancel-button": {
            WebkitAppearance: "none",
          },
          ...sx
        }}
        {...rest}
      />
    </Flex>
  );
};

export default SearchInput;
