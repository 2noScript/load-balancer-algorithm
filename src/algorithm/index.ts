import { LOAD_BALANCER_ALGORITHM, Pool } from "../models/types";

import { Random } from "./random";
import { RoundRobin } from "./round-robin";
import { LeastConnections } from "./least-connections";
import { IpHash } from "./ip-hash";

export default class LBAlgorithm {
  private readonly _poolList: Pool[];
  constructor(poolList: Pool[]) {
    this._poolList = poolList;
  }

  build(type: LOAD_BALANCER_ALGORITHM) {
    switch (type) {
      case LOAD_BALANCER_ALGORITHM.LEAST_CONNECTIONS:
        return new LeastConnections(this._poolList);
      case LOAD_BALANCER_ALGORITHM.RANDOM:
        return new Random(this._poolList);
      case LOAD_BALANCER_ALGORITHM.ROUND_ROBIN:
        return new RoundRobin(this._poolList);
      case LOAD_BALANCER_ALGORITHM.IP_HASH:
        return new IpHash(this._poolList);
    }
  }
}
