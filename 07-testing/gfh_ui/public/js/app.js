var DishItemView = Backbone.View.extend({
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

var DishListView = Backbone.View.extend({
  el: 'main',  

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.empty(); // empty before append, come back to this
    this.collection.each(function(dish) {
      var view = new DishItemView({ model: dish });
      this.$el.append(view.render().el);
    }, this)
  }
});

var Dish = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/dishes'
});

var Dishes = Backbone.Collection.extend({
  model: Dish,
  url: 'http://localhost:3000/dishes'
});

var dishes = new Dishes();
dishes.fetch();

var view = new DishListView({ collection: dishes });
view.render();

// dishes.fetch().done(function() {

//   dishes.each(function(dish) {
//     var view = new DishItemView({ model: dish });
//     $('main').append(view.render().el);
//   });

// });


var newDish = function() {
  // get value from inputs
  var name = $('#name-input').val();
  var image_url = $('#image-url-input').val();

  var data = {
    dish: {
      name: name,
      image_url: image_url
    }
  }

  // make ajax post with data from inputs
  //dishes.create(data)

  // $.ajax({
  //   url: 'http://localhost:3000/dishes',
  //   data: data,
  //   type: 'post'
  // }).done(function(dish) {
  //   // when done create new dish view and append to page
  //   var dishModel = new Dish(dish);
  //   var view = new DishItemView({ model: dishModel });
  //   $('main').append(view.render().el);
  // });
}

// get the button
// listen to a click
// pass it a function
$('#new-dish-btn').on('click', newDish);





// $.ajax({
//   url: 'http://localhost:3000/dishes'
// }).done(function(dishes) {
//   dishes.forEach(function(dish) {
//     var dishModel = new Dish(dish);
//     var view = new DishItemView({ model: dishModel });
//     $('main').append(view.render().el);
//   });

// });

