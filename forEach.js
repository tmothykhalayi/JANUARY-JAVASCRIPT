let students =["timothy" ,"thadeaus" ,"eliud"];
students .forEach(capitalize);
stUdents.forEach(print);
 function capitalize(element ,index ,array ){
    array[index] =element[0].uppercase() +element.substring(1);
}
function print (element){
    console.log(element);
}