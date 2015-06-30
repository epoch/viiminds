var age = 40;
var maxAge = 134;
var amountPerDay = 24;

var yearsRemaining = maxAge - age;
var daysRemaining = yearsRemaining * 365.25; // including leap years
var supply = Math.round(amountPerDay * daysRemaining);

console.log('you will need ' + supply + ' to last you until the ripe old age of ' + age);
