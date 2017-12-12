'use strict';

// Demo for objects to constructors

// var jeff = {
//   course: '201d4',
//   firstName: 'Jeff',
//   lastInitial: 'G',
//   faveNumber: 24,
//   isCodeNinja: true,
//   intro: function() {
//     console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// };

// I would need 242 lines of code to model our class this way
// (22 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:
// var jeff = new Student('Jeff', 'G', 24);
var mahClass = [];

function Student(yo, lastInitial, faveNumber){
  this.course = '201d4';
  this.firstName = yo;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.intro =  function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  mahClass.push(this);
  // console.log(this);
  // alert('NEW STUDENT CREATED');
};

var jeff = new Student('Jeff', 'G', 24);
var susan = new Student('Susan', 'B', 11);
var miguel = new Student('Miguel', 'A', 4);

// What if I wanted to make an array of students?
// var mahClass = [jeff, susan, miguel];
// This is annoying, so let's push from the constructor!
