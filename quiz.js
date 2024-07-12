// Function to check the user's answer
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the userAnswer is correct and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add an event listener to the submit button to call checkAnswer when clicked
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
