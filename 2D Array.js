let fruits =["apples" ,"oranges" ,"bananas"];
let vegetables =["carrots" ,"peas" ,"kales"];
let meat =["beef " ,"chicken" ,"mutton"];
let grocerylist = [ fruits ,meat ,vegetables];
for(let list of grocerylist){
    for(let food of list){
        console.log(food);
    }
}