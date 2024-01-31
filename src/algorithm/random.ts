import { Address } from "../models";
import { sample } from "../utils";
import { Base } from "./base";

export default class Random extends Base {
  pick(): Address {
    const address = sample(this.pool);
    this._usingAddress = address;
    return address;
  }
}
