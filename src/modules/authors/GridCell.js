/** @jsx jsx */
import { Box, Flex, Image, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "@modules/navigation";
import allContributors from "@content/all-contributors.json";
import acKeys from "@modules/authors/allContributorKeys";

const { emojis } = acKeys;

const repoUrl = `${allContributors.repoHost}/${allContributors.projectOwner}/${allContributors.projectName}`;

const AuthorGridCell = ({
  login,
  name,
  avatar_url,
  profile,
  contributions,
  hideContributions,
  noLinks,
  index,
}) => (
  <Box
    sx={{
      padding: "6px 13px",
      border: "1px solid",
      borderLeft: "none",
      borderTop: index >= 6 ? "none" : "1px solid",
      borderColor: "muted",
      textAlign: "center",
    }}
  >
    {profile && !noLinks ? (
      <Link
        hideExternalIcon
        to={profile}
        sx={{ fontSize: "13px", fontWeight: "500" }}
      >
        {avatar_url ? (
          <Image
            src={avatar_url}
            sx={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
        ) : (
          <Flex
            sx={{
              width: "100%",
              maxWidth: "100px",
              height: "100px",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              mb: "5px",
            }}
          >
            <Icon name="person" size={"64px"} sx={{ color: "primary" }} />
          </Flex>
        )}

        {name ? name : ""}
      </Link>
    ) : (
      <Box sx={{ fontSize: "13px", fontWeight: "500" }}>
        {avatar_url ? (
          <Image
            src={avatar_url}
            sx={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
        ) : (
          <Flex
            sx={{
              width: "100%",
              maxWidth: "100px",
              height: "100px",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              mb: "5px",
            }}
          >
            <Icon name="person" size={"64px"} sx={{ color: "primary" }} />
          </Flex>
        )}

        {name ? name : ""}
      </Box>
    )}
    {!hideContributions && (
      <Box
        as="ul"
        sx={{ p: 0, "& > *": { mr: "5px", display: "inline-block" } }}
      >
        {contributions.map((c, index) => {
          if (c === "code" && login) {
            return (
              <Link
                key={`${c}-${index}`}
                to={`${repoUrl}/commits?author=${login}`}
                hideExternalIcon
              >
                {" "}
                {emojis[c] || c}{" "}
              </Link>
            );
          }

          return <Box key={`${c}-${index}`}>{emojis[c] || c}</Box>;
        })}
      </Box>
    )}
  </Box>
);

export default AuthorGridCell;
