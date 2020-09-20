"use strict";
/**
 *@description main route file
 *@author Tilak
 *@since Sept 20, 2020
 */

const express = require("express")
    , router = express.Router()
    , utils = require("../lib/utils")
    ;

router.get("/test", (req, res, next) => {
    utils.resSuccess(res, { message: "Server is up and running!" });
});

router.post("/url/add", (req, res, next) => {
    utils.resSuccess(res, { message: "Server is up and running!" });
});

router.post("/url/get", (req, res, next) => {
    utils.resSuccess(res, { message: "Server is up and running!" });
});

router.get("/goto/:urlCode", (req, res, next) => {
    utils.resSuccess(res, { message: "Server is up and running!" });
});

module.exports = function (app) {
    app.use("/", router);
};