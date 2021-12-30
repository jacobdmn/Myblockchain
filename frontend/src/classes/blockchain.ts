import Block from "./block";

export default class Blockchain {
  chain: Block[];
  difficulty: number;
  constructor() {
    this.difficulty = 1;
    this.chain = [this.createGenesisBlock(this.difficulty)];
  }

  createGenesisBlock(difficulty: number) {
    return new Block(0, "10/04/1998", "Genesis Block", "0", difficulty);
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
    let newBlock = new Block(
      index,
      timestamp,
      data,
      previousHash,
      this.difficulty
    );

    // append to chain
    this.chain.push(newBlock);

    // return it
    return newBlock;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const previousBlock = this.chain[i - 1];
      const currentBlock = this.chain[i];

      if (currentBlock.hash !== currentBlock.calculateHash()) return false;

      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }

  showChain() {
    return JSON.stringify(this.chain, null, 4);
  }
}
