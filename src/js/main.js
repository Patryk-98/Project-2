console.log("This is a test"); //testing to ensure the js file is properly refferenced

document.getElementById("checkGradeBtn").addEventListener("click", function () {
  const gradeInput = document.getElementById("gradeInput");
  const grade = parseInt(gradeInput.value, 10);
  const resultText = document.getElementById("result");
  const resultImage = document.getElementById("resultImage");

  // Initially hide the result text and image
  resultText.style.display = "none";
  resultImage.style.display = "none";

  // Validate the input
  if (grade < 0 || grade > 100 || isNaN(grade)) {
    resultText.textContent = "Please enter a valid grade between 0 and 100.";
    resultText.style.display = "block"; // Show the error message
    resultImage.src = ""; // Clear the image
    return; // Stop execution
  }

  // Determine grade and display results
  if (grade >= 80) {
    resultText.textContent = "Congrats! You got a grade A (Distinction)";
    resultImage.src = "./src/img/5star.png";
  } else if (grade >= 65) {
    resultText.textContent = "Excellent! You got a grade B (Merit)";
    resultImage.src = "./src/img/4star.png";
  } else if (grade >= 50) {
    resultText.textContent = "Well done! You got a grade C (Pass)";
    resultImage.src = "./src/img/3star.png";
  } else {
    resultText.textContent = "Sorry, you have failed. (Unsuccessful)";
    resultImage.src = "./src/img/fail.jpg";
  }

  // Show the result text and image
  resultText.style.display = "block";
  resultImage.style.display = "block";
});
