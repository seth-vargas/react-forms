import React, { useState } from "react";

export default function Box({ color, width, height, remove, value }) {
  function handleRemove(event) {
    remove(value);
  }
  return (
    <>
      <div
        style={{ backgroundColor: color, width: width, height: height }}
      ></div>
      <button onClick={handleRemove}>X</button>
    </>
  );
}
