let a =5;
let b =7;
let c =12;
let d =4;
console.log(sum(a ,b , c , d));
function sum(...numbers){
    let total =0;
    for (let number of numbers){
        total += number;
    }
return total;
}