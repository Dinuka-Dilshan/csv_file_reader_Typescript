import { CsvFileReader } from './CsvFileReader.js';
import { MatchResult } from './MatchResult.js';
import { dateStringToDate } from './utills.js';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchDataReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
