const express = require('express');

// Constants
const PORT = 8080;

// APP
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(PORT);