// Get all challenge elements
const challenges = document.querySelectorAll('.challenge-box');

// Function to filter challenges based on search input
function filterChallenges() {
  // Get search input
  const searchInput = document.getElementById('searchBox').value.toLowerCase();

  challenges.forEach(challenge => {
    // Get challenge name
    const challengeName = challenge.querySelector('h3').textContent.toLowerCase();

    if (challengeName.includes(searchInput)) {
      challenge.style.display = 'block';
    } else {
      challenge.style.display = 'none';
    }
  });
}

// Add event listener to search box
document.getElementById('searchBox').addEventListener('keyup', filterChallenges);