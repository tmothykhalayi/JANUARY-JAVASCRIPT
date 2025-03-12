// Function that accepts a callback
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched");
        callback(); // Calls the callback function after the data is fetched
    }, 2000);
}

// Callback function
function processData() {
    console.log("Processing data...");
}

// Passing the callback function to fetchData
fetchData(processData);


//example 2
let stock ={
    fruits:["mangoes" ,"apples ","strawberry"]
}

console.log(stocks.fruits);





let order =( fruit_name ,call_production)=>{
    console.log("order placed sucessfully ");
    call_production();

};
let  production =()=>{
    console.log("order received sucessfully starting production anytime");

}
order(production);