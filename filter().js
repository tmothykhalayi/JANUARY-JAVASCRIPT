let ages =[ 12 ,16 , 15 , 17 , 56 , 90];
let adults =ages.filter(checkAge);
adults.forEach(print);
function checkAges(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}