
import { CsvFileReader } from './CsvFileReader.js';
import { MatchReader } from './MatchReader.js';

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();

console.log(matchReader.matches);

