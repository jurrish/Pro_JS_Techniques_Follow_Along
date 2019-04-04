'use strict';

// The constructor for our 'Lecture'
// Takes two strings, name and teacher
function Lecture( name, teacher ) {
// Save them as local properties of the object
this.name = name;
this.teacher = teacher;
}

// A method of the Lecture class, used to generate
// a string that can be used to display Lecture information
Lecture.prototype.display = function(){
  return this.teacher + " is teaching " + this.name;
};

// A Schedule constructor that takes in an
// array of lectures
function Schedule( lectures ) {
this.lectures = lectures;
}
// A method for constructing a string representing
// a Schedule of Lectures
Schedule.prototype.display = function(){
var str = "";
// Go through each of the lectures, building up
// a string of information
for ( var i = 0; i < this.lectures.length; i++ )
str += this.lectures[i].display() + " ";
return str;
};

// Create a new Schedule object and save it in
// the variable 'mySchedule'
var mySchedule = new Schedule([
// Create an array of the Lecture objects, which
// are passed in as the only argument to the Lecture object
new Lecture( "Gym", "Mr. Smith" ),
new Lecture( "Math", "Mrs. Jones" ),
new Lecture( "English", "TBD" )
]);
// Display the Schedule information as a pop-up alert
console.log( mySchedule.display() );



//example of function scope and closures
//setTimeout is attached to window object because of how it's defined and should be garbage collected after 2 seconds, right? no.
//delayedTimer has closure over setTimeout.
setTimeout(function(){
  console.log('set timeout was called!');
}, 2000);

//has closure over setTimeout and will protect innards of setTimeout
function delayedTimer(msg, time){
  setTimeout(function(){
    console.log(msg);
  }, time)
};


delayedTimer("delaaaayed by 10 secs", 10000);
