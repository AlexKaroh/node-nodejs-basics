import * as os from "os";
import * as tools from "../tools.js";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cpus = os.cpus();
  const url = tools.setFilePath(import.meta.url, "worker.js");

  const workers = Array.from(
    { length: cpus.length },
    (_, i) => new Worker(url, { workerData: i + 10 })
  );

  try {
    const finalResult = await Promise.allSettled(
      workers.map((worker) => {
        return new Promise((resolve, reject) => {
          worker.on("message", (result) => {
            resolve({ status: "resolved", data: result });
          });

          worker.on("error", (_) => {
            reject({ status: "error", data: null });
          });
        });
      })
    );
    console.log(finalResult.map(({ reason, value }) => value || reason));
  } catch (error) {
    console.error(error);
  }
};

await performCalculations();
