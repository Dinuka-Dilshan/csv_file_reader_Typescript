import { MatchData } from './MatchData.js';
import { MatchResult } from './MatchResult.js';
import { dateStringToDate } from './utills.js';

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        Number(row[3]),
        Number(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
