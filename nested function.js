let username ="Timothy"
let userinbox =0;
login();
function login(){
    displayusername();
    displayuserinbox();
    function displayusername(){
        console.log('you have $(username)');
    }
    function displayuserinbox(){
        console.log('you have $(userinbox) new message');
    }
}
