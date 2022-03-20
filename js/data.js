let drinksHeaders = ["Name", "Price"];
let drinks = [
    ["Drink 1", 10],
    ["Drink 2", 20],
    ["Drink 3", 30],
    ["Drink 4", 40],
];

let ingredientsHeaders = ["Name", "Price"];
let ingredients = [
    ["Ingredient 1", 1],
    ["Ingredient 2", 2],
    ["Ingredient 3", 3],
]


let usersHeaders = ["Name", "Money"];
let users = [
    ["Petya", 100],
    ["Masha", 200],
    ["Arkady", 300],
]

let machines = [
    ["Machine 1"],
    ["Machine 2"],
]

let machinesDrinks = [
    [1, 5, 6, 7, 8],
    [8, 7, 6, 5, 4],
]

let formBuyDrink = [ 
    {
        label: "Machine:",
        select: machines.map((e) => e[0]),
        selectId: "selectMachine",
    },
    {
        label: "User:",
        select: users.map((e) => e[0]),
        selectId: "selectUser",
    },
    {
        label: "Drink:",
        select: drinks.map((e) => e[0]),
        selectId: "selectDrink",
    },
    {
        label: "Ingredients:",
        select: ingredients.map((e) => e[0]),
        selectId: "selectIng",
    },
    {
        input: {
            type: "button",
            value: "Buy",
            handler: function() {
                let machineIndex  = document.getElementById("selectMachine").selectedIndex;
                let userIndex  = document.getElementById("selectUser").selectedIndex;
                let drinkIndex = document.getElementById("selectDrink").selectedIndex;
                let ingIndex   = document.getElementById("selectIng").selectedIndex;

                console.log(`${machineIndex}, ${userIndex}, ${ingIndex}`);

                let sum = drinks[drinkIndex][1] + ingredients[ingIndex][1];
                if (users[userIndex][1] < sum) {
                    alert("Not enough money!");
                } else if (machinesDrinks[machineIndex][drinkIndex] == 0) {
                    alert("These drinks are over! Please, choose anouther one.");
                } else {
                    users[userIndex][1] -= sum;
                    machinesDrinks[machineIndex][drinkIndex] -= 1;
                    //window.location.href = "../index.html";
                }

                //return false;
            },
        }
    },
];

