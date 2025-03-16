import React, { useState } from "react";

import BlogItemPost from "../blogItem/BlogItemPost";

const BlogPostFeatures = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.data.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white-100 transition-opacity duration-500 pt-44 pb-20">
      <div className="px-4 md:px-16 md:pt-12 md:pb-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="xl:w-1/2 text-center font-main font-normal text-4xl md:text-5xl leading-9 md:leading-tight">
            Explore industry insights and practical advice
          </h1>
        </div>

        <div className="my-12 md:my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {currentPosts.map((post, index) => (
            <BlogItemPost key={index} post={post} />
          ))}
        </div>

        <div className="flex justify-between items-center mt-6 md:mt-8">
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-2 mx-1 border border-primary-300 text-primary-300 rounded ${
                  i + 1 === currentPage ? "bg-primary-300 text-white-100" : ""
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div>
            {currentPage > 1 && (
              <button
                className="px-6 py-3 w-auto text-center border border-primary-300 text-primary-300 mr-4"
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            )}
            {currentPage < totalPages && (
              <button
                className="px-6 py-3 w-auto text-center border border-primary-300 text-primary-300"
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostFeatures;
