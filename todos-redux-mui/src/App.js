import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
