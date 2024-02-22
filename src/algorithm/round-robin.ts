import { BaseAlgorithm, Server } from "../models/base";
import { Address } from "../models/types";

export class RoundRobin extends BaseAlgorithm {
  private currentIndex: number = 0;
  pick(requestIp?: Address): Server {
    const size = this.servers.length;
    const useServer = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % size;
    return useServer;
  }
}
