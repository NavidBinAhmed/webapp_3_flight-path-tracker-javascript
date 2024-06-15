const express = require('express');
const bodyParser = require('body-parser');
const findFlightPath = require('./findFlightPath');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const flights = req.body.flights;
    if (!Array.isArray(flights)) {
        return res.status(400).json({ error: 'Invalid input format. Expected an array of flight records.' });
    }

    const result = findFlightPath(flights);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Flight path tracker listening on port ${port}`);
});
