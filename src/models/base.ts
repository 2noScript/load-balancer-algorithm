import { Address, Pool } from "./types";

interface IServerOptions {
  weight: number;
}

export class Server {
  private readonly _address: Address;
  private readonly _weight: number;
  private _connections: number;
  constructor(address: Address, options?: IServerOptions) {
    this._address = address;
    this._weight = options?.weight ?? 0;
    this._connections = 0;
  }

  get address() {
    return this._address;
  }
  set connections(currentConnections: number) {
    if (currentConnections < 0) {
      this._connections = 0;
      return;
    }
    this._connections = currentConnections;
  }
  get connections() {
    return this._connections;
  }
  get weight() {
    return this._weight;
  }
}

interface IAlgorithmOptions {
  requestIp: Address;
}
export abstract class BaseAlgorithm {
  private readonly _pool: Pool;
  private readonly _servers: Server[];
  private readonly _options!: IAlgorithmOptions;

  constructor(pool: Pool, options?: IAlgorithmOptions) {
    this._pool = pool;
    this._servers = pool.map((address) => new Server(address));
    if (options) this._options = options;
  }

  abstract pick(): Server;
  get servers() {
    return this._servers;
  }
}
