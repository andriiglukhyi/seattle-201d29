'use strict';

Goat.allGoats = [];

function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

new Goat('cool goat', 'img/cool-goat.png');
new Goat('mean goat', 'img/mean-goat.png');

console.log(Goat.allGoats);
