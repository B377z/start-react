import { readFileSync, writeFileSync } from 'fs';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];
writeFileSync('users.json', JSON.stringify(users, null, 2));
console.log('Users file created successfully!');

const data = readFileSync('users.json', 'utf-8');
const usersData = JSON.parse(data);
console.log('Users data:', usersData);
