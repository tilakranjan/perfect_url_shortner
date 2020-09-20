"use strict";
/**
 *@description main route file
 *@author Tilak
 *@since Sept 20, 2020
 */

const express = require("express")
    , router = express.Router()
    , utils = require("../lib/utils")
    , joi = require("../lib/joi")
    , urlControllers = require("../controllers/urls")
    ;

router.get("/test", (req, res, next) => {
    utils.resSuccess(res, { message: "Server is up and running!" });
});

router.post("/url/add", async (req, res, next) => {
    let validation = joi.urlAdd(req.body);
    if (validation.error == null) {
        // utils.resSuccess(res, { message: "Yes!" });
        const { originalUrl } = req.body;
        const addUrl = await urlControllers.addUrl({ originalUrl })
        const { success, message } = addUrl;
        if (success) {
            const { shortUrlCode } = addUrl;
            utils.resSuccess(res, { message, shortUrlCode });
        }
        else {
            utils.resError(res, { message });
        }
    }
    else {
        utils.resError(res, { message: "Not a valid request!!" });
    }
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