
// Funktionen

function greet(name: string) {

    return `Hi ${name}. Have a nice Day!`;
}

let greeterFunction: (x: string) => string;

greeterFunction = greet;


// Compound-Typen

let myTimestamp: number | Date;


function greet2(name: string | number, append = "Have a nice Day!") {

    //let salutation = isNaN(name as any) ?
    let salutation = isNaN(name as number) ? 
        name : 
        "User with ID: " + name;

    return `Hi ${salutation}. ${append}`;
}

// Der zweite Parameter ist optional, da dieser ein Standrdwert hat
let text = greet2("Bob");


// Komplexe Typen

let arrayOfFunctions: Array<(x: number, s: string) => number>;

// Objekte als Key-Maps

let myObj: { [key: string]: number };

myObj.bar = 33;

// TypeScript weis, dass es numerisch sein muss
let myNum = myObj["whatever"];


// Tuples

let coords: [number, number];
coords = [11.111, 22.222];