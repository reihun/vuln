const express = require('express');
const _ = require('lodash');

const app = express();
app.use(express.json());

// Merge user input into an object
app.post('/update', (req, res) => {
    let obj = {};
    _.merge(obj, req.body); // Merges user input into `obj`
    res.send("Updated object!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
