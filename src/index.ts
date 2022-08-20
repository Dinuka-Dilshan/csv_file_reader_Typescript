import { WinAnalysis } from "./analyzers/winAnalysis.js";
import { ConsoleOutput } from "./ConsoleOutput.js";
import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader } from "./MatchReader.js";
import { Summary } from "./Summary.js";

const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();

new Summary(new WinAnalysis("Cardiff"), new ConsoleOutput()).buildAndPrint(
  matchReader.matches
);
