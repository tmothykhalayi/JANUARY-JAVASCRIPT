class car{
    constructor(power){
    this._gas = 25;
     this._power=power;
    }
     get power(){
        return'${this._power}hp';
     }
     get gas(){
        return`${this._gas}L ($this._gas/50*100}%)';
     }
}
let car =new car(400);
console.log(car.power);
console.log(car.gas) ;