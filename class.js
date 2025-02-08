class Player{
    score = 0;
    pause(){
        console.log("you passed the game");
    }
    exit(){
        console.log("you exited the game");
    }
}
const Player1 =new Player();
const Player2 =new Player();
const Player3 =new Player();
const Player4 =new Player();
const Player5 =new Player();
const Player6 =new Player();
const Player7 =new Player();

Player1.score +=1;
console.log(Player1.score);
Player1.pause();
Player1.exit();