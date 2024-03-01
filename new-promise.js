async function getAllMovies() {
    try {
      // Fetch movies data
      const { data: moviesToUpdate } = await getMovies();
  
      // Map over moviesToUpdate array and fetch genre for each movie
      const updatedMovies = await Promise.all(moviesToUpdate.map(async (movie) => {
        const genre = await getGenreById(movie.genre);
        return { ...movie, genre };
      }));
  
      // Return the updated movies array
      return updatedMovies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return []; // Return an empty array if an error occurs
    }
  }
  