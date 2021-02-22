/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import isNil from "lodash/isNil";
import { Link } from "@modules/navigation";

import { BlogAuthor } from "@modules/blog";
import { UrlConverter, TitleConverter, getBlogPostTypeFromPath } from "@utils";
import { useTranslation } from "@modules/localization";
import { console } from "window-or-global";

const BlogCard = ({
  excerpt,
  fileAbsolutePath,
  frontmatter,
  isLatest,
  headings
}) => {
  const { t, locale, DEFAULT_LOCALE } = useTranslation();

  const { authors, date, description, image, title } = frontmatter;
  const type = getBlogPostTypeFromPath(fileAbsolutePath);

  const isContent = fileAbsolutePath.indexOf('/content/') !== -1;

  const postLink = isContent ?
    UrlConverter({fileAbsolutePath})
  : 
  fileAbsolutePath
    .slice(
      fileAbsolutePath.indexOf("/blogPosts/") + 10,
      fileAbsolutePath.length
    )
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "");


    //Split absolute path up to blog, get directory AFTER blog. 
    let postType = null;

    const pagePathSplit = postLink.split("/").splice(1, postLink.split("/").length - 1);
    const typeIndex = pagePathSplit.indexOf("blog") + 1; 

    //If the slug in the path is NOT the last slug, treat it as the post type.
    if (typeIndex !== pagePathSplit.length - 1)
    {
      postType = pagePathSplit[typeIndex];
    }

    let postImage = typeof image === 'string' ? image : `/images/blog_headers/${postType}_1.png`;

    if (typeof image === "number" && (image <= 4 && image >= 1))
    {
        postImage = `/images/blog_headers/${postType}_${image}.png`;
    }

    let postTitle = title; 

    if (isContent)
    {
      //TODO(Rejon): Need to get uncatagorized images for shea to use here. 
      postImage = "/images/blog_headers/governance_1.png" 
      postType = null;
      postTitle = TitleConverter({frontmatter, fileAbsolutePath, headings})
    }
  return (
    <div
      sx={{
        maxWidth: ["unset", "unset", "286px"],
        width: "100%",
        px: 2,
        borderBottom: ["1px solid", "unset", "unset"],
        borderColor: "muted",
        pb: [3, "unset", "unset"],
        pt: ["34px", "unset", "unset"],
      }}
    >
      <p
        sx={{
          fontWeight: 400,
          color: "mutedAlt",
          textTransform: "uppercase",
          mt: 0,
          mb: 3,
        }}
      >
        {isLatest && t("Latest_In")}
        {type && (
          <Link
            to={`/blog?section=${type}`}
            sx={{
              fontWeight: 400,
            }}
          >
            {t(type)}
          </Link>
        )}
      </p>
      {postImage && (
        <Link to={postLink} hideExternalIcon sx={{ display: "block" }}>
          <img
            src={postImage}
            sx={{
              maxWidth: ["unset", "unset", "288px"],
              width: "100%",
              height: "188px",
              objectFit: "cover",
              mb: 2,
            }}
          />
        </Link>
      )}

      <Link
        sx={{
          mb: "26px",
          fontWeight: 500,
          fontSize: [6],
          color: "text",
          display: "block",
        }}
        to={postLink}
        hideExternalIcon
      >
        {" "}
        {title}{" "}
      </Link>

      {!isNil(authors) && <BlogAuthor authors={authors} date={date} isDefaultLocale={locale === DEFAULT_LOCALE} />}

      <p>{description || excerpt}</p>
    </div>
  );
};

export default BlogCard;
