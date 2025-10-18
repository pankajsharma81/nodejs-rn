const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  } else if (req.url === "/contact") {
    res.end("Contact page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
