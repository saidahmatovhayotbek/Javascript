// // Math.abs()
// console.log(Math.abs(-45));
// console.log(Math.abs(-120));

// // Math.floor()
// console.log(Math.floor(9.8));
// console.log(Math.floor(15.99));

// // Math.ceil()
// console.log(Math.ceil(5.2));
// console.log(Math.ceil(18.01));

// // Math.round()
// console.log(Math.round(12.6));
// console.log(Math.round(7.3));

// // Math.trunc()
// console.log(Math.trunc(14.87));
// console.log(Math.trunc(-6.45));

// // Math.random()
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);





// sqrt - Kvadrat ildizi degani
//  9 -> 3
//  25 -> 5
//  16 -> 4
// let a = Math.sqrt(9)
// let b = Math.sqrt(25)
// let c = Math.sqrt(16)
// console.log(a);
// console.log(b);
// console.log(c);
// let raqam = 11
// console.log(+Math.sqrt(raqam).toFixed(1));

// cvrt - kub ildizi
// 27 -> 3
// 512 -> 8
// let kub = Math.cbrt(512)
// console.log(kub);

// let raqam = 100
// toString() - berilgan qiymatni stringga aylantirib beradi
// raqam = raqam.toString()
// console.log(typeof raqam);

// let kasr = 100 / 3
// console.log(kasr.toFixed(1));

// is NaN - is Not a Namber? - berilgan qiymat Raqam emasmi?

let a = null
let b = "100"
let c = -10
let d = 10
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));




console.log(Number("25"));
console.log(Number("100.5"));

console.log(Number.isInteger(15));
console.log(Number.isInteger(15.7));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(25));

console.log(Number.parseInt("45px"));
console.log(Number.parseInt("120.8"));

console.log(Number.parseFloat("45.8px"));
console.log(Number.parseFloat("99.99"));

console.log(Math.round(4.4));
console.log(Math.round(4.6));

console.log(Math.floor(8.9));
console.log(Math.floor(5.1));

console.log(Math.ceil(6.2));
console.log(Math.ceil(7.9));

console.log(Math.trunc(9.8));
console.log(Math.trunc(14.1));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.max(4, 7, 9, 2));
console.log(Math.max(15, 80, 42));

console.log(Math.min(4, 7, 9, 2));
console.log(Math.min(15, 80, 42));

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

console.log(Math.sqrt(64));
console.log(Math.sqrt(81));

console.log(Math.abs(-20));
console.log(Math.abs(15));