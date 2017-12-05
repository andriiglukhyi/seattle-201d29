'use strict';

var kids = prompt('how many kids does brian have?');
console.log('num of kids:', kids);

var hats = prompt('how many hats does brian have?');
console.log('num of hats:', hats);

if (kids === '3' || kids === '4') {
  alert('u right');
}

if (kids === '3' && hats === '0') {
  alert('u right again.');
}
