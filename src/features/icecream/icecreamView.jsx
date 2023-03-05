import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import { ordered, restocked } from "./icecreamSlice";

const icecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice creams - {numOfIcecreams}</h2>
      <Button variant="danger" onClick={() => dispatch(ordered())}>
        Order Ice cream
      </Button>

      <Button variant="outline-success" onClick={() => dispatch(restocked(2))}>
        Restock Ice cream
      </Button>
    </div>
  );
};

export default icecreamView;
