import configJson from "./config.json";
import { Strategies } from "./LogStrategy";

let config: Strategies = "noDate";

switch (configJson.logs.strategy) {
  case "noDate":
    config = "noDate";
    break;
  case "toFile":
    config = "toFile";
    break;
  case "toConsole":
    config = "toConsole";
    break;
  case "none":
    config = "none";
    break;
}

export default config;
