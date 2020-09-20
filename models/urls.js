"use strict";
/**
 *@description url modal
 *@author Tilak
 *@since Sept 20, 2020
 */

const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    ;

let schema = new Schema(
    {
        originalUrl: { type: String, trim: true },
        shortUrlCode: { type: String, trim: true },
    },
    {
        timestamps: true
    }
)

schema.statics = {}
module.exports = mongoose.model("Urls", schema, "Urls");