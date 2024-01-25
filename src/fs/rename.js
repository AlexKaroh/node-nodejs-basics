import * as fs from "node:fs/promises";
import * as tools from "../tools.js";

const rename = async () => {
  const oldPath = tools.setFilePath(
    import.meta.url,
    "files",
    "wrongFilename.txt"
  );

  const newPath = tools.setFilePath(
    import.meta.url,
    "files",
    "properFilename.md"
  );

  try {
    const isFileToRenameExist = await tools.isExist(oldPath);
    const isRenamedFileExist = await tools.isExist(newPath);

    !isFileToRenameExist || isRenamedFileExist
      ? tools.throwError()
      : await fs.rename(oldPath, newPath);
  } catch {
    tools.throwError();
  }
};

await rename();
