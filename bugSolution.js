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
      //remove listener after task is completed
      req.removeListener('end', requestEnded);
    }
  }, 1000);

  const requestEnded = () => {
    console.log('Request ended');
  };
  req.on('end', requestEnded);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});