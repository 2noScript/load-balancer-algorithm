import { BaseAlgorithm, Server } from "../models/base";
import { sample } from "../utils";

export class Random extends BaseAlgorithm {
  pick(): Server {
    const useServer = sample(this.servers);
    return useServer;
  }
}
