import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import * as tools from "../tools.js";

const read = async () => {
  const fileToRead = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToRead.txt"
  );
  createReadStream(fileToRead).pipe(stdout);
};

await read();
