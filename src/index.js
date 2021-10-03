import ReactDOM from "react-dom";
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

// https://v2.parceljs.org/features/development#hot-reloading
if (module.hot) {
  module.hot.accept();
}
