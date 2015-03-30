/* global module:false,require:false */
"use strict";

module.exports = function( grunt ) {

    require( "time-grunt" )( grunt );
    require( "load-grunt-config" )( grunt );

    grunt.registerTask( "build", [
        "clean:dist",
        "jshint",
        "jscs",
        "sass",
        "copy:dist",
        "useminPrepare",
        "concat:generated",
        "cssmin:generated",
        "uglify:generated",
        "requirejs",
        "filerev",
        "usemin",
        "strip",
        "mkdir:laravelStorage",
        "clean:temp"
    ] );

};
