# Review and Rating Application

This is a simple web application that allows users to view and search for reviews and ratings. Authorized users can also write reviews and assign ratings from zero to five stars.

## Features

- View and search for reviews
- Write reviews and assign ratings (authorized users only)

## Technologies Used

- HTML
- CSS
- JavaScript
- PHP
- SQLite

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   ```
2. Navigate to the project directory:
   ```
   cd workspace-blank
   ```
3. Start a local PHP server:
   ```
   php -S localhost:8000
   ```
4. Open your web browser and go to:
   ```
   http://localhost:8000
   ```

## File Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `styles.css`: The CSS file containing the styles for the web application.
- `script.js`: The JavaScript file containing the client-side logic for the web application.
- `server.php`: The PHP file containing the server-side logic for handling search and review submissions.
- `database.sqlite`: The SQLite database file containing the reviews and ratings.

## Database Schema

The SQLite database contains the following tables:

- `reviews`:
  - `id`: INTEGER PRIMARY KEY AUTOINCREMENT
  - `text`: TEXT NOT NULL
  - `rating`: INTEGER NOT NULL
  - `user_id`: INTEGER
  - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

- `users`:
  - `id`: INTEGER PRIMARY KEY AUTOINCREMENT
  - `username`: TEXT NOT NULL
  - `password`: TEXT NOT NULL
  - `email`: TEXT NOT NULL

## Usage

1. To search for reviews, enter a search query in the search form and click the "Search" button.
2. To write a review, authorized users can enter their review text and select a rating from zero to five stars, then click the "Submit Review" button.

## License

This project is licensed under the MIT License.
