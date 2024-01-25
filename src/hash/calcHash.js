import { createHash } from "crypto";
import { createReadStream } from "node:fs";
import * as tools from "../tools.js";

const calculateHash = async () => {
  const fileToCalculate = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const hash = createHash("sha256");

  const readStream = createReadStream(fileToCalculate, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
