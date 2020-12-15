console.log("Hello World!");

let name = 'Sean'; // String
console.log(name);
let age = 30; // number
let isApproved = false; // Boolean
let firstName = undefined;
let selectedColor = null;

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let a = 5;
let b = 6;
let result = a + b;
console.log(result);
b = 7;
console.log(b);

for (let i = 0; i < 5; i++) {
    
    console.log('hello');
    
    if (i == 3) {
        console.log('no');
        
    }
    
}

let headphones = {
    color: 'black',
    power: true,
    charge: 100
};

if (headphones.power == true) {

    for (let i = headphones.charge; i > 0; i--) {
        console.log(i);
        
    }
};
