import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function NewBoxForm({ setBoxList }) {
  const initialData = {
    color: "#000000",
    height: "",
    width: "",
  };

  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function createNewBox(e) {
    e.preventDefault();

    const newBox = {
      color: color.value,
      width: `${width.value}px`,
      height: `${height.value}px`,
      key: uuid(),
    };

    setBoxList((prevData) => [...prevData, newBox]);
    setFormData(initialData)

    console.log(newBox);
    console.log("Box created!");
  }

  return (
    <>
      <h3>Make a new box!</h3>
      <form onSubmit={createNewBox}>
        <div className="input-field">
          <label htmlFor="color">Color: </label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="width">Width: </label>
          <input
            type="number"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="height">Height: </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button>Create!</button>
        </div>
      </form>
    </>
  );
}
