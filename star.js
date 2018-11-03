"use strict";

const readline = require('readline-sync');

let rows = readline.question("How many rows? \n");
let columns = readline.question("How many columns? \n");
let total = "";

const displayPicture = function (n) {
	n = this;
	for (var i = 0; i<this.length; i++) {
		total+="*";
	};
};

displayPicture(rows);
displayPicture(columns);