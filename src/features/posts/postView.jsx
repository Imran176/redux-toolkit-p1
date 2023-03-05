import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPostsStart, fetchPhotosStart } from "./postSlice";

const postView = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.post);

  return (
    <div>
      <h3>Fetching Data Using Redux-Saga</h3>
      <button onClick={() => dispatch(fetchPostsStart())}>Fetch Posts</button>
      <button onClick={() => dispatch(fetchPhotosStart())}>Fetch Photos</button>

      {postsList.loading && <div>Loading...</div>}

      {!postsList.loading && postsList.error ? (
        <>
          <h5>Error Fetching Posts</h5>
          <div>{postsList.error}</div>
        </>
      ) : null}

      {!postsList.loading && postsList.posts.length ? (
        <ul>
          {postsList.posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      ) : !postsList.loading && postsList.photos.length ? (
        <ul>
          {postsList.photos.map((photo, index) => (
            <li key={index}>
              <img src={photo.url} alt="" />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default postView;
