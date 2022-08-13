const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();
const port = 3001;

app.use(express.json());
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Cross-Origin', 'http://localhost:3000');
  next();
});
app.use(routes);
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));

// Middleware 1 -> Middleware 2 -> Middlware 3 -> Middleware 4 (Route) ->  M. 5 (Error Handler)
