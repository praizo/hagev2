import React from "react";

const Card = ({ post }) => {
  return (
    <div className=" overflow-hidden font-main">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 lg:h-72 rounded-lg object-cover"
      />
      <div className="mt-3 text-left">
        <h3 className="font-semibold text-xl mt-3">{post.title}</h3>
        <p className="font-semibold mt-5 text-sm">{post.author}</p>
        <p className="text-sm">
          {post.date} • {post.readTime}
        </p>
      </div>
    </div>
  );
};

export default Card;
