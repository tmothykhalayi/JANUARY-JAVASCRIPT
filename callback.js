let total =sum(2,5);
displayconsole(total);
function sum (x , y){
let results =x+y;
return results;
}
function displayconsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("Mylabel").innerHTML =output;
}