import React from "react";

const BlogLoadingState = () => {
  return (
    <div className="bg-white-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Loading...</h2>
      <div className="flex flex-wrap -mx-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 h-64 rounded-lg"></div>
            <div className="bg-gray-200 h-4 mt-4 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingState;
