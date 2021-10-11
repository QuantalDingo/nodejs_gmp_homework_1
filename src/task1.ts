import { stdin, stdout } from 'process';

stdin.setEncoding('utf-8');

stdin.on('data', (data: string) => {
	stdout.write(parseInputData(data) + '\n\n', 'utf-8');
});

function parseInputData(data: string): string {
	return data.trimEnd().split('').reverse().join('');
}
