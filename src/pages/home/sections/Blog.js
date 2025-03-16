import React from "react";
import Card from "../../../components/Card/Card";
import blogimage from "../../../assests/blog-image.png";

const Blog = () => {
  const blogPosts = [
    {
      title: "How we solve logistic problems for drivers",
      author: "Lekan Omotosho",
      date: "11 May 2024",
      readTime: "5 min read",
      image: blogimage,
    },
    {
      title: "How we solve logistic problems for fleet owners",
      author: "Lekan Omotosho",
      date: "11 May 2024",
      readTime: "5 min read",
      image: blogimage,
    },
    {
      title: "How we solve logistic problems for distributors",
      author: "Lekan Omotosho",
      date: "11 May 2024",
      readTime: "5 min read",
      image: blogimage,
    },
  ];

  return (
    <div className="bg-white-100 px-4 xl:px-20 py-4 md:py-16 font-main">
      <div className=" flex justify-center items-center mb-9">
        <h2 className="text-5xl font-medium ">Blog</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 xl:gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
      <div className="mt-9 flex justify-center items-center">
        <button className="px-6 bg-secondary-200 text-white-100 font-medium py-3 rounded-md hover:bg-primary-100 transition">
          Read more
        </button>
      </div>
    </div>
  );
};
export default Blog;
