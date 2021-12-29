import SHA256 from "crypto-js/sha256";
export default class Block {
  index: number;
  timestamp: string;
  data: any;
  previousHash: string;
  hash: string;

  constructor(
    index: number,
    timestamp: string,
    data: any,
    previousHash: string = ""
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;

    this.hash = this.generateHash();
  }

  generateHash() {
    return SHA256(
      this.index +
        this.timestamp +
        JSON.stringify(this.data) +
        this.previousHash
    ).toString();
  }
}
