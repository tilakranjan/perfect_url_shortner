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
        const { originalUrl } = req.body;
        const addUrl = await urlControllers.addUrl({ originalUrl });
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

router.get("/url/go/:shortUrlCode", async (req, res, next) => {
    const { shortUrlCode } = req.params;
    const getUrl = await urlControllers.getUrl({ shortUrlCode });
    const { success, message, originalUrl } = getUrl;
    if (success) {
        utils.resSuccess(res, { message, originalUrl });
    }
    else{
        utils.resError(res, { message, originalUrl });
    }

});

module.exports = function (app) {
    app.use("/", router);
};