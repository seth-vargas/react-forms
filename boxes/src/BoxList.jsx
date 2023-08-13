import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";

export default function BoxList() {
  /* const startingData = [
    {
      key: uuid(),
      color: "blue",
      width: "100px",
      height: "100px",
    },
    {
      key: uuid(),
      color: "red",
      width: "50px",
      height: "50px",
    },
    {
      key: uuid(),
      color: "blue",
      width: "100px",
      height: "100px",
    },
    {
      key: uuid(),
      color: "red",
      width: "50px",
      height: "50px",
    },
  ]; */

  const [boxList, setBoxlist] = useState([]);

  function deleteBox(value) {
    setBoxlist(boxList.filter((box) => box.key != value));
  }

  return (
    <>
      <NewBoxForm setBoxList={setBoxlist} />
      <ul>
        {boxList.map((box) => (
          <Box
            key={box.key}
            value={box.key}
            color={box.color}
            width={box.width}
            height={box.height}
            remove={deleteBox}
          />
        ))}
      </ul>
    </>
  );
}
