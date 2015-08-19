var app = app || {};

app.Dish = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/dishes'
});