import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.isDone === isDone)
  );

  return (
    <section>
      <h2>{isDone ? "Done!!" : "Working..."}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
