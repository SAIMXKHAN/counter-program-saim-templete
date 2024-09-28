
const decreaseBtn = document.getElementById("decreaseBtn") 
const resetBtn = document.getElementById("resetBtn") 
const increaseBtn = document.getElementById("increaseBtn") 
const countlabel = document.getElementById("countlabel") 

let count = 0;

// Function to update the counter display and color
function updateCountDisplay() {
    countlabel.textContent = count; // Update the displayed count

    // Change the text color based on the count value
    if (count > 0) {
        countlabel.className = "text-green-700 font-mono font-semibold text-4xl mt-20 mb-20"; // Positive count
    } else if (count < 0) {
        countlabel.className = "text-red-700 font-mono font-semibold text-4xl mt-20 mb-20"; // Negative count
    } else {
        countlabel.className = "text-gray-800 font-mono font-semibold text-4xl mt-20 mb-20"; // Reset state
    }
}

increaseBtn.onclick = function(){
    count++;
    updateCountDisplay();
}

decreaseBtn.onclick = function(){
    count--;
    updateCountDisplay(); 
}

resetBtn.onclick = function(){
    count = 0;
    updateCountDisplay(); 
}

