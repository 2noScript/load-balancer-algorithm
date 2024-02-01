import { Address, Pool } from "../models";
export class Server {
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
    if (currentConnections < 0) {
      this._connections = 0;
      return;
    }
    this._connections = currentConnections;
  }
  get connections() {
    return this._connections;
  }
}
export class Base {
  private readonly _pool: Pool;
  private readonly _servers: Server[];

  constructor(pool: Pool) {
    this._pool = pool;
    const servers: Server[] = [];
    for (const item of pool) {
      servers.push(new Server(item));
    }
    this._servers = servers;
  }

  pick(): Server {
    return new Server("localhost:300");
  }

  get size() {
    return this._pool?.length ?? 0;
  }
  get servers() {
    return this._servers;
  }
}
