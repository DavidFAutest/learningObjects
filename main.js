
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

let restaurants = [
{   name: 'Miguel',
    city: 'San Diego',
    alreadyVisited: true
},
{   name: 'Dave',
    city: 'Escondido',
    alreadyVisited: false
},
{   name: 'Food land',
    city: 'Sun Deego',
    alreadyVisited: false
}
];

for (let i = 0; i < restaurants.length; i++) {
    let restaurant = restaurants[i];
    let restaurantInfo = restaurant.name + ' in ' + restaurant.city;
    console.log(restaurantInfo);
    if (restaurant.alreadyVisited) {
        console.log(' You have already visited ' + restaurantInfo)
    } else {
        console.log(' You have not visited ' + restaurantInfo + ' yet');
    }
}
