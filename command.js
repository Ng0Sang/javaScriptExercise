const fs = require('fs');
const axios = require('axios');
const prompt = require('prompt');

const API_URL = 'https://icanhazdadjoke.com/search';
const JOKES_FILE = 'jokes.txt';

const getJoke = async (searchTerm) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'Accept': 'application/json' },
      params: { term: searchTerm },
    });

    const { results } = response.data;

    if (results.length > 0) {
      const randomJoke = results[Math.floor(Math.random() * results.length)].joke;
      console.log('Random Joke:', randomJoke);

      // Save the joke to the file
      fs.appendFileSync(JOKES_FILE, `${randomJoke}\n`, 'utf8');
      console.log('Joke saved to jokes.txt');
    } else {
      console.log('No jokes found for the search term.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const handleCommandLineArgument = () => {
  const args = process.argv.slice(2);

  if (args.includes('leaderboard')) {
    // Count the occurrences of each joke in the file and return the most popular one
    const jokes = fs.readFileSync(JOKES_FILE, 'utf8').split('\n').filter(Boolean);
    const jokeCount = jokes.reduce((count, joke) => {
      count[joke] = (count[joke] || 0) + 1;
      return count;
    }, {});
    const mostPopularJoke = Object.entries(jokeCount).reduce((a, b) => (b[1] > a[1] ? b : a));
    console.log('Most Popular Joke:', mostPopularJoke[0]);
  } else if (args.length > 0) {
    getJoke(args[0]);
  } else {
    console.log('Usage:');
    console.log('To search for a joke: node app.js <search term>');
    console.log('To get the most popular joke: node app.js leaderboard');
  }
};

// Check for command-line arguments
handleCommandLineArgument();

// If there are no command-line arguments, use the prompt module for user input (bonus part)
if (process.argv.length === 2) {
  prompt.start();
  prompt.get(['searchTerm'], (err, result) => {
    if (err) {
      console.error('Error:', err);
    } else {
      getJoke(result.searchTerm);
    }
  });
}
