/* global module:false */
"use strict";

/**
 * Usemin config
 * @type {Object}
 */
module.exports = {
    html: [ "dist/resources/views/**/*.php" ],
    js: [ "dist/public/js/*.js" ],
    options: {
        assetsDirs: [ "dist/public" ],
        patterns: {
            js: [
                [ /(img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, "Update the JS to reference our revved images" ]
            ]
        }
    }
};
