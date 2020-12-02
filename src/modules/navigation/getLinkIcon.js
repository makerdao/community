/** @jsx jsx */
import { Icon } from "@makerdao/dai-ui-icons";
import { jsx } from "theme-ui";

import { Link } from "@modules/navigation";
import { useTranslation } from "@modules/localization";

//More of a Utility
//Specifically used for Author links but I imagine it will have it's own use else where.

//NOTE(Rejon): Just to make this easier to maintain.
const LinkWrapper = ({ ariaLabel, ...props }) => {
  const { t } = useTranslation();

  return (
    <div
      sx={{ backfaceVisibility: "hidden", display: "inline-block" }}
    >
      <Link
        hideExternalIcon
        aria-label={t(ariaLabel)}
        sx={{
          mr: "6px",
        }}
        {...props}
      />
    </div>
  );
};

//NOTE(Rejon): This is crunchy. I choose not to do an elegant solution cause it really isn't necessary
//			   unless the team asks for it to be robust.
const getLinkIcon = (url, key) => {
  if (url.includes("github")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_GithubIcon"}>
        <Icon name="github" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("twitter")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_TwitterIcon"}>
        <Icon name="twitter" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("medium")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_MediumIcon"}>
        <Icon name="medium" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("youtube")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_YoutubeIcon"}>
        <Icon name="youtube" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("wechat")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_WeChatIcon"}>
        <Icon name="wechat" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("t.me")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_TelegramIcon"}>
        <Icon name="telegram" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("reddit")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_RedditIcon"}>
        <Icon name="reddit" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  } else if (url.includes("chat.")) {
    return (
      <LinkWrapper to={url} key={key} ariaLabel={"aria_RocketChatIcon"}>
        <Icon name="rocketchat" size={"23px"} sx={{ color: "textMuted" }} />
      </LinkWrapper>
    );
  }

  return (
    <LinkWrapper to={url} key={key} ariaLabel={"aria_ExternalWebsite"}>
      <Icon name="open_in_new_tab" size={"23px"} />
    </LinkWrapper>
  );
};

export default getLinkIcon;
