document.getElementById('category').addEventListener('change', function() {
    var selectedDifficulty = this.value;
    var challenges = document.getElementsByClassName('challenge-box');

    for (var i = 0; i < challenges.length; i++) {
        var challengeDifficulty = challenges[i].getElementsByTagName('p')[1].innerText.split(': ')[1];

        if (selectedDifficulty === '' || selectedDifficulty === challengeDifficulty) {
            challenges[i].style.display = 'block';
        } else {
            challenges[i].style.display = 'none';
        }
    }
});

document.getElementById('Theme').addEventListener('change', function() {
    var selectedTheme = this.value;
    var challenges = document.getElementsByClassName('challenge-box');

    for (var i = 0; i < challenges.length; i++) {
        var challengeTheme = challenges[i].getElementsByTagName('p')[0].innerText.split(': ')[1];

        if (selectedTheme === '' || selectedTheme === challengeTheme) {
            challenges[i].style.display = 'block';
        } else {
            challenges[i].style.display = 'none';
        }
    }
});