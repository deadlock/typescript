class Logger {
  public logs: { message: string; timestamp: string }[];
  private static instance: Logger;

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      return (Logger.instance = new Logger());
    }
    return Logger.instance;
  }

  get count() {
    return this.logs.length;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

export default Logger;
