import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read() {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
<<<<<<< HEAD
      .map((subStr:string) => subStr.split(','));
=======
      .map((subStr) => subStr.split(','));
>>>>>>> 78a820fd7a5f3382161acbcf87003447e5d1655d
  }
}
