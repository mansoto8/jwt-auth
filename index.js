const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8888;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.use(bodyParser.json());

app.get('/time', (req, res) => {
    const time = (new Date()).toLocaleTimeString();
    res.status(200).send(`The Time is ${time}`);
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.post("/login", (req, res) => {
    const user = req.body.username;
    res.status(200).send(`User's name is ${user}`);
})