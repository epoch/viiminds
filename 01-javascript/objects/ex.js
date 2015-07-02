console.log('objects exercise');

// ex1: recipe

var recipe = {
  title: 'The surprise',
  servings: 1,
  ingredients: ['cheese','vegemite','fairy floss','celery']
}

console.log(recipe.title);
console.log(recipe.ingredients.join(' '));

// ex2: Reading List

var b1 = { 
  title: 'alice in wonderland',
  author: 'forgot',
  alreadyRead: true
};

var books = [b1,
  { 
    title: 'jurassic park',
    author: 'Michael Crighton',
    alreadyRead: false
  }];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var desc = book.title + ' by ' + book.author;

  if (book.alreadyRead) {
    console.log('you already read ' + desc);
  } else {
    console.log('you may want to read ' + desc);
  }
}

// ex3: Movies

var film1 = {
  title: 'sharknado',
  duration: 100,
  stars: ['the guy from 90210', 'sharks']
}

// function filmInfo(movie) {
//   var info = '';

//   info += movie.title;
//   info += ' lasts for ' + movie.duration + ' minutes.';
//   info += ' stars: ' + movie.stars.join(', ');

//   console.log(info);
// }

var filmInfo = function(movie) {
  var info = '';

  info += movie.title;
  info += ' lasts for ' + movie.duration + ' minutes.';
  info += ' stars: ' + movie.stars.join(', ');

  console.log(info);  
}


filmInfo(film1);


var myName = 'dt';

function doSomething() {
  var localSecret = 'blah';
  console.log(localSecret);
}


