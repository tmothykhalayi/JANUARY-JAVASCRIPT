async function loadfile(){
    let fileloaded =true;
    if(fileloaded){
        return("file loaded");
    }
    else{
        throw("file not loaded");
    }
}

promise.then(value=>console.log(value));
promise.catch(error=>console.log(error))