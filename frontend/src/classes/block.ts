import { urlToHttpOptions } from "url";

export class Block {
  index: string;
  timestamp: string;
  data: any;
  previousHash: string;
  hash: string;

  constructor(
    index: string,
    timestamp: string,
    data: any,
    previousHash: string
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;

    this.hash = this.generateHash();
  }

  generateHash() {
    return "2";
  }
}
