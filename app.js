console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello again");
});

server.listen(5000, () => {
  console.log("Can you see me?");
});
