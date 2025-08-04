console.log('Hello node.js World!');

// Save to file
import { writeFile, readFile } from 'fs/promises';
await writeFile('helloworld.txt', 'Hello node.js World!');

// Read from file
const data = await readFile('helloworld.txt', 'utf-8');
console.log('File content:', data);
