let count = 0;
let intervalId = null;

function updateLabel() {
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    updateLabel();
};

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    updateLabel();
    if (intervalId) clearInterval(intervalId); // Stop automatic counting on reset
};

document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    updateLabel();
};

// Start automatic counting
document.getElementById("startAutoBtn").onclick = function() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            count += 1;
            updateLabel();
        }, 1000); // Increment every 1 second
    }
};

// Stop automatic counting
document.getElementById("stopAutoBtn").onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
};
