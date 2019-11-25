import React from "react";
export default function SubmitPage() {
  let title = React.createRef();
  let url = React.createRef();
  return (
    <>
      <form>
        <section>
          <h2>
            <span>*</span>title
          </h2>
          <textarea ref={title}></textarea>
          <h2>URL</h2>
          <input ref={url} type='text' />
        </section>
        <input className='submit-btn' type='submit' />
      </form>
      <section className='blank-space'></section>
    </>
  );
}
