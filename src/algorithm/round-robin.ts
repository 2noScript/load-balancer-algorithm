import { Address } from "../models";
import { Base } from "./base";

export default class RoundRobin extends Base {
  currentIndex: number = 0;
  pick(): Address {
    console.log(this.currentIndex);
    const address = this.pool[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.size;
    return address;
  }
}
