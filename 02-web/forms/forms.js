
window.onload = function() {

  var title = document.getElementsByTagName('h1')[0];

  console.log(title.innerHTML);
  

  var submitButton = document.getElementsByTagName('button')[0];
  
  var dothis = function(event) {
    event.preventDefault();

    console.log('this should appear');
    console.log(event);
    console.log('submitting form');

    var queryInput = document.getElementById('query');
    console.log(queryInput.value);

    var h2 = document.createElement('h2'); //<h2></h2>
    var headingText = document.createTextNode(queryInput.value); 
    h2.appendChild(headingText);

    var damnIt = document.getElementById('damnIt'); // search for damnIt in the document
    damnIt.appendChild(h2); // add a child object to damnIt

    // document.body.appendChild(h2);
  }

  submitButton.addEventListener('click', dothis);
  // submitButton.addEventListener('click', dothat);
}

