import { sample } from "../utils";
import { Base, Server } from "./base";

export default class Random extends Base {
  pick(): Server {
    const currentServe = sample(this.servers);
    return currentServe;
  }
}
