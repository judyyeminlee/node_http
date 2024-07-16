const http = require("http");

const server = http.createServer((req, res) => {
  const chunks = [];

  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    const body = Buffer.concat(chunks).toString();

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to the Home Page</h1>");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ name: "Judy", Info: "Animal Lover" }));
    } else if (req.url === "/echo") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ method: req.method, url: req.url, body }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("<h1>404 Not Found</h1>");
    }
    res.end();
  });
});

server.listen(5555, () => {
  console.log("Listening");
});
