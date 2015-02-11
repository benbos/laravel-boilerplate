/* global module:false */
"use strict";

/**
 * Mkdir config
 * @type {Object}
 */
module.exports = {
    laravelStorage: {
        options: {
            create: [
                "dist/storage/app/",
                "dist/storage/framework/cache/",
                "dist/storage/framework/sessions/",
                "dist/storage/framework/views/",
                "dist/storage/logs/"
            ]
        }
    }
};
