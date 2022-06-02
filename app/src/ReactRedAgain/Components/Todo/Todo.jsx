import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../Redux/todos/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, []);
  return (
    <div>
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
}

export default Todo;
