import { Address, Pool } from "../models";
import { Base } from "./base";

class Server {
  private _address: Address;
  private _connections: number;
  constructor(address: Address) {
    this._address = address;
    this._connections = 0;
  }
  get address() {
    return this._address;
  }
  set connections(currentConnections: number) {
    this._connections = currentConnections;
  }
  get connections() {
    return this._connections;
  }
}

export default class LeastConnections extends Base {
  private _servers: Server[];
  constructor(pool: Pool) {
    super(pool);
    const servers: Server[] = [];
    for (const item of pool) {
      servers.push(new Server(item));
    }
    this._servers = servers;
  }

  pick() {
    let leastConnections = Infinity;
    let selectedServer: Server = this._servers[0];
    for (const sv of this._servers) {
      const connections = sv.connections;
      if (connections < leastConnections) {
        leastConnections = connections;
        selectedServer = sv;
      }
    }
    selectedServer.connections += 1;
    return selectedServer.address;
  }
}
