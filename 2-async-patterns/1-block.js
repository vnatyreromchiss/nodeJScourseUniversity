import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (res.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000...");
});
