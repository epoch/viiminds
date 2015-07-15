// addEventListener
$('#new-todo').on('click', function() {

  var userInput = $('#new-todo-input'); // jquery object
  var inputValue = userInput.val();

  //var newListItem = $('<li>' + inputValue + '</li>')
  var newListItem = $('<li>').html(inputValue);
  $('#todos').append(newListItem);
  userInput.val('');
});

$('#todos').on('click', 'li', function() {

  // $(this).addClass('done');
  var content = event.target.innerHTML;

  if ( $(event.target).hasClass('done') ) {
    $(event.target).removeClass('done'); 
    
    // example to make use of underscore each 
    _.each( $('#completed li'), function(elem) {
      if (elem.innerHTML === content) {
        $(elem).remove();
      };
    });

  } else {
    $(event.target).addClass('done');  
    $('#completed').append($('<li>').html(content));
  }
});
