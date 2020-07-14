import LogStrategy from "./LogStrategy";
import { Strategies } from "./LogStrategy";
import config from "./config";

export interface Log {
  message: string;
  timestamp: string;
}

class Logger {
  public logs: Log[] = [];
  public strategy: (log: Log) => void;

  constructor(public strategyType: Strategies) {
    this.strategy = LogStrategy[strategyType];
  }

  get count() {
    return this.logs.length;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    this.strategy({ message, timestamp });
  }

  changeStrategy(newStrategie: Strategies) {
    this.strategy = LogStrategy[newStrategie];
  }
}

export default new Logger(config);
