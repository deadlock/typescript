import { CommandInterface, UndoableCommandInterface } from "./types";
import { CreateCommand } from "./commands";

class Conductor {
  constructor(
    public history: CommandInterface[] = [],
    public undone: CommandInterface[] = []
  ) {}
  run(command: CommandInterface) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    this.history.forEach((command) => console.log(command.name));
  }

  undo() {
    let command = this.history.pop();
    if (this.checkUndoableCommand(command)) {
      console.log(`undo ${command.name}`);
      command.undo();
      this.undone.push(command);
    }
  }

  redo() {
    const command = this.undone.pop();
    if (command) {
      console.log(`redo ${command.name}`);
      command.execute();
      this.history.push(command);
    }
  }

  checkUndoableCommand(command: any): command is UndoableCommandInterface {
    return true;
  }
}

export default new Conductor();
