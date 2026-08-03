// let name = "Hayotbek";
// console.log(name.length);
// let word = "JavaScript";
// console.log(word.length);
// let text1 = "salom";
// console.log(text1.toUpperCase());
// let city = "tashkent";
// console.log(city.toUpperCase());
// let text2 = "HELLO";
// console.log(text2.toLowerCase());
// let lang = "JAVASCRIPT";
// console.log(lang.toLowerCase());
// let str1 = "   Salom   ";
// console.log(str1.trim());
// let str2 = "  Algoritm  ";
// console.log(str2.trim());
// let sentence = "I love JavaScript";
// console.log(sentence.includes("JavaScript"));
// let fruit = "Apple";
// console.log(fruit.includes("Banana"));
// let word1 = "Frontend";
// console.log(word1.startsWith("Front"));
// let word2 = "Backend";
// console.log(word2.startsWith("Java"));
// let file = "index.html";
// console.log(file.endsWith(".html"));
// let name2 = "Hayotbek";
// console.log(name2.endsWith("z"));
// let son = "5";
// console.log(son.padStart(3, "0"));
// console.log(son.padEnd(3, "0"));





















// repeat - bir qiymatni qayta - qayta takrorlash uchun ishlatiladi
// let ism = "toshmat"
// let r = ism.repeat(5)
// console.log(r);

// gol - gooooooooool
// let str = "gol"
// let newStr = str[0] + str[1].repeat(10) + str[2]
// console.log(newStr);

// ///////////////////////////////////////////////////

// replace, replaceAll, - bir qiymatni boshqa qiymatga almashtirib beradi
// 17.07.2026 17 /07 / 2026
// let sana = "17.07.2026"
// sana = sana.replaceAll(".", "/")
// console.log(sana);

// let email = "ali@gmail.com"
// email = email.replace("gmail.com", "yandex.ru")
// console.log(email);

// --------------------------
//     slice, substring - matindan nusha olshish uchun ishlatoladi
// let str = "Man Algoritm IT Center`da o`qiyman."
// // let a = str.slice(4, 12)
// // let b = str.substring(4 ,12)
// console.log(a);
// console.log(b);
// let c = str.slice(-9)
// console.log(c);
// let d = str.substring(-9)
// console.log(d);


// ----------------------------
//  split - string qiymatni arrayga aylantirish uchun ishlatiladi
// "Algortim" - [A, l, g, o, r, i, t, m]
// let str = "Algoritm"
// let srr = str.split("")
// // console.log(arr);
// let str = "Algortim , Oxford, Strt21, Ziyokor"
// let arr = str.split(", ")
// // console.log(arr);

// ----------------------
//     trim - qiymatni boshi va ohiridagi bohsjoylarni olibtashlaydi
// let matn = "          Salom            "
// console.log(matn); // oldingi xolat
// matn = matn.trim()
// console.log(matn); // yangi xolat

// let raqam = 2000
// raqam = raqam.toString()
// console.log(raqam);


// ----------

// localecompare - Hariflarini alfavit tartibida solishtirish uchun ishlatiladi

// 1, -1 , 0
let a = "Salom"
let b = "Lom"
console.log(a.localeCompare(b));

let a = "Salom"
let b = "salom"
console.log(a.localeCompare(b));


let a = "Salom"
let b = "zom"
console.log(a.localeCompare(b));


// *******
// eval - string isvhidagi matematik amallarni to`g`ri bajarib beradi .
let sum = "(20 + 10 / 30 - 5) * 10"
console.log(eval(sum));
