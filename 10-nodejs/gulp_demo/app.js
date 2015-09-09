var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

// example using underscore
console.log(_.sample([1,2]));


var View = Backbone.View.extend({
  render: function() {

  }
})

var view = new View();

// example using backbone
console.log(view.el);

// example using jquery
console.log( $('h1').html() );

 