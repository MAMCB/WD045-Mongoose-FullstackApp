const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require("dotenv/config");
const connectDB = require('./config/db');
const router = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use("api/users",router);

connectDB().then(() => {
    app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
});
