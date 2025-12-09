// Start with the Function Declaration
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    // Selects the currently checked radio input with name="quiz"
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was actually selected
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        document.getElementById('feedback').style.color = "#ff8800"; // Orange for a warning
        return; // Exit the function if no choice is made
    }
    
    const userAnswer = selectedRadio.value;
    
    // 3. Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; // Green color for correct
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545"; // Red color for incorrect
    }
}

// 4. Add an Event Listener to the Submit Button
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-answer');
    // Note: checkAnswer is passed as a reference, not called with ()
    submitButton.addEventListener('click', checkAnswer);
});