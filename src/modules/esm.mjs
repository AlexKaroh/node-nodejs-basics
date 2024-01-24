import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import "./files/c.js";

const RANDOM_VALUE = Math.random();
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const unknownObject = require(`./files/${RANDOM_VALUE > 0.5 ? "a" : "b"}.json`);

console.log(
  `Release ${release()}` +
    "\n" +
    `Version ${version()}` +
    "\n" +
    `Path segment separator is "${path.sep}"` +
    "\n" +
    `Path to current file is ${__filename}` +
    "\n" +
    `Path to current directory is ${__dirname}`
);

console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}` +
      "\n" +
      "To terminate it, use Ctrl+C combination"
  );
});

export { unknownObject, myServer };
