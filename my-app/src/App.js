import React, { useState } from "react";
import './App.css';


import Input from "./input";
import Output from "./output";

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (inputText) => {
    if (inputText.target.value.length < 51) setValue(inputText.target.value);
  };

  return (
    <div className="App">
      <Input value={value} onChange={onChange}/>
      <Output value={value} />
    </div>
  );
}