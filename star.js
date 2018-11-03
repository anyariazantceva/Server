"use strict";

const readline = require('readline-sync');

let rows = readline.question("How many rows? \n");
let columns = readline.question("How many columns? \n");
let total = "";

for (let i = 0; i<columns; i++) {
	total+="*";
	console.log(total);
}

for (let j = 0; j<rows; j++) {
    console.log(total);
}