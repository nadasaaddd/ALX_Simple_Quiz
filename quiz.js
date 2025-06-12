function checkAnswer() {
  var correctAnswer = "4";
  // Retrieve the checked radio button
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');
  // Get the user's answer and store it in userAnswer
  let userAnswer = selectedRadio ? selectedRadio.value : null;

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!.";
  }
}

// Select the submit button
const submitButton = document.getElementById("submit-answer");

// Add click event listener to the submit button
submitButton.addEventListener("click", checkAnswer);
