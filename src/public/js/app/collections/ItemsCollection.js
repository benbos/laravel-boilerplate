/* global define:false */
"use strict";

define( [
    "backbone",
    "app/models/ItemModel"
], function( Backbone, ItemModel ) {

    return Backbone.Collection.extend( {
        model: ItemModel,
        url: "api/v1/item"
    } );

} );
