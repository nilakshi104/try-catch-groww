const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === "/api/hello") {
      return res.end(JSON.stringify({ message: "Hello, world!" }));
    }

    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
