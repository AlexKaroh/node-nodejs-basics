import * as fs from "node:fs/promises";
import * as tools from "./tools.js";

const copy = async () => {
  const sourcePatch = tools.setFilePath(import.meta.url, "files");
  const copyPatch = tools.setFilePath(import.meta.url, "files_copy");

  try {
    const isSourceFolderFill = (await fs.readdir(sourcePatch)).length;
    const isCopyFolderExist = await tools.isExist(copyPatch);

    isCopyFolderExist || !isSourceFolderFill
      ? tools.throwError()
      : await fs.cp(sourcePatch, copyPatch, { recursive: true });
  } catch {
    tools.throwError();
  }
};

await copy();
