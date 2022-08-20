<<<<<<< HEAD
import { MatchData } from "./MatchData.js";
=======
import { MatchData } from './MatchData.js';
>>>>>>> 78a820fd7a5f3382161acbcf87003447e5d1655d

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}
<<<<<<< HEAD

  buildAndPrint(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
=======
>>>>>>> 78a820fd7a5f3382161acbcf87003447e5d1655d
}
