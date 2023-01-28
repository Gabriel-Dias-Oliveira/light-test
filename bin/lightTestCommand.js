#!/usr/bin/env node

import { readdirSync } from "fs";
import { exec } from "child_process";

const PARAMS_OF_EXEC = process.execArgv.length + 2;
const FLAG = "--folder";

let filestToRun = [];

async function main() {
  const args = process.argv.splice(PARAMS_OF_EXEC);
  const [fileOrFlag, dir] = args;

  filestToRun = fileOrFlag === FLAG ? readdirSync(dir) : [fileOrFlag];

  filestToRun
    .filter((file) => file.endsWith(".js") || file.endsWith(".ts"))
    .forEach((file) => executeScript(file, dir));
}

function executeScript(file, dir) {
  const errorPrefix = "Failed to execute the tests:";
  let directory = "";

  if (dir) directory = dir?.endsWith("/") ? dir : `${dir}/`;

  exec(`node ${dir ? directory : ""}${file}`, (error, result, stderr) => {
    if (error) return console.error(`${errorPrefix} ${error.message}`);

    if (stderr) return console.error(`${errorPrefix} ${stderr}`);

    console.log(result);
  });
}

main();
