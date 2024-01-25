import * as fs from "node:fs/promises";
import * as tools from "../tools.js";

const list = async () => {
  const patchToRead = tools.setFilePath(import.meta.url, "files");

  try {
    const isFolderToReadExist = await tools.isExist(patchToRead);

    isFolderToReadExist
      ? console.log(await fs.readdir(patchToRead))
      : tools.throwError();
  } catch {
    tools.throwError();
  }
};

await list();
