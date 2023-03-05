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
      <h3>Fetching Users Using Redux-Thunk</h3>
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
                <h4>Name: </h4> {user.name}
                <h4>Email: </h4> {user.email}
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
