// import express from "express";
// import * as LBA from "./algorithm";
// import httpProxy from "http-proxy";
// import { Pool } from "./models/types";
// const hostTest = [
//   "http://localhost:7001",
//   "http://localhost:7002",
//   "http://localhost:7003",
//   "http://localhost:7004",
//   "http://localhost:7011",
// ];

// const pools: Pool[] = [
//   {
//     address: "http://localhost:7001",
//     weight: 0,
//   },
//   {
//     address: "http://localhost:7001",
//     weight: 0,
//   },
//   {
//     address: "http://localhost:7001",
//     weight: 0,
//   },
//   {
//     address: "http://localhost:7001",
//     weight: 0,
//   },
//   {
//     address: "http://localhost:7001",
//     weight: 0,
//   },
// ];

// const proxy = httpProxy.createProxyServer({});
// const random = new LBA.Random();
// const roundRobin = new LBA.RoundRobin();
// const leastConnections = new LBA.LeastConnections();

// const app = express();

// const port = 3000;
// app.use(express.json());

// app.use(async (req, res) => {
//   const sv = leastConnections.pick();
//   sv.connections += 1;
//   console.log(sv);
//   proxy.web(req, res, { target: sv.address });
// });

// proxy.on("proxyReq", (proxyReq, req, res) => {});

// proxy.on("end", (req, res) => {
//   const sv = leastConnections.pick();
//   // sv.connections -= 1;
//   // console.log(sv);
// });

// app.listen(port, () => {
//   console.log(`load balancer at http://localhost:${port}`);
// });
