import React from "react";
import Downvote from "../assets/img/arrows/downvote.png";
import Downvoted from "../assets/img/arrows/downvoted.png";
import Upvote from "../assets/img/arrows/upvote.png";
import Upvoted from "../assets/img/arrows/upvoted.png";
import timeConverter from "../assets/timeConverter";
import { SERVER_URL } from "../config/config";

export default function Post(props) {
  const timestamp = props.post.timestamp;
  const current = Date.now();
  let vote = props.post.vote;
  const putVote = method => {
    console.log(vote);

    const URL = `${SERVER_URL}/api/posts/${props.post.id}/${method}`;
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        vote = response.vote;
        props.onChange(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section className='post-section'>
      <div className='vote-section'>
        <img
          src={vote === 1 ? Upvoted : Upvote}
          onClick={() => putVote("upvote")}
          alt='upvote'
        />
        <p>{props.post.score}</p>
        <img
          src={vote === -1 ? Downvoted : Downvote}
          onClick={() => putVote("downvote")}
          alt='downvote'
        />
      </div>
      <div className='article-section'>
        <a href={props.post.url}>
          <h2>{props.post.title}</h2>
        </a>
        <p>
          submitted {timeConverter(current, timestamp)} ago by{" "}
          <a>{props.post.owner}</a>
        </p>
        <div className='link-list'>
          <a href='#'>Modify</a>
          <a href='#'>Remove</a>
        </div>
      </div>
    </section>
  );
}
