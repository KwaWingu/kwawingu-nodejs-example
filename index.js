const express = require('express');
const app = express();
app.get('/', (request, response) => {
  response.send('Hello from <a href="https://github.com/mattjquinn/kwawingu-nodejs-example">https://github.com/mattjquinn/kwawingu-nodejs-example</a>!');
});
app.listen(80, console.log('Listening on port 80'));
