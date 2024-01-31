import express from "express";
import LBA from "./algorithm";
import httpProxy from "http-proxy";
import axios from "axios";
const hostTest = [
  "http://localhost:5000",
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
];

const proxy = httpProxy.createProxyServer({});
const random = new LBA.Random(hostTest);
const roundRobin = new LBA.RoundRobin(hostTest);

const app = express();

const port = 3000;
app.use(express.json());

app.use(async (req, res) => {
  proxy.web(req, res, { target: random.pick() });
});

proxy.on("proxyReq", (proxyReq, req, res) => {
  //   const target = proxyReq._target.href;
  //   connectionCounts[target] = (connectionCounts[target] || 0) + 1;
});

// Đăng ký sự kiện xử lý khi kết nối kết thúc hoặc có lỗi
proxy.on("end", (req, res) => {
  //   const target = req.headers.host;
  //   connectionCounts[target] = Math.max(0, (connectionCounts[target] || 0) - 1);
});

app.listen(port, () => {
  console.log(`load balancer at http://localhost:${port}`);
});
