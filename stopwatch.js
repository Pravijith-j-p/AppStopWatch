// Define variables
let timer;
let seconds = 0;
let isRunning = false;

// Function to display time in HH:MM:SS format
function displayTime() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    // Get the display element
    const displayElement = document.getElementById('display');
    
    // Set the text content
    displayElement.innerText = display;

    // Set the text color
    displayElement.style.color = 'yellow'; // Change 'red' to the color 

    //increase the size
    displayElement.style.fontSize = '100px';
}


// Function to start the timer
function startTimer() {
    if (seconds === 0) {
        // If the timer is at 0, start from the beginning
        clearInterval(timer); // Clear any existing intervals
        isRunning = true;
        timer = setInterval(function () {
            seconds++;
            displayTime();
        }, 1000);
    } else if (!isRunning) {
        // If the timer is not at 0 and not running, continue from where it was paused
        isRunning = true;
        timer = setInterval(function () {
            seconds++;
            displayTime();
        }, 1000);
    }
    // Disable the button and add a 'disabled' class
    document.getElementById('startBtn').disabled = true;
    document.getElementById('startBtn').classList.add('disabled');
}
// Function to stop the timer
function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
    // Enable the button and remove the 'disabled' class
    document.getElementById('startBtn').disabled = false;
    document.getElementById('startBtn').classList.remove('disabled');
}


// Function to reset the timer
function resetTimer() {
    stopTimer();
    seconds = 0;
    displayTime();
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Event listener for back button press
window.addEventListener('popstate', function(event) {
    // Enable the button and remove the 'disabled' class when the back button is pressed
    document.getElementById('startBtn').disabled = false;
    document.getElementById('startBtn').classList.remove('disabled');
});
