import { MatchDataReader } from './MatchDataReader.js';

const reader = new MatchDataReader('football.csv');
reader.read();

console.log(reader.data[0]);
