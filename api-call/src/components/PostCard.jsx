import React from "react";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
