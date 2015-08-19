var app = app || {};

app.DishItemView = Backbone.View.extend({
  tagName: 'div', // optional because defaults to div
  className: 'ui-card',

  events: {
    "click .star": "addStar",
    "click .bookmark": "bookmark"
  },

  initialize: function() {
    // if model changed redraw my component
    this.listenTo(this.model, 'change', this.render);
  },

  bookmark: function() {
    this.$el.find('.bookmark').html('bookmarked!');
  },

  addStar: function() {
    var id = this.model.id;
    $.ajax({
      url: 'http://localhost:3000/stars',
      data: { dish_id: id },
      type: 'post',
      context: this
    }).done(function(response) {
      this.model.set('star_count', response.star_count);
    });
  },  

  render: function() {
    var source = $('#dish-item-template').html();
    var template = Handlebars.compile(source);
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});