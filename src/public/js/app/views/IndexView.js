/* global define:false, _:false */
"use strict";

define( [
    "backbone",
    "TweenMax",
    "app/views/BaseView",
    "app/models/ItemModel",
    "app/collections/ItemsCollection",
    "hbs!app/templates/IndexTemplate"
], function( Backbone, TweenMax, BaseView, ItemModel, ItemsCollection, template ) {

    return BaseView.extend( {

        className: "view index-view",

        transitions: true,

        collection: false,

        events: {
            "submit form": "addItem"
        },

        initialize: function() {

            _.bindAll( this, "itemsFetchComplete" );

            this.collection = new ItemsCollection();

            this.render();

            this.listenToOnce( this, "Transition:transitionInComplete", function() {} );
            this.listenToOnce( this, "Transition:transitionOutComplete", function() {} );
            this.listenTo( this.collection, "change", this.itemsFetchComplete );
        },

        addItem: function( ev ) {
            ev.preventDefault();

            var item = new ItemModel();

            item.set( "name", $( ev.currentTarget ).find( ".item" ).val() );

            // item.save();

            this.collection.create( item );
        },

        itemsFetchComplete: function() {

            this.$el.html( template( {
                title: "Welcome to the Index",
                items: this.collection.toJSON()
            } ) );

        },

        render: function() {

            this.collection.fetch( {
                success: this.itemsFetchComplete
            } );

            return this.$el;
        }
    } );

} );
