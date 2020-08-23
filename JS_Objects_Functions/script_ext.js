/***************SECTION 5 : OBJECTS & FUCNTIONS*******************/

//Function constructor
/*
var ConstructorName //(start with captital letter) = function (all properties you want, separated by comma){
 this.all properties you want=all propertoes you want;
 this.separated by comma=separated by comma;
}

var object = new ConstructorName('value','value');
*/
/*
var Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge= function() {
        console.log(2020-this.yearOfBirth);
    this.doc=2020;
    }
}

var john = new Person('John','1996','Engineer');

//new keyword creates an Empty Object
//ConstructorName - Constructor function is called with arguments we specified
//Function calls creates a new execution stack wth the this var pointing to global obj but the new keyword makes the this var point ot the empty object it created and it is then assigned to var john.

john.calculateAge();
console.log(john.doc);

//Inheritance

var Person2 = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}

//Adding method in prototype prop of constructor
Person2.prototype.calculateAge2 = function() {
        console.log(2020-this.yearOfBirth);
    this.doc=2020;
    }

//Adding property in prototype prop of constructor
Person2.prototype.lastName= 'Smith';


var Jane = new Person2('Jane','1989','Doctor');
var Mark = new Person2('Mark','1998','Student');
var Ted = new Person2('Ted','1947','Retired');

//By inheritance even tho calculateAge and lastName is missing form Person object, it will be inherited in Jane, Mark and Ted as it is preset it the prototypoe prop of the fucntion constructor

Jane.calculateAge2();
Mark.calculateAge2();
Ted.calculateAge2();

console.log(Jane.lastName);
console.log(Mark.lastName);
console.log(Ted.lastName);

//Some functions
console.log(john.hasOwnProperty('name'));
console.log(Jane.hasOwnProperty('lastName'));
console.log(Ted instanceof Person);
console.log(Ted instanceof Person2);
console.log(Ted instanceof Object);

*/

//*************************Creating Objects : Object.create*******************************

/*
var personProto ={
    calculateAge : function() {
        console.log(2016-this.yearOfBirth);
    }
};

//Method 1
var John = Object.create(personProto);
    John.name='John';
    John.yearOfBirth='1998';
    John.job='teacher';


//Method 2
var Jane = Object.create(personProto,
    {
   name:{value : 'Jane'},
   yearOfBirth:{value : 2000},
   job:{value : 'designer'}
}); 

console.log(John);
console.log(Jane);


//Difference between object.create and constructor pattern is : The object.create builds from the object that we directly passed in the argument however The newly created object inherits from the constructor's prototype property(more popular)

*/  

//Primitives vs objects

//Primitives
/*
var a=20;
var b=a;
a=90;

console.log(a); // a is changed
console.log(b); // b remains unchanged 

//Objects
var John = {
    name:'John',
    age:34,
    car:'SUV'
};

var Jane=John;
John.car='BMW';
console.log(John.car);
console.log(Jane.car); // bth are changed

//Functions
var age=27;
var Shreya={
    name:'Shreya',
    age:24,
    city:'JBP'
};

function change(a,b){
    age=30;
    Shreya.city='BLR';
}
change(age,Shreya);
console.log(age); //unchanged =>as changes are mide on the copy of the primitive variable
console.log(Shreya.city); //changed =>made on reference

*/

//******************************Passing functions as Arguments**************************************8
//We set event listener and passed function ine the argument to handle events

/*
var years = [1998,1999,1990,2001,2019];

//Creating a generic function that traverses /loops over an input array and then we gave it function as an input which is used to calculate something based on each element of the array using different callback fucntions

function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//Callback function
function calculateAge(el){
    return 2020-el;
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){  //Max heart rate is calculated for people between 18 and 81 using below formula
    
    if(el>=18 && el<=81){
    return Math.round(206.9 - (0.67*el));
        }
          else {
              return -1;
          } 
}

var ages= arrayCalc(years,calculateAge); //calculateAge is a callback function will be caled at line 169 not 169. Passed as arg in 169
var fullage=arrayCalc(ages,isFullAge);

var heartRate= arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullage);
console.log(heartRate);


//*****************************************Functions returning functions*********************************

function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if(job === "teacher"){
        return function(name){
            console.log("Hello "+ name + "! What all subjects can you teach ?");
        }
    }
    else if(job === "developer"){
        return function(name){   //fucntion is basicalls a object, hence can be returned easily
            console.log("Hey "+ name + "! What coding languages do you know ?");
        }
    }
    else
        console.log("Invalid Entry");
}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
var developerQuestion=interviewQuestion('developer');

teacherQuestion('Jane');
designerQuestion('Harry');

//Same question for diff developers
developerQuestion('Ron');
developerQuestion('Edward');
developerQuestion('Leo');

//or 
interviewQuestion('teacher')('Mark');

*/


//**********************************Immediately called Function Expressions (IIFE) ************************//

//Purpose is to create new score that is hidden from outside scope 
//Goal => Data privace
//Don't interfere with other vriables in the code

//Goal check if randome number produed is gretaer than 5 but keep this random score hidden => Us eocncept of rovate variables
/*
function game(){
    var score= Math.random() *10;
    console.log(score>=5);
}
 game();


//It doesn't make sense to call a function everytime if sole purpose it just to hide the score => Use IIFE

//Fool JS by writing JS code inside parenthesis so that it thinks of it as exp and not as declaration. 

(function game(){
    var score= Math.random() *10;
    console.log(score>=5);
})();

//console.log(score); -- no defined as it is out of scope

//Pass a variable

(function game(goodLuck){
    var score= Math.random() *10;
    console.log(score>=5-goodLuck);
})(5);   //always true as we sub 5 from the result to it'll always be less that 5

*/

//**********************************CLOSURES*************************************//

//Function that returns a function that tells how many years we have left till retirement
/*
function Retirement(name){
    return function(age){
    
      if(age<=60){
          var retireAge= 60 - age;
          console.log(name + " has " + retireAge + " years left to retire");
   }
        else 
            console.log("Already retired");
 }
}

Retirement('Shreya')(40);

//Function that returns a function that tells how many years we have left till retirement - calculate age too

function retirement(retirementAge){
    var a= " years left to retire";
    return function(yearOfBirth){
        
          var age=2020-yearOfBirth;
          //var retireAge= 60 - age;
          console.log(retirementAge-age + a);
   
}
}
retirement(70)(1996);
//or 
//calling diff function for diff countires using same retirement fucntion

var retirementUS=retirement(60);
var retirementGermany=retirement(65);
var retirementIndia=retirement(50);
var retirementIreland=retirement(70);
var retirementCanada=retirement(80);

retirementUS(1996);
retirementGermany(1996);
retirementIndia(1996);
retirementIreland(1996);
retirementCanada(1996);
//So we can calculate retirment age if same person in diff countires using power of closure
   


//Interview question example using Closure
//We can use only 1 return unlike 3 like we used in above example - coz of closure we can use job var  even if the return stmnt of outer function is returned as the the fucntion closes in on the job variable
    
function interviewQuestion(job){
    return function(name){
        if(job === "designer"){
            console.log(name + ', can you please explain what UX design is?');
        }
   
    else if(job === "teacher"){
        console.log("Hello "+ name + "! What all subjects can you teach ?");
        
    }
    else if(job === "developer"){
       console.log("Hey "+ name + "! What coding languages do you know ?");
        
    }
    else
        console.log("Invalid Entry");
}
}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
var developerQuestion=interviewQuestion('developer');

teacherQuestion('Jane');
designerQuestion('Harry');

//Same question for diff developers
developerQuestion('Ron');
developerQuestion('Edward');
developerQuestion('Leo');


*/
//**********************************BIND , CALL & APPLY*************************************//
//Allow to call a fucntin and set the this variable manually

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');

//Call
john.presentation.call(emily, 'friendly', 'afternoon'); //change this var to emily. Now presentation methoda can be used for emily too ==> Method Borrowing

//Apply
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//Bind
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);

//Full age is different in dif countries
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

























