import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utills';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): CsvFileReader {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((subStr) => subStr.split(','))
      .map((row): MatchData => {
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

    return this;
  }
}
