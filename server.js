const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;

  console.log('Express server started on: http://localhost:' + port);
});
