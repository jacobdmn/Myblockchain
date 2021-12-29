import React from "react";
import "./App.css";
import { Blockchain } from "./classes/blockchain";

const newBlockchain = new Blockchain();

console.log(newBlockchain.showMessage());
function App() {
  return <div className='App'></div>;
}

export default App;
