import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import * as tools from "../tools.js";

const decompress = async () => {
  const pipelineAsync = promisify(pipeline);
  const inputFile = tools.setFilePath(import.meta.url, "files", "archive.gz");
  const outputFile = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );

  await pipelineAsync(
    createReadStream(inputFile),
    createGunzip(),
    createWriteStream(outputFile)
  );
};

await decompress();
