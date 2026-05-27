let usercolor= undefined;
let defaultcolor= 'blue';
let currentcolor=usercolor || defaultcolor;

let CreditScore = true;
let highincome = true;
let iseligibleforloan = CreditScore && highincome;

console.log('selected color:', currentcolor);
console.log('is eligible for loan:', !iseligibleforloan);

// Falsy
// undefined
// null
// 0
// false
// ''
// NaN

//Truthy
// '0', ' ', [], {}, true, 'false'
//Non-zero numbers are also truthy
//Non-empty strings are also truthy

// NOT (!) returns the opposite of the value

//Shortciruiting
// OR (||) operator will return the first truthy value or the last value if all are falsy
// AND (&&) operator will return the first falsy value or the last value if all are truthy


console.log('or:', undefined || null || 0 || '' || 'hello' || 1);
console.log('and:', 'hello' && 1 && true && 'false' && null && undefined); 

let usercolor1 = 'red';
let defaultcolor = 'blue';
let currentcolor = usercolor1 || defaultcolor;

console.log('selected color:', currentcolor); // Output: 'selected color: red'  

let usercolor2 = undefined;
let currentcolor2 = usercolor2 || defaultcolor;
console.log('selected color:', currentcolor2); // Output: 'selected color: blue'  

