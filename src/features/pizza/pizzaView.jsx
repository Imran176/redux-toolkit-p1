import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./pizzaSlice";

const pizzaView = () => {
  const [value, setValue] = useState(1);
  const numOfPizzas = useSelector((state) => state.pizza.numOfPizza);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Pizzas - {numOfPizzas}</h2>
      <button onClick={() => dispatch(ordered(value))}>Order Pizza</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Pizza</button>
    </div>
  );
};

export default pizzaView;
