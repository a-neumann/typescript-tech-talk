
// Zuweisung

let b = "";

// Definition

let a: string;


// abstrakte Typen:

let bool: boolean;

let num: number;

let str: string;

let obj: Object;

let arr: [string];
let arr_syntax2: Array<string>;

let fun: Function;


// Type checking

const baseNum = 5;
let result: number;

result = baseNum + "1.5"; // 51.5 😣
result = baseNum + 1.5; // 6.5 😃


// Objekte

let foo: { vname: string, value?: number };

foo = { vname: "" }

let id = foo.vname;


// Arrays

//let users: Array<string> = [];
//let users: string[] = [];
let users = new Array<string>();

users.push("John");
users.push(foo.vname);
