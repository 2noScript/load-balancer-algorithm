import { BaseAlgorithm, Server } from "../models/base";

export class RoundRobin extends BaseAlgorithm {
  private currentIndex: number = 0;
  pick(): Server {
    const size = this.servers.length;
    const currentServer = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % size;
    return currentServer;
  }
}
