import { MatchData } from "../MatchData.js";
import { Analyzer } from "../Summary.js";

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.map((match) => {
      if (
        (match[1] === this.team && match[5] === "H") ||
        (match[2] === this.team && match[5] === "A")
      ) {
        wins++;
      }
    });

    return `Team ${this.team} has won ${wins} matches`
  }
}
