import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import NewCounter from "./components/NewCounter";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const render = () => {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <Counter />
        <NewCounter />
      </Provider>
    </StrictMode>
  );
};

render();
