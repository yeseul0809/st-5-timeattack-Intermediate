// Hint: TodoItem 컴포넌트는 props 를 받습니다.

import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>{todo.title}</p>
        <p>{todo.content}</p>
      </section>
      <section>
        <button onclick={() => dispatch(toggleTodo(todo.id))}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onclick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
