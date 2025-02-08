const car1 = {
    model:"mustang" ,
    color :"red",
    year:2016,
    drive:function(){
        console.log("You drive the car")
    },
    brake:function(){
        console.log("You step on  the brake");
    }   
}
 const car2 = {
    model:"corvette" ,
    color :"blue",
    year:2024,
    drive:function(){
        console.log("You drive the car")
    },
    brake :function(){
        console.log("You step on  the brake");
    }   
}
const cars = [car1 ,car2];
console.log(car1.model);
console.log(car1.color);
console.log( car1.year);

console.log(car2.model);
console.log(car2.color);
console.log( car2.year);
car.drive();
car.brake();

startrace(cars);
function startrace(cars){
    for (const car of cars){
        car.drive();
    
}
}