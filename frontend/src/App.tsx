import React from "react";
import "./App.css";
import Blockchain from "./classes/blockchain";
//////////////////////////////////////////////////////
const newBlockchain = new Blockchain();
console.log("Minning Block...");
newBlockchain.addBlock({ wealth: 100, debt: 50 });
console.log("Done...\n------------------------\n");

console.log("Minning Block...");
newBlockchain.addBlock({ wealth: 120, debt: 25 });
console.log("Done...\n------------------------\n");

console.log("Minning Block...");
newBlockchain.addBlock({ wealth: 150, debt: 74 });
console.log("Done...\n------------------------\n");

// console.log(newBlockchain.showChain());
//////////////////////////////////////////////////////
// console.log("Chain is valid? " + newBlockchain.isChainValid());
//////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
function App() {
  return <div className='App'></div>;
}
export default App;
