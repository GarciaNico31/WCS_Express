//  Import Express
const express = require ('express');

//  Call le module Express | Convention name is express
const app = express();

// Définition du port à écouter
const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Express");
});

const WelcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", WelcomeName);

app.listen(port, (err) => {
    if (err) {
        console.error('Something bad hapenned');
    } else {
        console.log(`Server is listening on ${port}`);
    }
});