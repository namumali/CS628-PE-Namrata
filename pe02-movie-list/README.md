Input

The application permits users to engage with a set list of films, with each film including attributes like title, genre, and release year. The user makes their choice through a dropdown menu, allowing them to sort movies according to genre. The dropdown selections automatically feature all distinct genres from the movie collection, including an "All Genres" choice to showcase every movie.

Process

The application is organized with React functional components and utilizes the `useState` hook for managing state. When a user picks a genre from the dropdown menu, an event handler modifies the `selectedGenre` state. This activates a re-rendering of the movie list, narrowing down the shown films to align with the chosen genre. When "All Genres" is chosen, the program clears the filter to display all films. Furthermore, when a user selects a movie, an alert box shows the title of the movie.

Output

The result features an attractive, centered collection of films shown as separate cards. Every card displays the film's title, genre, and year of release. The movie list that has been filtered changes in real-time according to the genre the user selects from the dropdown.
