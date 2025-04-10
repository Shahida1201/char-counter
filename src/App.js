import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Character Counter Tool</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      />
      <div className="counter">Characters: {text.length}</div>
    </div>
  );
}

export default App;
