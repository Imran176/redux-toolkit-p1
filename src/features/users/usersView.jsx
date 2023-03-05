import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
        <ul>
          {usersList.users.map((user, index) => (
            <li key={index}>
              <div className="user-info">
                <h5>Name: </h5> {user.name}
                <h5>Email: </h5> {user.email}
                <h5>Website: </h5> {user.website}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
      <hr />
    </div>
  );
};

export default usersView;
