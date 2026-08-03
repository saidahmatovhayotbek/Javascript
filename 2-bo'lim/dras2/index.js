// let arr = [1, 1, 2, 9, 9, 7, 0, 0, 0, 3, 1]
// let newArr = []
// for (const value of arr) {
//     if (!newArr.includes(value)) newArr.push(value)
// }
// console.log(newArr);


// let str = "AAAllllllgoooooorrriiiitttttmmmmm"
// let newstr = []
// for (let value of str) {
//     if (!newstr.includes(value)) newstr.push(value)    
//     }
//     console.log(newstr.join(""));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// let sum = 0
// for (let value of arr) {
//     let code = `${value}`.charCodeAt()
//     if (!(code % 2)) sum += code 
// }
// console.log(sum);

let str = "AlgORItm"
let katta = []
let kichik = []
for (const value of str) 
    if (value !== value.toUpperCase()) kichik += value
    else katta += value
console.log(katta , kichik);
