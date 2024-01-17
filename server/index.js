const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require("dotenv/config");
const connectDB = require('./config/db');
const userRouter = require('./routes/users');
const eventRouter = require('./routes/events');
const homeRouter = require('./routes/home');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);
app.use("/", homeRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
});
