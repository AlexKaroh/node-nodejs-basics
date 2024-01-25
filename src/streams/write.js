import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import * as tools from "../tools.js";

const write = async () => {
  const fileToRead = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToWrite.txt"
  );
  stdin.pipe(createWriteStream(fileToRead));
};

await write();
