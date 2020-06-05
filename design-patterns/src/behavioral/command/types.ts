export interface CommandInterface {
  name: string;
  execute: () => void;
}

export interface UndoableCommandInterface {
  undo: () => void;
}
