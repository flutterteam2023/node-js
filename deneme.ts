console.log("typescript merhaba 2");
console.log("Selam berke");

let first: number = 123; //decimal
let second: number = 0x37CF; //hexadecimal
let third: number = 0o377; //octal
let fourth: number = 0b111001; //binary
console.log(first, second, third, fourth);

var age: number = 20;
var firstName: string = "Berke";
var isMarried: boolean = false;
console.log(age, firstName, isMarried);

function displayInfo(name:string, age: number, isMarried:boolean){
    console.log(age*10, firstName, isMarried,);
}

displayInfo(firstName, age*2, isMarried);