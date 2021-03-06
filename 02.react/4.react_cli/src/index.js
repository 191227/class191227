import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  // 负责给后台组件传递store数据
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
