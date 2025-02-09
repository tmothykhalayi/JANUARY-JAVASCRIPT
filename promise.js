const promise =new promise((resolve,reject)=>{
    let fileloaded =true;
    if(fileloaded){
        resoleve("file loaded");
    }
    else{
        reject("file not loaded");
    }
})
promise.then(value=>console.log(value));
promise.catch(error=>console.log(error));
/*
const wait = time =>new promise(resolve=>{
    setTimeout(resolve ,time);});

wait(3000).then(()=>console.log("Thanks for waiting"));*/
