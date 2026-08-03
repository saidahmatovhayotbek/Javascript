// 1. ''
// 2. ""
// 3. ``
// 4. String()
// 5. toString()

// let  str = "aaaaaaaaaaaaaa\naaaaaaaaaaaaaaa"
// console.log(str);

// let str = "Sa\tlom"
// console.log(str);

// let str = "Algortim"
// console.log(str[0]);
// // for of 

// let count = 0
// for (const Hayotbek of str) {
//     console.log(Hayotbek);
//     count++
// }
// console.log(count);




// String Methods

let str = "Algoritm and Oxford"

// 1. length
// let uzunlik = str.length
// console.log(uzumlik);

// 2. charAt() , at()
// console.log(str.charAt(0));
// console.log(str[0]);
// console.log(str.at(0));

// console.log("///////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

// console.log(str.charAt(-1));
// console.log(str[-1]);
// console.log(str.at(-1));

// 3. charCodeAt()
// console.log(str.charCodeAt(1));

// // 4. concat()
// let math1 = "Salom"
// let math2 = "Alik"
// let math3 = "Nimagap"
// let math = math1.concat(" ", math2, " ", math3) 


// let i = "and"
// if ( str.includes(i)) {
//     str = str.replace(i , "va")
// }else{
//     console.log("Yoq mavjud emas .");
// }
// console.log(str);


// let  str = "Algortim and Oxford"
// // 6. startWith(), endwith()
// let s = "Alg"
// let isstart = str.startsWith(s)
// console.log(isstart);
// let e = "rd"
// let isend = str.endsWith(e)
// console.log(isend);

//  7. search() , indexOf() , LastIndexOf()
// let isAlpha = str.search("and")
// console.log(isAlpha);
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));



let phone = "12 345 67 89"
let newphone = phone.padStart(phone.length + 5 ,"+998")
console.log(newphone);

let name = "eshmat.teshmat.com"
let email = name.padEnd(name.length + 10 , "@gmail.com")
console.log(email);
