import React from "react";
import ReactDOM from "react-dom";
import TheTodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";

import todoApp from "./redux/reducer";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <TheTodoList />
  </Provider>,
  document.getElementById("container")
);
