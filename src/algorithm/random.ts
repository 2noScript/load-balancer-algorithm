import { BaseAlgorithm, Server } from "../models/base";
import { Address } from "../models/types";
import { sample } from "../utils";

export class Random extends BaseAlgorithm {
  pick(requestIp?: Address): Server {
    const useServer = sample(this.servers);
    return useServer;
  }
}
