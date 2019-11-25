import React from "react";
import PostList from "./posts-list";
import PostButton from "./post-btn";
import AboutList from "./about";

export default function PostPage() {
  return (
    <>
      <PostList />
      <section className='side-bar'>
        <PostButton />
        <AboutList />
      </section>
    </>
  );
}
