// /* ========================================
//    FIND() METODI
// ======================================== */

// // 1-masala
// const arr1 = [3, 7, 8, 12, 15, 20, 9];

// const result1 = arr1.find(num => num > 10 && num % 2 === 0);
// console.log(result1); // 12


// // 2-masala
// const arr2 = [10, 15, 21, 30, 45, 9];

// const result2 = arr2.find(num => num % 3 === 0 && num % 5 === 0 && num > 15);
// console.log(result2); // 30


// /* ========================================
//    FINDINDEX() METODI
// ======================================== */

// // 3-masala
// const arr3 = [5, 8, 12, -3, 7, -9, 2];

// const result3 = arr3.findIndex(num => num < 0);
// console.log(result3); // 3


// // 4-masala
// const arr4 = [10, 18, 16, 22, 30, 25];

// const result4 = arr4.findIndex(num => Number.isInteger(Math.sqrt(num)));
// console.log(result4); // 2


// /* ========================================
//    FINDLASTINDEX() METODI
// ======================================== */

// // 5-masala
// const arr5 = [12, 60, 9, 45, 100, 33, 80];

// const result5 = arr5.findLastIndex(num => num < 50 && num % 3 === 0);
// console.log(result5); // 5


// // 6-masala
// const arr6 = [5, 23, 100, 45, 200, 78, 300];

// const result6 = arr6.findLastIndex(num => num >= 10 && num <= 99);
// console.log(result6); // 5


// forEch 
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// // let sum = 0
// arr.forEach((value, index, a ) => {
// sum += value.length;
// if (index === 3) {
//     console.log(value);
    
// }
// })
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value))
// console.log(sum);


// map
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => {
//     return value+ " olaman."
// })
// console.log(newArr);

// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => ${value} ${index + 1})
// console.log(newArr);

// forEch va map | farqi
// forEch da return ishlamaydi , qiymat qaytarmaydi
// map da return ishlaydi ozidan yangi array qaytaradi. 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => {
//    if (value <= 5) return value
// })

// console.log(newArr);
// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map ((value, index, a) => value * 2)
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => value % 2 === 1)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value.length))
// console.log(sum);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.filter((value, index, a) => value.length <= 4)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
// return value.length+" "+value
// }) 
// console.log(newArr);

// let arr = [1, 20, 14, 7, 2, 5, 18, 17];
// let newArr = arr.filter
//  ((value, index, a) => value >= 10 && value < 100)
//  console.log(newArr);
 
// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
//   return *${value.slice(1)}
// })
// console.log(newArr);

// find() - array ichidagi  qiymat qidiradi. topsa qiymatni qaytaradi.
// topa olmasa undefined qaytaradi

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// let newValue = arr.find((value, index, a) => {
// if (value === "Apelsin") return value;
// })
// console.log(newValue);

// findindex()

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]

// arr.findIndex((value, index, a) => value === "Olma")

// let i = arr.findLastIndex((value, index, a) => {
//     if (value === "Nok") return index
// })

// console.log(i);