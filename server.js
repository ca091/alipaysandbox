const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./service/config');

const app = express();
app.use(cors());

// app.use('/oauth', oauth);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.use('/app', express.static(path.resolve(__dirname, './app'), {
  maxAge: 1000*60*60*24*31
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Sorry Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('<p>'+err.message+'</p>');
});

const port = config.port;
app.set('port', port);

/**
 * Create HTTP server.
 */
const http = require('http');
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
