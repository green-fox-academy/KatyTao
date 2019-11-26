import React from "react";
import { useState, useEffect } from "react";
import Post from "./post";

const data = {
  posts: [
    {
      id: 25,
      title: "Dear JavaScript",
      url: "http://9gag.com",
      timestamp: 1494339525,
      score: 791
    },
    {
      id: 74,
      title: "Crockford",
      url: "http://9gag.com",
      timestamp: 1494138425,
      score: 567
    }
  ]
};

export default function PostList() {
  const initialPosts = {
    posts: [
      {
        id: "",
        title: "",
        url: "",
        timestamp: "",
        score: ""
      }
    ]
  };
  const [posts, setPosts] = useState(initialPosts);
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
        setPosts(response);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className='post-list'>
      {posts.posts.map(item => {
        return <Post post={item} />;
      })}
    </section>
  );
}
