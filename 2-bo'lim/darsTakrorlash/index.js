// let raqam1 = 2026
// let raqam2 = "2026"

// console.log(raqam1 + 2);
// console.log(+raqam2 + 2);
// console.log(parseInt(raqam2) + 2);
// console.log(parseInt(raqam2) + 2);
// console.log(Number(raqam2) + 2);

// String ichidagi raqamni parchalash necha xil bo`ladi
// 1. +
// 2. parseInt()
// 3. parseFloat()
// 4. Number()


// // isInteger() - is Integer()
// let a = 10
// let b = 10.5
// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));


// Math Metods
// 1. abs - absolute - berilgan sonni har doim musbat qiladi

// let a = -5
// let b = 10
// let c = -1000000

// console.log(Math.abs(a));
// console.log(Math.abs(b));
// console.log(Math.abs(c));

// 2. floor - sonni pastga qarab yaxlitlaydi
// let d = 5.7
// let e = 5.99999
// let f = 5.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
// console.log(Math.floor(d));
// console.log(Math.floor(e));
// console.log(Math.floor(f));
// let d2 = -5.7
// let e2 = -5.999999
// let f2 = -5.0000000000000000000000000000001
// console.log(Math.floor(d2));
// console.log(Math.floor(e2));
// console.log(Math.floor(c2));


// 3. ceil - kasrson tepaga qarb yaxlitlaydi


// 4 .vaziytka yaxlitlaydi
// let  a = 7.7
// let  b = 7.3
// let  c = 7.5
// console.log(Math.round(a));
// console.log(Math.round(b));
// console.log(Math.round(c));

// 5. tranc - kasr sonni faqat butun qismini kesib oladi
// let a = 3.12
// let b = 3.988

// console.log(Math.trunc(a));
// console.log(Math.trunc(b));

// 6. random  - va 1 orasidga ixtiyori kasr son chiqaradi
//telefon raqam yaratish

function getPhone() {
    let arr = [77, 99, 98, 95, 93, 91, 90, 50, 33, 88, 78, 70]
    let code = Math.trunc(Math.random() * 100)
    let a = Math.trunc(Math.random() * 10)
    let b = Math.trunc(Math.random() * 10)
    let c = Math.trunc(Math.random() * 10)
    let d = Math.trunc(Math.random() * 10)
    let e = Math.trunc(Math.random() * 10)
    let f = Math.trunc(Math.random() * 10)
    let g = Math.trunc(Math.random() * 10)
    if (code < 10 || !arr.includes(code)) return getPhone()
    return `+998 ${code} ${a}${b}${c} ${d}${e} ${f}${g}`
}

console.log(getPhone());
