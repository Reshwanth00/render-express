const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./mongodb");
const projectRoutes = require('./controller');

const app = express();
const port = process.env.PORT || 3001; 

connectDB();

app.use(bodyParser.json());

app.use(cors()); 

app.use('/api', projectRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
