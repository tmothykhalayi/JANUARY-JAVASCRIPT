let x;
let y;
let z;

function rollDice() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

// Roll the dice every second (1000ms)
setInterval(rollDice, 1000);
