import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function NewTodoForm({ setTodoList }) {
  const initialData = {
    name: "",
  };

  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function createNewTodo(e) {
    e.preventDefault();

    if (formData.name !== "") {
      const newTodo = { name: formData.name, key: uuid() };

      setTodoList((prevData) => [...prevData, newTodo]);
      return setFormData(initialData);
    }

    alert ("Todo needs a name!")
  }

  return (
    <form onSubmit={createNewTodo}>
      <div>
        <label htmlFor="name">Todo name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
