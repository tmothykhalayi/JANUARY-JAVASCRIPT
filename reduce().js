let prices =[12 ,30 ,21 ,18 ,10];
let total =prices.reduce(checkout);
console.log('The total is :(total)')
function checkout (total ,element){
return total + element ;
}