for (var i = 0; i <= 10; i++) {
  console.log('i:', i);
  for (var j = 0; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }

}

var assignGrade = function(score) {
  if (score > 90) {
    return 'A';
  } else if (score > 80) {
    return 'B';
  } else if (score > 70) {
    return 'C';
  } else if (score > 60) {
    return 'D';
  } else {
    return 'F';
  }
}

var testScore = 0;

while (testScore <= 100) {
  console.log( testScore, assignGrade(testScore) );
  testScore += 1;
}