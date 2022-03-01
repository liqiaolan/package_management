/** 发布流程
 * 1、读取包 readdirSync
 */

const { utils } = require('umi');
const { readdirSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');
async function release() {
  const pkgs = readdirSync(join(__dirname, '../packages'));
  pkgs.forEach((pkg, index) => {
    exec(`npm login`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error11: ${error}`);
        return;
      }
      console.log(`stdout11: ${stdout}`);
      console.error(`stderr11: ${stderr}`);
    });
    exec(`npm publish ${[pkg]}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error33: ${error}`);
        return;
      }
      console.log(`stdout33: ${stdout}`);
      console.error(`stderr33: ${stderr}`);
    });
  });
}

release().catch((err) => {
  console.error('err', err);
  process.exit(1);
});
