# EDMR Movie Recommendation

EDMR (Emotion-Based Movie Recommendation) is a web application that suggests movies based on the user's current and desired emotions. The app allows users to input their current and desired emotions, and it fetches a list of movies that match their mood.

## Features
- **Emotion-based movie recommendations**: Suggest movies based on user input emotions.
- **Movie details**: Provides detailed information about each movie.
- **Responsive design**: Fully functional on both desktop and mobile devices.

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Express.js**: Backend server handling the emotion-based movie recommendation logic.
- **TMDB API**: Used for fetching movie details.
- **Node.js**: JavaScript runtime for the backend server.
- **PostgreSQL**: Database for storing movie data (optional, if you're planning to store data).

## Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Steps to run the project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/KrishnaD098/EDMR-movies-recommendation.git
   ```

2. Navigate to the project directory:
    ```bash
    cd EDMR-movies-recommendation
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

## How it Works
1. The user inputs their current emotion (e.g., happy, sad, etc.) and the desired emotion they want to feel.
2. The recommended movies are displayed with details such as title, description, release date, and poster.