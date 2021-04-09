/** @jsx jsx */

import isNil from "lodash/isNil";
import { BlogAuthor } from "@modules/blog";
import { useTranslation } from "@modules/localization";
import { Link } from "@modules/navigation";
import { getBlogPostTypeFromPath, TitleConverter, UrlConverter } from "@utils";
import { parseInt } from "lodash";
import { jsx } from "theme-ui";

const BlogCard = ({
  excerpt,
  fileAbsolutePath,
  frontmatter,
  isLatest,
  headings,
}) => {
  const { t, locale, DEFAULT_LOCALE } = useTranslation();

  const { authors, date, description, image, title } = frontmatter;
  const type = getBlogPostTypeFromPath(fileAbsolutePath);

  const isContent = fileAbsolutePath.indexOf("/content/") !== -1;

  const postLink = isContent
    ? UrlConverter({ fileAbsolutePath })
    : fileAbsolutePath
        .slice(
          fileAbsolutePath.indexOf("/blogPosts/") + 10,
          fileAbsolutePath.length
        )
        .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "");

  const pagePathSplit = postLink
    .split("/")
    .splice(1, postLink.split("/").length - 1);
  const typeIndex = pagePathSplit.indexOf("blog") + 1;

  //Split absolute path up to blog, get directory AFTER blog.
  let postType =
    typeIndex !== pagePathSplit.length - 1
      ? pagePathSplit[typeIndex]
      : "general";

  let postImage = null;

  if (image === null || image === undefined) {
    postImage = `/images/blog_headers/${postType}_1.png`; //will be general image 1
  } else {
    if (isNaN(parseInt(image))) {
      //Not a number, but a string. Expect entire src url
      postImage = image;
    } else {
      postImage = `/images/blog_headers/${postType}_${image}.png`;
    }
  }

  let postTitle = title;

  if (isContent) {
    postImage = `/images/blog_headers/general_1.png`;
    postType = null;
    postTitle = TitleConverter({ frontmatter, fileAbsolutePath, headings });
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
        {postTitle}{" "}
      </Link>

      {!isNil(authors) && (
        <BlogAuthor
          authors={authors}
          date={date}
          isDefaultLocale={locale === DEFAULT_LOCALE}
        />
      )}

      <p>{description || excerpt}</p>
    </div>
  );
};

export default BlogCard;
