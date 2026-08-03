// // Shu arrayni 2 ga ajratib  bering
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr1 = []
let arr2 = []

for (let i = 0; i < arr.length; i++) {
    if (i % 4 < 2) {
        arr1.push(arr[i])
    } else {
        arr2.push(arr[i])
    }
}

console.log(arr1);
console.log(arr2);

// ===========================================================
// random dan foydalanib Telefon raqam tayotlab bering

// Javob: +998 99 111 22 33

let num = "+ 998" + Math.floor(Math.random() * 90 + 10) + " " + Math.floor(Math.random() * 900 + 100) + " " + Math.floor(Math.random() * 90 + 10) + " " + Math.floor(Math.random() * 90 + 10)
console.log(num);


===============================================




// Shu arrayni  ishidagi Juft raqamlar summasini toping

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    sum += arr2[i]
  }
}
console.log(sum);



let str = "algoritm it"

let nstr = str.toUpperCase().slice(1 , 8).toLowerCase()
let nsstr = pop.nstr(A)

console.log(nsstr);


let atr =" algoritm"

let str1 = str.toLowerCase().split(1  , 5).join(1)
let str3 = str.toLocaleLowerCase().apply().at(-1)


for( let i = 0; i< arr.2.length; i++){
    if (arr2[i] % 2 === 0){
        sum += arr[i]
    }

}