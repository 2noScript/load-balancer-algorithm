import { Address, Pool } from "./types";

export class Server {
  private readonly _address: Address;
  private readonly _weight: number;
  private _connections: number;
  constructor(pool: Pool) {
    this._address = pool.address;
    this._weight = pool?.weight ?? 0;
    this._connections = 0;
  }

  get address() {
    return this._address;
  }
  set connections(currentConnections: number) {
    this._connections = currentConnections < 0 ? 0 : currentConnections;
  }
  get connections() {
    return this._connections;
  }
  get weight() {
    return this._weight;
  }
}

export abstract class BaseAlgorithm {
  private readonly _poolList: Pool[];
  private readonly _servers: Server[];
  constructor(poolList: Pool[]) {
    this._poolList = poolList;
    this._servers = poolList.map((pool) => new Server(pool));
  }

  abstract pick(requestIp?: Address): Server;
  get servers() {
    return this._servers;
  }
}
