function coming(event, filePath) {
    event.preventDefault();
  
    // Open a new window with solve.html
    const newWindow = window.open('solve.html', '_blank');
  
    newWindow.addEventListener('load', function() {
      // Fetch the content of the other page
      fetch(filePath)
        .then(response => response.text())
        .then(html => {
          // Create a new div and set its innerHTML to the fetched HTML
          const div = newWindow.document.createElement('div');
          div.innerHTML = html;
  
          // Append the new div to the body of the new window
          newWindow.document.body.appendChild(div);
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
    });

    
  }

  
