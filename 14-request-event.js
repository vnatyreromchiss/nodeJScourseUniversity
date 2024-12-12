import { createServer } from "http";

const server = createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
