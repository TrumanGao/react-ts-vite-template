import path from 'path';
import { rimrafSync } from 'rimraf';

const args = process.argv.slice(2);

args.map((targetPath) => {
  console.log(`rimraf.js 删除 ${targetPath} 开始`);
  rimrafSync(path.resolve(targetPath));
  console.log(`rimraf.js 删除 ${targetPath} 成功`);
});

console.log(`rimraf.js 执行串行删除完成`);
