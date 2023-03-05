import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import { ordered, restocked } from "./pizzaSlice";

const pizzaView = () => {
  const [value, setValue] = useState(1);
  const numOfPizzas = useSelector((state) => state.pizza.numOfPizza);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Pizzas - {numOfPizzas}</h2>
      <Button variant="success" onClick={() => dispatch(ordered(value))}>
        Order Pizza
      </Button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <Button
        variant="outline-primary"
        onClick={() => dispatch(restocked(value))}
      >
        Restock Pizza
      </Button>
    </div>
  );
};

export default pizzaView;
