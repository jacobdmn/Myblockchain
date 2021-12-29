import SHA256 from "crypto-js/sha256";
export default class Block {
  index: number;
  timestamp: string;
  data: any;
  previousHash: string;
  hash: string;
  nonce: number;

  constructor(
    index: number,
    timestamp: string,
    data: any,
    previousHash: string = "",
    difficulty: number
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;

    this.hash = this.mineBlock(difficulty);
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.timestamp +
        JSON.stringify(this.data) +
        this.previousHash +
        this.nonce
    ).toString();
  }
  mineBlock(difficulty: number) {
    this.hash = this.calculateHash();
    while (
      this.hash.substring(0, difficulty) !== new Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    return this.hash;
  }
}
