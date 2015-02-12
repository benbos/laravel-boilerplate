/* global module:false */
"use strict";

/**
 * Sass config
 * @type {Object}
 */
module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            'src/public/css/app.css': 'src/public/sass/app.scss'
        }
    }
};