
$.ajax({
  url: 'http://localhost:3000/dishes'
}).done(function(dishes) {


  dishes.forEach(function(dish) {

    var html = '';

    html += '<header class="content">'
    html += '<div class="right">14h</div>'
    html += '<img class="avatar" src="https://placeholdit.imgix.net/~text?txtsize=75&txt=800%C3%97800&w=800&h=800" alt=""> Dan'
    html += '</header>'

    html += '<div class="image">'
    html += '<img class="" src="https://placeholdit.imgix.net/~text?txtsize=75&txt=800%C3%97800&w=800&h=800" alt="">'
    html += '<span class="star">&#9733;</span>'
    html += '</div>'

    html += '<div class="content">'
    html += '<h2>' + dish.name + '</h2>'
    html += '<h4>at werwer</h4>'
    html += '</div>'

    html += '<div class="content">'
    html += '<span class="right">'+ dish.star_count +' stars</span>'
    html += 'by DT'
    html += '</div>'

    var newDishHTML = $('<div>')
      .attr('data-id', dish.id)
      .addClass('ui-card')
      .html(html);

    $('main.content').append(newDishHTML);

  });
});

$('main').on('click', '.star', function() {
  var dish_id = $(this).closest('.ui-card').attr('data-id');

  $.ajax({
    url: 'http://localhost:3000/stars',
    data: { dish_id: dish_id },
    context: this,
    type: 'post'
  }).done(function(response) {
    console.log(response.star_count);

    $(this)
      .closest('.ui-card') // up
      .find('span.right') // down
      .html(response.star_count + ' stars');  

  })
});

