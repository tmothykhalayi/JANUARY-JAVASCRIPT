// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
 
// condition ? exprIfTrue : exprIfFalse
 
let adult = checkAge(12);
console.log(adult);
 
function checkAge(age){
 
    return age >= 18? true : false;
}
/*
checkWinner(false);
 
function checkWinner(win){
 
    win ? console.log("You win!") : console.log("You lose!");
}
*/