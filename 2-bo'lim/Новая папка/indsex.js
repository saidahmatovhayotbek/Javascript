let st = "A2lgo2ri2tm6";

let word = "";
let numbers = "";

for (let ch of st) {
    if (isNaN(ch)) {
        word += ch;
    } else {
        numbers += ch;
    }
}

console.log(word);    // Algoritm
console.log(numbers); // 2026