import {
  readFile,
  writeFile,
  appendFile,
  unlink,
  readdir,
} from 'node:fs/promises';

await writeFile('notes.txt', 'Hello, this is my first note!');
console.log('File written successfully!');

const data = await readFile('notes.txt', 'utf-8');
console.log('File content:', data);

await appendFile('notes.txt', '\nWe will add more notes here.');
console.log('File appended successfully!');
const updatedData = await readFile('notes.txt', 'utf-8');
console.log('Updated file content:', updatedData);

await unlink('notes.txt');
console.log('File deleted successfully!');

const files = await readdir('./');
console.log('Files in current directory:', files);
