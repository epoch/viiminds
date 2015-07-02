

// var numberOfChildren = 9;
var partnerName = 'Donald';
// var geographicLocation = 'Sunshine';
// var jobTitle = 'pet food taster';



function fortuneTeller(jobTitle, geographicLocation, partnerName, numberOfChildren) {

  var fortune = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' children';
  return fortune;

}

console.log( fortuneTeller('pet food taster', 'Melbourne', null, 4) );
