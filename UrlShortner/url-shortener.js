// Function to shorten the URL using a simple hash function
function generateShortURL(longURL) {
  let hash = 0;
  for (let i = 0; i < longURL.length; i++) {
    const char = longURL.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36).substring(0, 6); // 6 characters as short URL
}

function shortenURL() {
  const longURLInput = document.getElementById('longURL');
  const shortURLLink = document.getElementById('shortURL');

  const longURL = longURLInput.value.trim();

  if (!longURL) {
    alert('Please enter a valid URL.');
    return;
  }

  const shortURL = generateShortURL(longURL);

  // In a real-world scenario, you'd send the shortURL to a server to store in a database.
  // For this example, we will just update the link on the page.
  shortURLLink.href = longURL;
  shortURLLink.textContent = shortURL;

  longURLInput.value = ''; // Clear the input field
}
