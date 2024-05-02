function filterChallenges() {
  var category = document.getElementById('categoryFilter').value;
  var challenges = document.getElementById('challenges').children;

  for (var i = 0; i < challenges.length; i++) {
      var challenge = challenges[i];
      if (category === 'all' || challenge.getAttribute('data-category') === category) {
          challenge.style.display = '';
      } else {
          challenge.style.display = 'none';
      }
  }
}

// Assuming you have a list of categories
var categories = ['osint', 'math', 'crypto', 'detective', 'coding'];

// Get the category filter dropdown
var categoryFilter = document.getElementById('categoryFilter');

// Create an option element for each category
categories.forEach(function(category) {
    var option = document.createElement('option');
    option.value = category;
    option.text = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    categoryFilter.appendChild(option);
});

// Don't forget to add the 'All' option
var allOption = document.createElement('option');
allOption.value = 'all';
allOption.text = 'All';
categoryFilter.insertBefore(allOption, categoryFilter.firstChild);

