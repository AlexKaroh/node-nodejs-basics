import * as fs from "node:fs/promises";
import * as tools from "../tools.js";

const remove = async () => {
  const pathToRemove = tools.setFilePath(
    import.meta.url,
    "files",
    "fileToRemove.txt"
  );

  try {
    const isFileToRemoveExist = await tools.isExist(pathToRemove);
    isFileToRemoveExist ? await fs.rm(pathToRemove) : tools.throwError();
  } catch {
    tools.throwError();
  }
};

await remove();
