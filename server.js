// Get the packages we need
var express = require('express');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api

router.get('/', function(req, res) {
    res.json({ message: 'You have made a request to an endpoint'});
});

// Register all our routes with / api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Testing on port: ' + port);


