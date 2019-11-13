import React from 'react';
import {fetchData} from './asyncAction';
import {useDispatch, useSelector} from 'react-redux';



export default function PlaceHolder() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  return(
    <>
    <button onClick={()=>{dispatch(fetchData())}}>Click me to fetch titles!</button>
    <section>
      <div className="comments">
        {posts.map((value,index)=>{if(index<10){return <p>{value.title}</p>}})}
      </div>
    </section>
    </>
  )
}