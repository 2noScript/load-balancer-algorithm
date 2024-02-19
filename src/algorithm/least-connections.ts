import { BaseAlgorithm, Server } from "../models/base";

export class LeastConnections extends BaseAlgorithm {
  pick(): Server {
    let leastConnections = Infinity;
    let currentServer: Server = this.servers[0];
    for (const sv of this.servers) {
      const connections = sv.connections;
      if (connections < leastConnections) {
        leastConnections = connections;
        currentServer = sv;
      }
    }
    return currentServer;
  }
}
