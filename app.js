const http = require('http');
const express = require('express');
const path = require('path');
const contractsRoutes = require('./routes/contracts');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', contractsRoutes);

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
