'use strict'
/**
 * @description hotel services are provided
 * @author Tilak
 * @since Aug 20 2020
 */

const mongoose = require('mongoose')
    , congif = require("../lib/config")
    , urlModel = require('../models/urls')
    ;

module.exports = {
    addUrl: async (doc) => {
        const { originalUrl } = doc;
        const checkUrl = await urlModel.find({ originalUrl });
        
        // check if url exists
        if (checkUrl.length) {
            return { success: false, message: "Url already exists." }
        }

        // code generation
        let shortUrlCode = '', checkCode = false;
        do {
            // create a code
            shortUrlCode = Math.random().toString(20).substr(2, congif.shortUrlCodeLength);
            // check if code exists
            checkCode = await urlModel.find({ shortUrlCode });
        } while (checkCode.length);

        // add to db
        const newUrl = new mongoose.models["Urls"]({ originalUrl, shortUrlCode });
        await newUrl.save();
        return { success: true, message: "Url added successfully.", shortUrlCode };
    }
}