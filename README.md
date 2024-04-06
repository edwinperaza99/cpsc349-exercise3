# cpsc349-exercise3 - JavaScript Learning Project

This project is a simple JavaScript application designed to deepen understanding and practical knowledge of JavaScript. This project is part of my coursework for CPSC-349 - Web Frontend Engineering at California State University, Fullerton.

## Project Overview

The core functionality of this project revolves around dynamically loading news articles and comments using JavaScript. It showcases my first-hand experience with vanilla JavaScript, particularly focusing on manipulating the DOM, handling events, and working with asynchronous operations.

## Key Features

- Dynamically loads news articles and their corresponding comments from JSON data.
- Implements a custom function to handle new line characters in article content, displaying them correctly on the web page.
- Utilizes event listeners to toggle the display of comments for each news article.

## Technologies Used

- HTML5
- CSS
  - [MVP.css](https://unpkg.com/mvp.css@1.12/mvp.css) for basic styling.
- JavaScript
  - DOM manipulation
  - Event handling
  - Asynchronous JavaScript (Async/Await)

## How to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/edwinperaza99/cpsc349-exercise3.git
   ```

2. **Open the Project**

   Open the index.html file in your web browser to view the project. If you're using VS Code, you can use the Live Server extension to serve the page on a local development server.

## Project Files

- `index.html`: The main HTML file that serves as the entry point for the website.
- `titles.css`: Custom CSS file for additional styling.
- `comments.js`: JavaScript file that contains the logic for loading and displaying news articles and comments.

## Acknowledgements

This project is a fork from a repository provided by [Professor Avery](https://github.com/ProfAvery) for educational purposes in CPSC 349.

### Provided Code

The initial fork from my professor's repository included the following JavaScript functionalities, which were essential in establishing the baseline for the project:

- `downloadPosts(page = 1)`: A function to fetch posts from a placeholder API, allowing for page-based navigation.
- `downloadComments(postId)`: A function to retrieve comments associated with a specific post ID from the placeholder API.
- `getUserName(userId)`: A function to fetch a user's name using their ID, contributing to a more personalized display of post information.
- `getArticleId(comments)`: A utility function to derive an article's ID from its related comments section for data association.
- An event listener setup on `details` elements to handle toggling of comments, enabling dynamic loading of user interactions.
