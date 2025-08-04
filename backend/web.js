import http from 'node:http';
import { readFileSync } from 'node:fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Log incoming requests
  console.log(`Received Request: ${req.method} ${req.url}`);

  // Set response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send response
  try {
    const data = readFileSync('users.json', 'utf-8');
    res.end(data || JSON.stringify({ message: 'No users found!' }));
  } catch (error) {
    console.error('Error reading users.json:', error);
    res.end(JSON.stringify({ error: 'Error reading users.json' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
