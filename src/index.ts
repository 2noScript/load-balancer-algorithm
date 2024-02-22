import express from "express";
import LBAlgorithm from "./algorithm";
import httpProxy from "http-proxy";
import { LOAD_BALANCER_ALGORITHM, Pool } from "./models/types";

const pools: Pool[] = [
  {
    address: "http://localhost:4001",
    weight: 0,
  },
  {
    address: "http://localhost:4002",
    weight: 0,
  },
  {
    address: "http://localhost:4003",
    weight: 0,
  },
  {
    address: "http://localhost:4004",
    weight: 0,
  },
  {
    address: "http://localhost:4005",
    weight: 0,
  },
];

const proxy = httpProxy.createProxyServer({});
const algorithm = new LBAlgorithm(pools).build(LOAD_BALANCER_ALGORITHM.IP_HASH);

const app = express();

const port = 3000;

app.use(async (req, res) => {
  const sv = algorithm.pick(req.ip);
  sv.connections += 1;
  proxy.web(req, res, { target: sv.address });
});

proxy.on("proxyReq", (proxyReq, req, res) => {});

proxy.on("proxyRes", (proxyRes: any, req: any, res) => {
  const { remoteAddress, remotePort } = proxyRes.socket;
  const addProxyRes = `http://localhost:${remotePort}`;
  const useServer = algorithm.servers.find((sv) => sv.address === addProxyRes);
  console.log(useServer);
  if (useServer) {
    useServer.connections -= 1;
  }
});

app.listen(port, () => {
  console.log(`load balancer at http://localhost:${port}`);
});
