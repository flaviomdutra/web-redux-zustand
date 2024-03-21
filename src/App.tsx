import { Provider as ReduxProvider } from "react-redux";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoLists";
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
