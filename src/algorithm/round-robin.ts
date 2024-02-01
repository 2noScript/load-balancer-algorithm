import { Base, Server } from "./base";

export default class RoundRobin extends Base {
  currentIndex: number = 0;
  pick(): Server {
    const currentServer = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.size;
    return currentServer;
  }
}
