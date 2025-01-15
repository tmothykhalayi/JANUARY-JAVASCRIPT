// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}
