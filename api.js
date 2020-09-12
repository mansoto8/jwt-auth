const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.API_PORT || 8888;
const expressJwt = require("express-jwt");

const jwtCheck = expressJwt({ secret: "myKey", algorithms: ['HS256'] });

app.use(bodyParser.json());

app.get("/asset/secret", jwtCheck, (req, res) => {
    res.status(200).send("Only logged in people can see me");
});

app.get("/asset", (req, res) => {
    res.status(200).send("Everybody can see this");
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});