import React from "react";
import { useState, useEffect } from "react";
import { DEFAULT_URL, SERVER_URL } from "../config/config";
export default function SubmitPage() {
  const [url, setUrl] = useState(`/r/space/`);
  const [title, setTitle] = useState("");
  const updateURL = event => {
    const title = event.target.value;
    setTitle(title);
    const subUrl = title.split(" ").join("-");
    setUrl(`/r/space/${subUrl}`);
  };

  const changeURL = event => {
    const url = event.target.value;
    setUrl(url);
  };

  const handleSubmit = event => {
    const postObject = {
      title: title,
      url: url
    };
    const URL = `${SERVER_URL}/api/posts`;
    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(postObject)
    })
      .then(function() {
        window.location.replace(`${DEFAULT_URL}/r/space`);
      })
      .catch(function() {
        alert("Server error, please try again later");
      });

    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>
            <span>*</span>title
          </h2>
          <textarea onChange={updateURL}></textarea>
          <h2>URL</h2>
          <input type='text' value={url} onChange={changeURL} />
        </section>
        <input className='submit-btn' type='submit' />
      </form>
      <section className='blank-space'></section>
    </>
  );
}
