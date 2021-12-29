import Block from "./block";

export default class Blockchain {
  chain: Block[];
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "10/04/1998", "Genesis Block WOW!", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data: any) {
    // init vars
    let index = this.getLatestBlock().index + 1;
    let timestamp = new Date().getTime().toString();
    let previousHash = this.getLatestBlock().hash;

    /// create it
    let newBlock = new Block(index, timestamp, data, previousHash);

    // append to chain
    this.chain.push(newBlock);

    // return it
    return newBlock;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      if (this.chain[i - 1].hash !== this.chain[i].previousHash) return false;
      if (this.chain[i].hash !== this.chain[i].generateHash()) return false;
    }
    return true;
  }

  showChain() {
    return JSON.stringify(this.chain, null, 4);
  }
}
