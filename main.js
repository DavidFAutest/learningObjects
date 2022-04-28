
// let learningToCode = {
//     languages: ["JavaScript", "C#", "Java"],
//     isDifficult: true,
//     difficulty: 8,
//     isRewarding: true,
//     humor: "https://www.reddit.com/r/ProgrammerHumor/"
// }

// learningToCode.languages.push("Go");
// learningToCode.difficulty = 7;
// delete learningToCode.humor;
// learningToCode.isFun = true;

// for (let i = 0; i < learningToCode.languages.length; i++) {
//     console.log(learningToCode.languages[i]);
// }

// for(let key in learningToCode){
//     console.log(key);
// }

// for(let key in learningToCode){
//     console.log(learningToCode[key]);
// }

//console.log(Object.keys(learningToCode));

//console.log(learningToCode)
//--------------------------------------------

// Bake a Cake

// let recipe = {
//     title: 'Chocolate Cake',
//     serves: 8,
//     ingredients: ['flour','egg','chocolate']
// }

// console.log(recipe.title);
// console.log("Serves: ",recipe.serves);
// console.log('Ingredients:');

// for (let i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }

//------------------------------------

// Restaurant to visit

// let restaurants = [
// {   name: 'Miguel',
//     city: 'San Diego',
//     alreadyVisited: true
// },
// {   name: 'Dave',
//     city: 'Escondido',
//     alreadyVisited: false
// },
// {   name: 'Food land',
//     city: 'Sun Deego',
//     alreadyVisited: false
// }
// ];

// for (let i = 0; i < restaurants.length; i++) {
//     let restaurant = restaurants[i];
//     let restaurantInfo = restaurant.name + ' in ' + restaurant.city;
//     console.log(restaurantInfo);
//     if (restaurant.alreadyVisited) {
//         console.log(' You have already visited ' + restaurantInfo)
//     } else {
//         console.log(' You have not visited ' + restaurantInfo + ' yet');
//     }
// }
//------------------------------------------------------------------------------

// More on Objects - Second Lesson - https://github.com/cccareers/TA200-Intermediate-Test-Automation/blob/main/13-more-on-objects.md
// 1.

// function add(x, y) {
//     if (x + y == 1000 || x == 1000 || y == 1000) {
//         return true
//     }    
// }
// console.log(add(500, 500))
// console.log(add(500, 400))
// console.log(add(1000, 400))

//---------------------------------
// 2.  (WIP)
// function extensions() {
//     let fileTypes = ['index.html', 'main.js', 'styles.css'];

// }

// console.log(fileTypes)
//-------------------------------
// 3. Write a function to convert Celsius to Fahrenheit Function calFahrenheit() returns 
// the converted Celsius value to Fahrenheit value based on the formula (Celsius × 9/5) + 32 = Fahrenheit

// function calFahrenheit(Celsius) {
//     return 9/5*Celsius+32 
// }
// console.log(calFahrenheit(19))
//----------------------------------
//4.

//

//---------------------------------
//5. 

// function calculateSupply(need, age) {
    
// }

//----------------------------------

//New Lesson. Exercise 14 - Built in Objects
//--
//Examples - Math Object - W3Schools lookup
// let num = 5.7;
// console.log(Math.round(num));
// let num2 = 5.2;
// console.log(Math.round(num2));
//---------------------------
// Random Number Gen

// function genRandom(start, end){
//     return Math.floor(Math.random()*(end-start)) + start
// }

// console.log(genRandom(80, 90))
// console.log(genRandom(1, 10))

//-----------------------------
//Area of a circle using Math object and PI  Area = PI x R squared

// function areaOfACircle(Radius) {
//     return Math.PI*Radius*Radius
// }
// console.log(areaOfACircle(10))
// console.log(areaOfACircle(20))
// console.log(areaOfACircle(30))

//--------------------------------
// Lesson 15 built-in-objects-continued.
//--------
// Example
// function is_array(input) {
//     if (toString.call(input) === "[object Array]")
//         return true;
//     return false;   
//         };
//         console.log(is_array([1, 2, 4, 0]));
//------------------------------------
// Array Exercises 2 - Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output: "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
//-------------------------------------
// Date Instance Methods
// Examples
// console.log(new Date()); // flat data in GMT
// console.log(new Date().toString()); // more info in GMT
//---------
//1). Write a JavaScript function to check whether an 'input' is a date object or not.
// -- Date sets ---
// console.log(is_date("April 28, 2022 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([0, 1, 2, 4, 5]));
//------

// function is_date(input) {
//     if(Object.prototype.toString.call(input) === "[object Date]")
//     return true;
//     return false;
// }

// console.log(is_date("April 28, 2022 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([0, 1, 2, 4, 5]));

//------------------------------------------------
// JS String Exercise
//1). Write a JavaScript function to check whether a string is blank or not.
// Test Data:
//console.log(is_Blank(''));
// should return true 
//console.log(is_Blank('xyz'));
// should return false
//------

// function is_Blank(input) {
//     if (input.length === 0) {
//         return true;}
//         else {
//         return false;
//         }
//     }
//     console.log(is_Blank(''));
//     console.log(is_Blank('xyz'));
//-------------------------------------------------
//2). Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data:
//console.log(isInputAString('helloWorld'));
// should return true
//console.log(isInputAString([0, 1, 2, 4, 5]));
// should return false
//-------

// function isInputAString(input) {
//     if (Object.prototype.toString.call(input) === '[object String]') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isInputAString('helloWorld'));
// console.log(isInputAString([0, 1, 2, 4, 5]));
//console.log(Object.prototype.toString.call('HelloWorld'))
//----------------------------------------------------
//3). Write a JavaScript function to capitalize the first letter of a string.
//Test Data :
//console.log(capitalize('my string exercises'));
// should return "My string exercises"
//--------
// WIP Not finished
// function capString(input) {
//     return input
// }
// console.log(capitalize('my string exercises'));