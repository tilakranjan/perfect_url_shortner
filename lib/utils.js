"use strict";
/**
 *@description utility funcitons
 *@author Tilak
 *@since Sept 20, 2020
 */

module.exports = {
    resError: (res, data) => {
        res.json({ success: false, result: data });
    },

    resSuccess: (res, data) => {
        res.json({ success: true, result: data });
    },

    logInfo: (msg) => {
        console.log(msg);
    },
}