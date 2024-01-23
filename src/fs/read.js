import * as fs from "node:fs/promises";
import * as tools from "./tools.js";

const read = async () => {
  const patchToRead = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToRead.txt"
  );

  try {
    const isFolderToReadExist = await tools.isExist(patchToRead);

    isFolderToReadExist
      ? console.log(await fs.readFile(patchToRead, "utf8"))
      : tools.throwError();
  } catch {
    tools.throwError();
  }
};

await read();
