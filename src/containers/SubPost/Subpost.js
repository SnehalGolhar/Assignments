import React from "react";

import Post from "../Post/Post";

const Subpost = ({ posts }) => (
  <div style={{ margin: "2rem" }}>
    {posts.map((post, i) => {
      return <Post key={i} {...post.data} />;
    })}
  </div>
);

export default Subpost;
