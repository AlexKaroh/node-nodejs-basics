import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import * as tools from "../tools.js";

const compress = async () => {
  const pipelineAsync = promisify(pipeline);
  const inputFile = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const outputFile = tools.setFilePath(import.meta.url, "files", "archive.gz");
  await pipelineAsync(
    createReadStream(inputFile),
    createGzip(),
    createWriteStream(outputFile)
  );
};

await compress();
