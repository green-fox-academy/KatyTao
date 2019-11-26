import React from "react";
import Downvote from "../assets/img/arrows/downvote.png";
import Downvoted from "../assets/img/arrows/downvoted.png";
import Upvote from "../assets/img/arrows/upvote.png";
import Upvoted from "../assets/img/arrows/upvoted.png";
import timeConverter from "../assets/timeConverter";

export default function Post(props) {
  const timestamp = props.post.timestamp;
  const current = Date.now();
  return (
    <section className='post-section'>
      <div className='vote-section'>
        <img src={Upvote} alt='upvote' />
        <p>{props.post.score}</p>
        <img src={Downvote} alt='downvote' />
      </div>
      <div className='article-section'>
        <a href={props.post.url}>
          <h2>{props.post.title}</h2>
        </a>
        <p>
          submitted {timeConverter(current, timestamp)} ago by{" "}
          <a>{props.post.id}</a>
        </p>
        <div className='link-list'>
          <a href='#'>Modify</a>
          <a href='#'>Remove</a>
        </div>
      </div>
    </section>
  );
}
