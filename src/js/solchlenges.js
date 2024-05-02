function solveftc(event) {
    var userInput;
    var correctAnswers = ["china", "brazil", "palectine"]; 
    var correctCount = 0; 

    for (var i = 0; i < 3; i++) {
        userInput = prompt("Please enter country #" + (i + 1) + ":");
        if (userInput !== null) {
            if (correctAnswers.includes(userInput.toLowerCase())) {
                correctCount++;
            }
        }
    }

    if (correctCount === 3) {
        // Create a new window for the image
        var popup = window.open("", "", "width=400,height=400");
        // Show the gif image in the new window
        popup.document.write("<img src='src/imgs/logos/congrats.gif'>");
        alert("Correct answers!");
    } else {
        alert("Incorrect answers. Please try again.");
    }
}



