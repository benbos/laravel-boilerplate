/* global define:false */
"use strict";

define( [
    "backbone"
], function( Backbone ) {

    return Backbone.Model.extend( {

        url: "api/v1/item"

    } );

} );
