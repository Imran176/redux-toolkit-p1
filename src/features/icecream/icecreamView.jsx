import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./icecreamSlice";

const icecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <button onClick={() => dispatch(restocked(2))}>Restock Ice cream</button>
    </div>
  );
};

export default icecreamView;
