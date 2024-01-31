import { Address, Pool } from "../models";

export class Base {
  private readonly _pool: Pool;
  _usingAddress: Address = "localhost:300";
  constructor(pool: Pool) {
    this._pool = pool;
  }

  pick(): Address {
    return "";
  }

  get usingAddress() {
    return this._usingAddress;
  }
  get pool() {
    return this._pool;
  }
  get size() {
    return this._pool?.length ?? 0;
  }
}
