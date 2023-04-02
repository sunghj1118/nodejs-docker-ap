const express = require('express');

// Constants
const PORT = 8080;

// APP
const app = express();
app.get('/', (req, res) => {
    res.send("참조 변경했습니다!!!")
});

app.listen(PORT);
console.log("Server is running")