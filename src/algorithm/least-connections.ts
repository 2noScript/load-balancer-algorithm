import { BaseAlgorithm, Server } from "../models/base";
import { Address } from "../models/types";

export class LeastConnections extends BaseAlgorithm {
  pick(requestIp?: Address): Server {
    let leastConnections = Infinity;
    let useServer: Server = this.servers[0];
    for (const sv of this.servers) {
      const connections = sv.connections;
      if (connections < leastConnections) {
        leastConnections = connections;
        useServer = sv;
      }
    }
    return useServer;
  }
}
