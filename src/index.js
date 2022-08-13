const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));

// Middleware 1 -> Middleware 2 -> Middlware 3 -> Middleware 4 (Route) ->  M. 5 (Error Handler)
