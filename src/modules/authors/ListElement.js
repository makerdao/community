/** @jsx jsx */
import { Fragment } from "react";
import { Box, Flex, Image, Text, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link, getLinkIcon } from "@modules/navigation";
import allContributors from "@content/all-contributors.json";
import acKeys from "@modules/authors/allContributorKeys";

const { emojis } = acKeys;
const repoUrl = `${allContributors.repoHost}/${allContributors.projectOwner}/${allContributors.projectName}`;

const AuthorListElement = ({
  login,
  name,
  avatar_url,
  profile,
  contributions,
  hideContributions,
  description,
  noUsername,
  noLinks,
}) => {
  return (
    <Flex>
      <Box sx={{ minWidth: "75px", maxWidth: "75px", flex: "auto" }}>
        {avatar_url && avatar_url !== "" ? (
          <Image
            src={avatar_url}
            sx={{
              borderRadius: "100%",
              minWidth: "75px",
              height: "75px",
              flex: "auto",
            }}
          />
        ) : (
          <Flex
            sx={{
              borderRadius: "100%",
              minWidth: "75px",
              height: "75px",
              flex: "auto",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              bg: "primaryMuted",
              marginBottom: "5px",
            }}
          >
            <Icon name="person" size={"60px"} sx={{ color: "primary" }} />
          </Flex>
        )}
        {!hideContributions && (
          <Box
            as="ul"
            sx={{
              p: 0,
              textAlign: "center",
              "& > *": { mr: "5px", display: "inline-block" },
            }}
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

      <Box sx={{ marginLeft: "1rem", marginTop: "10px" }}>
        <Text sx={{ fontWeight: "500", fontSize: "1.32rem" }}>
          {name || ""}
          {!noLinks && (
            <Box
              as="ul"
              sx={{
                display: "inline-block",
                marginLeft: ".5rem",
                p: 0,
                verticalAlign: "middle",
              }}
            >
              {Array.isArray(profile) ? (
                <Fragment>
                  {/* NOTE(Rejon): I'm not fleshing this out on purpose. This doesn't need a robust solution. */}
                  {profile.map((url, index) => (
                    <Fragment key={`profile-link-icon-${index}`}>
                      {getLinkIcon(url)}
                    </Fragment>
                  ))}
                </Fragment>
              ) : (
                getLinkIcon(profile)
              )}
            </Box>
          )}
        </Text>
        {!noUsername && <Text sx={{ fontSize: "15px" }}>{`@${login}`}</Text>}
        <Text sx={{ marginTop: "5px" }}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default AuthorListElement;
