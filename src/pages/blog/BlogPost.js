import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BlogPostFeatures from "./sections/BlogPostFeatures";
import Marketplacesection from "../home/sections/Marketplacesection";
import BlogLoadingState from "../../components/ui/BlogLoadingState";
import BusinessCallToAction from "../home/sections/BusinessCallToAction";

const BlogPost = ({ posts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts !== undefined) {
      setLoading(false);
    }
  }, [posts]);

  if (loading) {
    return <BlogLoadingState />;
  }

  if (!posts || posts.length === 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-[55vh]">
          <h1 className="text-3xl text-primary-100">
            Error 404: Page not found
          </h1>
          <Link
            to="/"
            className="px-8 md:px-12 py-3 rounded-md bg-secondary-200 text-white-100 mt-8"
          >
            Go Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <BlogPostFeatures posts={posts} />
      <BusinessCallToAction />

    </>
  );
};
export default BlogPost;
