const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let n = 0;
while (n < ingredients.length){
	console.log(ingredients[n]);
	n++;
}

// Write a for loop that prints out the contents of ingredients:
for (i of ingredients){
	console.log(i);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i >= 0; i--){
	console.log(ingredients[i]);
}