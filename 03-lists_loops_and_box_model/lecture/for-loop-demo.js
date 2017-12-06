'use strict';

var stuff = ['pencil', 'cat', 'popcorn', 'book'];
var answer = prompt('what is my favorite thing?');
var flag;

for (var i = 0; i < stuff.length; i++) {
  console.log('each iteration:', stuff[i]);
  // do stuff here
  if (answer === stuff[i]) {
    alert('nice job!  you got it right!');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('nope - you are wrong');
}
