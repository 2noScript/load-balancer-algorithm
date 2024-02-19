// import { Base, Server } from "../models/base";

// export class LeastConnections extends Base {
//   private _servers: any;
//   public get servers(): any {
//     return this._servers;
//   }
//   public set servers(value: any) {
//     this._servers = value;
//   }
//   pick(): Server {
//     let leastConnections = Infinity;
//     let currentServer: Server = this.servers[0];
//     for (const sv of this.servers) {
//       const connections = sv.connections;
//       if (connections < leastConnections) {
//         leastConnections = connections;
//         currentServer = sv;
//       }
//     }
//     return currentServer;
//   }
// }
