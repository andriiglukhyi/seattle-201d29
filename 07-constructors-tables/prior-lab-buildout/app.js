'use strict';

// +++++++++++++++++++++++++++++++++++++++
// DATA
// +++++++++++++++++++++++++++++++++++++++

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var salestable = document.getElementById('salestable');

var allLocations = [];

function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCustsPerHour = min;
  this.maxCustsPerHour = max;
  this.avgCookiesPerCust = avg;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  allLocations.push(this);
}

new CookieStand('1st and Pike', 23, 65, 6.3);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

// +++++++++++++++++++++++++++++++++++++++
// DEFINE ACTIONS (DECLARE FUNCTIONS)
// +++++++++++++++++++++++++++++++++++++++

CookieStand.prototype.calcCustsEachHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
  }
};

CookieStand.prototype.calcCookiesEachHour = function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
    // console.log(oneHour, 'one hour');
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
    // console.log(this.totalDailySales, 'total');
  }
};

CookieStand.prototype.render = function(){
  this.calcCookiesEachHour();
  // create a tr
  var trEl = document.createElement('tr');
  // create td, content, append for the store name
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  // create tds, give them content, append for hourly numbers
  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  // create td, give it content, append for the daily totalDailySales
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  // append the tr to the table
  salestable.appendChild(trEl);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

function makeHeaderRow() {
  // create a tr
  var trEl = document.createElement('tr');

  // create td, content, append for the store name
  var thEl = document.createElement('th');
  thEl.textContent = 'Location Name';
  trEl.appendChild(thEl);

  // create tds, give them content, append for hourly numbers
  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  // create th, give it content, append for the daily totalDailySales
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  // append the tr to the table
  salestable.appendChild(trEl);
}

// +++++++++++++++++++++++++++++++++++++++
// EXECUTE ACTIONS (CALL FUNCTIONS)
// +++++++++++++++++++++++++++++++++++++++

makeHeaderRow();
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
