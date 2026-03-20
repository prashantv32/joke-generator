# Joke Generator 🎲

A web app that generates random jokes using JokeAPI.
Jokes can be single-liners or two-part setup/punchline style.


## How to run

1. Clone the repository
   git clone https://github.com/prashantv32/joke-generator.git


2. Install dependencies
   npm install

3. Start the server
   nodemon index.js

4. Open your browser at
   http://localhost:3000

## Technologies used

- Node.js
- Express.js — server and routing
- Axios — HTTP requests to JokeAPI
- EJS — templating engine

## API used

JokeAPI — https://v2.jokeapi.dev/
- No authentication required
- Returns random jokes in JSON format
- Supports categories: Any, Programming, Dark, Pun, Spooky, Christmas
- Handles both single and twopart joke types

## Features

- Random joke generation on button click
- Handles both single and twopart jokes
- Error page for failed requests
- Rate limit info displayed on error

