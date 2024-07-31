const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./mongodb");
const projectRoutes = require('./controller');

const app = express();
const port = 3000;

connectDB();

// Middleware to parse JSON
app.use(bodyParser.json());

app.use('/api',projectRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
