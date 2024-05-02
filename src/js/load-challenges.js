// Array of challenge file paths
const challengeFiles = [
    'src/challenges/osint/ftc.html',
    
    
  ];
  
  // Function to load a challenge file
  function loadChallenge(filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        const challengeContainer = document.getElementById('challenges');
        const div = document.createElement('div');
        div.innerHTML = html;
        challengeContainer.appendChild(div);
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }
  
  // Load all challenge files
  challengeFiles.forEach(loadChallenge);