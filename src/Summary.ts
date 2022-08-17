import { MatchData } from './MatchData.js';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}
}
