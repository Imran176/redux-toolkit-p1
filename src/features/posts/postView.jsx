import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchPostsStart, fetchPhotosStart } from "./postSlice";

const postView = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.post);

  return (
    <div>
      <h3>Fetching Data Using Redux-Saga</h3>
      <div className="btn-group">
        <Button
          variant="outline-info"
          onClick={() => dispatch(fetchPostsStart())}
        >
          Fetch Posts
        </Button>
        <Button variant="success" onClick={() => dispatch(fetchPhotosStart())}>
          Fetch Photos
        </Button>
      </div>

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
        <Container>
          <Row>
            {postsList.photos.map((photo, index) => (
              <Col xs={6} md={4} key={index}>
                <img src={photo.thumbnailUrl} alt="" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}
    </div>
  );
};

export default postView;
