// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3000, () => console.log("Server ready on port 3000."));

// module.exports = app;


require('dotenv').config();
const dbConfig = require('../config/dbConfig');
const app = require('../app');

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server is up on port ', PORT);
})