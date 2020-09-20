"use strict";
/**
 *@description main server file
 *@author Tilak
 *@since Sept 20, 2020
 */

const express = require("express");
const cors = require('cors');
const http = require("http");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/index");
const congif = require("./lib/config");
const port = congif.server_port;
const utils = require("./lib/utils");

// mongo connection
mongoose.connect(congif.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// MONGO CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    utils.logInfo('MongoDB connection open to ' + congif.dbUrl);
});
// If the connection throws an error
mongoose.connection.on('error', function (err) {
    utils.logInfo('MongoDB connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    utils.logInfo('MongoDB connection disconnected');
});

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

bodyParser = {
    json: { limit: "50mb", extended: true },
    urlencoded: { limit: "50mb", extended: true }
};

routes(app);

app.use(function (req, res, next) {
    res.status(404).send("Are you lost!??")
})

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});