import { MongoClient } from 'mongodb';
import { createServer } from 'node:http';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'blog';
let db;

try {
  await client.connect();
  console.log('Successfully connected to MongoDB');
  db = client.db(dbName);
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

const server = createServer(async (req, res) => {
  try {
    if (req.url === '/users' && req.method === 'GET') {
      const users = db.collection('users');
      const userList = await users.find({}).toArray();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userList, null, 2));
    }

    // GET /posts
    else if (req.url === '/posts' && req.method === 'GET') {
      const posts = db.collection('posts');
      const postList = await posts.find({}).toArray();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(postList, null, 2));
    }

    // GET /comments
    else if (req.url === '/comments' && req.method === 'GET') {
      const comments = await db.collection('comments').find({}).toArray();
      res.writeHead(200);
      res.end(JSON.stringify(comments, null, 2));
    }

    // Fallback for unmatched routes
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
