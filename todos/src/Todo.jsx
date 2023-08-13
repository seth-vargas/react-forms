import React, { useState } from "react";
console.log("Todo component rendered");

export default function Todo({ name, remove, edit, value }) {
  const [todoName, setTodoName] = useState(name);

  function handleRemove(event) {
    remove(value);
  }

  function handleEdit(e) {
    console.log(e.target)
    console.log("Editing todo")
  }

  return (
    <li>
      <p onDoubleClick={handleEdit}>
        {name} <button onClick={handleRemove}>X</button>
      </p>
    </li>
  );
}
