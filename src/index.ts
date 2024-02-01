import express from "express";
import LBA from "./algorithm";
import httpProxy from "http-proxy";
const hostTest = [
  "http://localhost:7001",
  "http://localhost:7002",
  "http://localhost:7003",
  "http://localhost:7004",
  "http://localhost:7011",
];

const proxy = httpProxy.createProxyServer({});
const random = new LBA.Random(hostTest);
const roundRobin = new LBA.RoundRobin(hostTest);
const leastConnections = new LBA.LeastConnections(hostTest);

const app = express();

const port = 3000;
app.use(express.json());

app.use(async (req, res) => {
  const sv = leastConnections.pick();
  sv.connections += 1;
  console.log(sv);
  proxy.web(req, res, { target: sv.address });
});

proxy.on("proxyReq", (proxyReq, req, res) => {
  //   const target = proxyReq._target.href;
  //   connectionCounts[target] = (connectionCounts[target] || 0) + 1;
});

proxy.on("end", (req, res) => {
  //   const target = req.headers.host;
  //   connectionCounts[target] = Math.max(0, (connectionCounts[target] || 0) - 1);
  const sv = leastConnections.pick();
  // sv.complete();
  sv.connections -= 1;
  console.log(sv);
});

app.listen(port, () => {
  console.log(`load balancer at http://localhost:${port}`);
});
