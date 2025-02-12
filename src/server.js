const express = require('express');
const fs = require('fs'); // For file system operations
const bodyParser = require('body-parser'); // To parse JSON data

const app = express();
const port = 3000; // Choose a port

app.use(bodyParser.json()); // Enable parsing of JSON request bodies

app.post('/saveData', (req, res) => {
    const data = req.body; // Get the JSON data from the request body

    // Write data to JSON file (data.json)
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ message: 'Error saving data' }); // Send error response
        } else {
            console.log('Data saved to data.json');
            res.json({ message: 'Data saved successfully' }); // Send success response
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});