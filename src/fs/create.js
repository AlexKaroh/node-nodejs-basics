import * as fs from "node:fs/promises";
import * as tools from "../tools.js";

const create = async () => {
  const filePath = tools.setFilePath(import.meta.url, "files", "fresh.txt");

  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    tools.throwError();
  }
};

await create();
