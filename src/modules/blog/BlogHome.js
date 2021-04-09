import React from "react";
import { BlogCard, BlogResult } from "@modules/blog";
import { Link } from "@modules/navigation";
import { Button } from "@modules/ui";

const BlogHome = () => {
  return (
    <div>
      <h3>Maker Community Blog</h3>

      <ul>
        <li>Home</li>
        <li>Governance</li>
        <li>Community</li>
        <li>Editorial</li>
      </ul>

      <ul>
        <li>
          <BlogCard isLatest post={{ type: "governance" }} />
          <BlogCard isLatest post={{ type: "governance" }} />
          <BlogCard isLatest post={{ type: "governance" }} />
        </li>
      </ul>

      <div>
        <div>
          <BlogResult post={{ type: "governance" }} />
          <BlogResult post={{ type: "governance" }} />
          <BlogResult post={{ type: "governance" }} />
          <BlogResult post={{ type: "governance" }} />
        </div>

        <div>
          Languages
          <ul>
            <li>
              <Link to="/blog/en">English</Link>
            </li>
            <li>
              <Link to="/blog/es">Español</Link>
            </li>
            <li>
              <Link to="/blog/it">Italiano</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Button icon="plus">See more posts</Button>
      </div>
    </div>
  );
};

export default BlogHome;
