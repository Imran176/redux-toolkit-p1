import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchUsers } from "../users/usersSlice";

const usersView = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <hr />
      <h3>Fetching User's Data Using Redux-Thunk</h3>
      {/* <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button> */}

      {usersList.loading && <div>Loading...</div>}
      {!usersList.loading && usersList.error ? (
        <>
          <h5>Error Fetching Users</h5>
          <div>{usersList.error}</div>
        </>
      ) : null}
      {!usersList.loading && usersList.users.length ? (
        <Container>
          {usersList.users.map((user, index) => (
            <Row key={index}>
              <Col xs={6} md={6}>
                <div className="user-info">
                  <h5>Name: </h5> <span>{user.name}</span>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="user-info">
                  <h5>Email: </h5> <span>{user.email}</span>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      ) : null}
      <hr />
    </div>
  );
};

export default usersView;
