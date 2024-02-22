import { BaseAlgorithm, Server } from "../models/base";
import { Address } from "../models/types";
import crypto from "crypto";

export class IpHash extends BaseAlgorithm {
  pick(requestIp?: Address): Server {
    const hashCode = crypto
      .createHash("md5")
      .update(requestIp ?? "")
      .digest("hex");
    const useServerIndex = parseInt(hashCode, 16) % this.servers.length;
    const useServer = this.servers[useServerIndex];
    return useServer;
  }
}
