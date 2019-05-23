var app = app || {};

$(function( $ ) {
	'use strict';

	app.CounterView = Backbone.View.extend({

		tagName: 'div',

		template: _.template( $('#counter-template').html() ),

		events: {
			'click .increment': 'increment',
			'click .decrement': 'decrement',
		},

		initialize: function() {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

		increment: function() {
			this.model.increment();
		},

		decrement: function() {
			this.model.decrement();
		},
	});
});
