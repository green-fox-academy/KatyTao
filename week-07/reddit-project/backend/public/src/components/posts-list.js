import React from "react";
import Post from "./post";
const data = {
  posts: [
    {
      id: 25,
      title: "Dear JavaScript",
      url: "http://9gag.com",
      timestamp: 1494339525,
      score: 791
      // (Optional) "owner": null,
      // (Optional) "vote": 1,
      // (Optional) "comments": 3
    },
    {
      id: 74,
      title: "Crockford",
      url: "http://9gag.com",
      timestamp: 1494138425,
      score: 567
      // (Optional) "owner": "kristof4",
      // (Optional) "vote": -1,
      // (Optional) "comments": 2
    }
  ]
};

export default function PostList() {
  return (
    <section className='post-list'>
      {data.posts.map(item => {
        return <Post post={item} />;
      })}
    </section>
  );
}
