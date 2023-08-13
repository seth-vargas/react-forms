import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
console.log("TodoList component rendered");

export default function TodoList() {
  const initialState = [
    { name: "First todo", key: uuid() },
    { name: "Second todo", key: uuid() },
  ];

  const [todoList, setTodoList] = useState([]);

  function deleteTodo(value) {
    setTodoList(todoList.filter((todo) => todo.key != value));
  }

  return (
    <>
      <NewTodoForm setTodoList={setTodoList} />
      <h2>Your Todos</h2>
      <ul>
        {todoList.map((todo) => (
          <Todo
            key={todo.key}
            value={todo.key}
            name={todo.name}
            remove={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
