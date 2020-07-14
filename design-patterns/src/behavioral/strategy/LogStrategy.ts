import { Log } from "./Logger";
import path from "path";
import { appendFile } from "fs";

export type Strategies = "noDate" | "toFile" | "toConsole" | "none";

class LogStrategy {
  static noDate(log: Log) {
    console.log(log.message);
  }

  static toFile(log: Log) {
    const fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${log.timestamp} - ${log.message} \n`, (error) => {
      if (error) {
        console.log("Error writing to file");
        console.error(error);
      }
    });
  }

  static toConsole(log: Log) {
    console.log(`${log.timestamp} - ${log.message}`);
  }

  static none() {}
}

export default LogStrategy;
