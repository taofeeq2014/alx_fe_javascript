// script.js

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuote');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementById('newQuoteCategory');
const importFile = document.getElementById('importFile');

let quotes = []; // Initialize an empty array to store quotes

// Function to load quotes from localStorage (if any)
function loadQuotesFromLocalStorage() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
    displayQuote(); // Display an initial quote on load
  }
}

// Function to save quotes to localStorage
function saveQuotesToLocalStorage() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}


// Function to display a random quote
function displayQuote() {
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some!";
        return;
    }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category || "Unknown Category"}`;
}

// Function to add a new quote
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text === "") {
    alert("Please enter a quote.");
    return;
  }

  const newQuote = { text: text, category: category };
  quotes.push(newQuote);

  newQuoteText.value = ""; // Clear input fields
  newQuoteCategory.value = "";

  saveQuotesToLocalStorage(); // Save to localStorage
  displayQuote(); // Optionally display the new quote

}

// Event listener for the "New Quote" button
newQuoteButton.addEventListener('click', displayQuote);


// Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const importedQuotes = JSON.parse(e.target.result);

            if (Array.isArray(importedQuotes)) {
                quotes = quotes.concat(importedQuotes); // Add imported quotes to existing quotes
                saveQuotesToLocalStorage();
                displayQuote();
                alert("Quotes imported successfully!");
            } else {
                alert("Invalid JSON file format.  Must be an array of objects.");
            }

        } catch (error) {
            alert("Error parsing JSON file: " + error.message);
        }
    };

    reader.readAsText(file);
}

// Load quotes from localStorage on page load
loadQuotesFromLocalStorage();

["showRandomQuote", "innerHTML"]
   ["createAddQuoteForm"]
["Export Quotes"]
  ["populateCategories", "categoryFilter", "appendChild", "map"]
["fetchQuotesFromServer"]
["await", "async", "https://jsonplaceholder.typicode.com/posts", ".json"]

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
