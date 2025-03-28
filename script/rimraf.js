import path from 'path';
import { rimrafSync } from 'rimraf';

const args = process.argv.slice(2);

args.map((targetPath) => {
  console.log(`rimraf.js - delete ${targetPath} starting`);
  rimrafSync(path.resolve(targetPath));
  console.log(`rimraf.js - delete ${targetPath} ending`);
});

console.log(`rimraf.js - delete all done`);
