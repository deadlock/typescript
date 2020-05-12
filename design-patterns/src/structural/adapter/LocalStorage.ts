import { writeFile, existsSync, readFileSync, unlink } from "fs";

class LocalStorage {
  public items: any[] = [];

  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("Loading data from localStorage.json");
      const data = readFileSync("localStorage.json");
      this.items = JSON.parse(data.toString());
    } else {
      this.items = [];
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key: any) {
    return this.items[key];
  }

  setItem(key: any, value: any) {
    this.items[key] = value;
    writeFile("localStorage.json", JSON.stringify(this.items), (error) => {
      if (error) console.log(error);
    });
  }

  clear() {
    this.items = [];
    unlink("localStorage.json", () => {
      console.log("localStorage file removed");
    });
  }
}

export default LocalStorage;
