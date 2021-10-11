import csv from 'csvtojson';
import { readFile, open } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const csvPath = 'csv/nodejs-hw1-ex1-2.csv';

async function run(path: string): Promise<void> {
	const file = await readFile(path, { encoding: 'utf-8' });
	const parsedCSV = await csv().fromString(file);

	const output = await open('csv/json.txt', 'w');
	parsedCSV.forEach(
		async (item) => await output.appendFile(JSON.stringify(item) + '\n')
	);
}

async function run_with_pipe(path: string): Promise<void> {
	await pipeline(
		createReadStream(path),
		csv(),
		createWriteStream('csv/json_with_pipe.txt')
	);
}

run(csvPath).catch(console.error);
run_with_pipe(csvPath).catch(console.error);
