//Bitwise Operators
//Bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.
//Bitwise AND (&) operator compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
//Bitwise OR (|) operator compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
//Bitwise XOR (^) operator compares each bit of the first operand to the corresponding bit of the second operand. If one bit is 1 and the other bit is 0, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
//Bitwise NOT (~) operator inverts the bits of its operand. For example, if a bit is 0, it becomes 1, and if a bit is 1, it becomes 0.
//Bitwise Left Shift (<<) operator shifts all bits in its first operand to the left by the number of positions specified by its second operand. The vacated bits on the right are filled with zeros.
//Bitwise Right Shift (>>) operator shifts all bits in its first operand to the right by the number of positions specified by its second operand. The vacated bits on the left are filled with zeros for unsigned numbers and with the sign bit for signed numbers.
//Bitwise Unsigned Right Shift (>>>) operator shifts all bits in its first operand to the right by the number of positions specified by its second operand. The vacated bits on the left are filled with zeros, regardless of the sign of the original number.


console.log(1|2); //3
console.log(1&2); //0
console.log(1^2); //3
console.log(~1); //-2
console.log(1<<2); //4
console.log(4>>2); //1
console.log(-4>>>2); //1073741823

//Read, Write, Execute permissions can be represented using bitwise operators. Each permission can be represented as a bit in a binary number. For example, we can use the following representation:
//00000100 - Read permission
//00000010 - Write permission
//00000001 - Execute permission

let readpermissions = 4; // 100 in binary
let writepermissions = 2; // 010 in binary
let executepermissions = 1; // 001 in binary

let mypermissions = readpermissions | writepermissions | executepermissions; // 111 in binary, which is 7 in decimal
console.log(mypermissions); // 7

let hasreadpermission = (mypermissions & readpermissions) !== 0;  // Check if the read permission bit is set
console.log(hasreadpermission); // true

let haswritepermission = (mypermissions & writepermissions) !== 0;  // Check if the write permission bit is set
console.log(haswritepermission); // true

let hasexecutepermission = (mypermissions & executepermissions) !== 0;  // Check if the execute permission bit is set
console.log(hasexecutepermission); // true

console.log('hasreadpermission: ',mypermissions & readpermissions? 'yes':'no'); // yes
console.log('haswritepermission: ',mypermissions & writepermissions? 'yes':'no'); // yes
console.log('hasexecutepermission: ',mypermissions & executepermissions? 'yes':'no'); // yes