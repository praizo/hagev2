import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BlogPostContentFeatures from "./sections/BlogPostContentFeatures";
import BookDemo from "../../components/Bookdemo/BookDemo";
import RelatedBlogPost from "./sections/RelatedBlogPost";
import BlogLoadingState from "../../components/ui/BlogLoadingState";
import BusinessCallToAction from "../home/sections/BusinessCallToAction";

const BlogPostContent = ({ posts }) => {
  const params = useParams();
  const navigate = useNavigate();
  const postId = params.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postIdInt = parseInt(postId, 10);
    if (posts) {
      const foundPost = posts.data.find((post) => post.id === postIdInt);
      setPost(foundPost);
      setLoading(false);
    }
  }, [posts, postId]);

  const goBackHandler = () => {
    navigate(-1);
  };

  if (loading) {
    return <BlogLoadingState />;
  }

  if (!post) {
    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-[55vh]">
          <h1 className="text-3xl text-primary-100">Post not found</h1>
          <button
            onClick={goBackHandler}
            className="px-8 md:px-12 py-3 rounded-md bg-secondary-200 text-white-100 mt-8"
          >
            Go to Blog
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <BlogPostContentFeatures post={post} />
      {/* <RelatedBlogPost postId={postId} posts={posts} /> */}
      <BusinessCallToAction />
    </>
  );
};

export default BlogPostContent;
