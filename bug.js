const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 5) {
      clearInterval(interval);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Done');
    }
  }, 1000);

  // This request listener will never be removed, it will lead to memory leak.
  req.on('end', () => {
    console.log('Request ended');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});