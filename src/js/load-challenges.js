// Array of challenge file paths
const challengeFiles = [
  'src/challenges/to_load.html'
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


function coming(event, filePath) {
  event.preventDefault();

  // Open a new window with solve.html
  const newWindow = window.open('solve.html', '_blank');

  newWindow.addEventListener('load', function() {
      // Fetch the content of the other page
      fetch(filePath)
          .then(response => response.text())
          .then(html => {
              // Create a new DOM parser and parse the fetched HTML
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');

              // Create a new div and set its innerHTML to the body of the fetched HTML
              const div = newWindow.document.createElement('div');
              div.innerHTML = doc.body.innerHTML;

              // Append the new div to the body of the new window
              newWindow.document.body.appendChild(div);

              // Copy the styles from the fetched HTML to the new window
              const styles = doc.head.querySelectorAll('style');
              styles.forEach(style => {
                  const newStyle = newWindow.document.createElement('style');
                  newStyle.textContent = style.textContent;
                  newWindow.document.head.appendChild(newStyle);
              });

              // Load and execute the scripts in the fetched HTML
              const scripts = doc.querySelectorAll('script');
              scripts.forEach(script => {
                  const newScript = newWindow.document.createElement('script');
                  if (script.src) {
                      newScript.src = script.src;
                  } else {
                      newScript.textContent = script.textContent;
                  }
                  newWindow.document.body.appendChild(newScript);
              });
          })
          .catch(error => console.error(`Error loading ${filePath}:`, error));
  });
}