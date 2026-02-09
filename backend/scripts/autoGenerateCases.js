import fs from 'fs/promises';
import path from 'path';
import { autoGenerateCases } from '../services/caseService.js';

const outputPath = path.resolve('backend/data/cases.json');

const run = async () => {
  const cases = await autoGenerateCases();
  await fs.writeFile(outputPath, JSON.stringify(cases, null, 2));
  console.log('Generated cases:', cases.length);
};

run();
