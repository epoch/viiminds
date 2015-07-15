


var todoItems = document.getElementById('todos').getElementsByTagName('li');

var toggleComplete = function(event) { // magic
  // event.target is the dom node user clicked on
  console.log(event.target);

  if (event.target.tagName === 'LI') {
  
    var itemUserClickedOn = event.target;
    var completedList = document.getElementById('completed'); // ul#completed
    var completedItems = completedList.getElementsByTagName('li'); 

    // if the li that the user clicked on is marked as done
    if (event.target.className === 'done') { 
      // remove class
      event.target.className = '';
      // search li within completedList of matching content, remove li 

      for(var i = 0; i < completedItems.length; i++) {
        if (event.target.innerHTML === completedItems[i].innerHTML) {
          // if a match is found
          console.log('match is found');
          completedList.removeChild(completedItems[i]);
          // completedItems[i].remove();
        }
      }

    } else {
      // apply class
      event.target.className = 'done';
      // event.target.style.textDecoration = 'line-through';
    
      // append newly created list item to completedList
      // create a new li with the contents
      // of the item that the user clicked on and append to completedList
      var newItem = document.createElement('li'); // <li></li>
      var contentNode = document.createTextNode(event.target.innerHTML); 
      newItem.appendChild(contentNode); // <li>lunch</li>
      completedList.appendChild(newItem);      
    }
  } // end if
}

// for(var i = 0; i < todoItems.length; i++) {
//   todoItems[i].addEventListener('click', toggleComplete);
// }

document.getElementById('todos').addEventListener('click', toggleComplete);


var newTodoBtn = document.getElementById('new-todo');

newTodoBtn.addEventListener('click', function() {


  // capture input
  var userInput = document.getElementById('new-todo-input').value

  // create new list item
  var newListItem = document.createElement('li');

  // get input text append to new list item
  newListItem.appendChild(document.createTextNode(userInput));

  // append new list item to the ul#todos
  document.getElementById('todos').appendChild(newListItem);
});

