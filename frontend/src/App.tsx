import React from "react";
import "./App.css";
import Blockchain from "./classes/blockchain";
//////////////////////////////////////////////////////
const newBlockchain = new Blockchain();
newBlockchain.addBlock({
  wealth: 100,
  debt: 58,
  countries: ["Thailand", "India", "USA"],
});
newBlockchain.addBlock({
  wealth: 30,
  debt: 12,
  countries: ["France", "Spain", "UK"],
});
newBlockchain.addBlock({
  wealth: 310,
  debt: 43,
  countries: ["Australia", "China", "Japan"],
});
//////////////////////////////////////////////////////
console.log(newBlockchain.showChain());

console.log("Chain is valid? " + newBlockchain.isChainValid());

newBlockchain.chain[1].data = "";

console.log("Chain is valid? " + newBlockchain.isChainValid());

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

function App() {
  return <div className='App'></div>;
}

export default App;
