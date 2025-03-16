import React from "react";

import { Link, useParams } from "react-router-dom";
import BlogItemPost from "../blogItem/BlogItemPost";

const RelatedBlogPost = ({ posts }) => {
  const params = useParams();

  const postId = parseInt(params.id);

  const filteredPosts = posts.data.filter((post) => post.id !== postId);

  return (
    <div className="bg-white-100">
      <div className="px-4 md:px-16 md:py-4 my-16 md:my-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" md:w-1/2 text-center font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Related Posts
          </h1>
        </div>

        <div className="my-12 md:my-20 grid md:grid-cols-3 gap-x-8 gap-y-16">
          {filteredPosts.slice(0, 3).map((post, index) => (
            <BlogItemPost key={index} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="px-6 py-3 w-auto text-center border border-primary-300 text-primary-300"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogPost;
