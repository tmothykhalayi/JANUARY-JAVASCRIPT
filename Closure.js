document.getElementById("login button").onclick =login();
userInbox =42.69;
function login (){
    let username ='timo';
    let userInbox = 1;
    function alertUser(){
        alert('$(username) you have ${userInbox} new messages!')
        userInbox= 0;
    }
    return alertUser;
}