var app = app || {};

app.Dishes = Backbone.Collection.extend({
  model: app.Dish,
  url: 'http://localhost:3000/dishes'
});
