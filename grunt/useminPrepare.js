/* global module:false */
"use strict";

/**
 * Usemin prepare config
 * @type {Object}
 */
module.exports = {
    html: [ "src/resources/views/**/*.php" ],
    js: [ "src/public/js/*.js" ],
    options: {
        dest: "dist/public/"
    }
};
