import React from "react";
import { useState, useEffect } from "react";
import Post from "./post";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const URL = "http://localhost:8080/api/posts/";
  const getPosts = () => {
    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        setPosts(response.posts);
        console.log(response.posts);
      });
  };
  const handleChange = response => {
    const temp = posts.map(post => {
      if (post.id === response.id) {
        return response;
      }
      return post;
    });
    console.log(temp);

    setPosts(temp);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className='post-list'>
      {posts.map(item => {
        return <Post key={item.id} post={item} onChange={handleChange} />;
      })}
    </section>
  );
}
