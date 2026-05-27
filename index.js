let person = {
	name: 'Nikhil',
	age: 40
}

console.log(person.name);

let selectedcolors=['red','blue'];

console.log(selectedcolors[0]);

selectedcolors[2]='green'

console.log(selectedcolors[2]);

selectedcolors[3]=20

console.log(selectedcolors[3]);

console.log(selectedcolors.length);

function greet(name){
	console.log('Hello ' + name);
}

greet('Nikhil');

function square(number){
	return number*number;
}

console.log(square(5));	
