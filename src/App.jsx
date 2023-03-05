import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import PizzaView from "./features/pizza/pizzaView";
import IcecreamView from "./features/icecream/icecreamView";
import UsersView from "./features/users/usersView";
import PostView from "./features/posts/postView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PizzaView />
      <IcecreamView />
      <UsersView />
      <PostView />
    </div>
  );
}

export default App;
