var app = app || {};

app.DishListView = Backbone.View.extend({
  el: 'main',  

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.empty(); // empty before append, come back to this
    this.collection.each(function(dish) {
      var view = new app.DishItemView({ model: dish });
      this.$el.append(view.render().el);
    }, this)
  }
});
