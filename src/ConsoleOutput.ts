import { OutputTarget } from "./Summary.js";

export class ConsoleOutput implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
