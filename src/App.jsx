import React, { useState } from "react";
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  }

  function handleDelete(indexToDelete) {
    setItems((prevItems) =>
      prevItems.filter((item, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button
                onClick={() => handleDelete(index)}
                style={{ marginLeft: "10px" }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
