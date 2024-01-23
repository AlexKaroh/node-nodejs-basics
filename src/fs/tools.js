import * as fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

export const setFilePath = (sourcePatch, dirName, file = "") => {
  const baseDir = dirname(fileURLToPath(sourcePatch));
  return file ? join(baseDir, dirName, file) : join(baseDir, dirName);
};

export const isExist = async (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

export const throwError = () => {
  throw new Error("FS operation failed");
};
