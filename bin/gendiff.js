#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>, <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((path1, path2, options) => {
    console.log(gendiff(path1, path2, options.format));
  })
  .parse();
