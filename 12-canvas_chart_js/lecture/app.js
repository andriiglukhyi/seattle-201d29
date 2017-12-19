'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['coding', 'fishing', 'cooking', 'skateboarding'],
    datasets: [{
      label: 'Votes for my fav thangz',
      data: [3, 1, 4, 10],
      backgroundColor: ['#444', '#888', 'orange', 'blue']
    }]
  },
  options: {}
})
