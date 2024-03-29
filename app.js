'use strict';
const express = require('express');
const index = require('./index');
const app = express();
// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  res.status(200).send(index);
});
// [END hello_world]
if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}
module.exports = app;
