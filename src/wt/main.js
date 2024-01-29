import * as os from "os";
import * as tools from "../tools.js";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cpus = os.cpus();
  const url = tools.setFilePath(import.meta.url, "worker.js");
  const result = [];

  cpus.map((_, i) => {
    const worker = new Worker(url);
    worker.on("message", (res) => {
      result.push(res);

      result.length === cpus.length && console.log(result);
    });

    worker.postMessage(i + 10);
  });
};

await performCalculations();
