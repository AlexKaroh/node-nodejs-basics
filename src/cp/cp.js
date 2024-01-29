import * as tools from "../tools.js";
import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const filePath = tools.setFilePath(import.meta.url, "files", "script.js");
  const childProcess = spawn("node", [filePath, ...args]);

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });
};

spawnChildProcess(["arg1", "arg2"]);
