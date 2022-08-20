import { MatchData } from "./MatchData.js";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrint(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
