import { createServer } from "http";
import { createReadStream } from "fs";

createServer(function (req, res) {
  //  const text = fs.readFileSync('./content/big.txt', 'utf8')
  //res.end(text)
  const fileStream = createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
}).listen(5000);
