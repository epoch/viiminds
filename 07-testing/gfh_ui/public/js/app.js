var app = app || {};

app.dishes = new app.Dishes();
app.dishes.fetch();

view = new app.DishListView({ collection: app.dishes });
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

