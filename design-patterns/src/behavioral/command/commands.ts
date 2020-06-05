import { CommandInterface, UndoableCommandInterface } from "./types";
import { writeFile, unlink } from "fs";
import path from "path";

export class CreateCommand
  implements CommandInterface, UndoableCommandInterface {
  public fullPath: string;
  constructor(public fileName: string, public body: string) {
    this.fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `Creating ${this.fileName}`;
  }

  execute() {
    writeFile(this.fullPath, this.body, (f) => f);
  }

  undo() {
    unlink(this.fullPath, (f) => f);
  }
}

export class ExitCommand implements CommandInterface {
  constructor() {}

  get name() {
    return "exit.. bye!";
  }

  execute() {
    process.exit(0);
  }
}
